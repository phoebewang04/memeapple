<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// 載入php API共同參數
include_once '../sql.php';

class Dashboard{
    private $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }

    public function fetchOrdersByDate($date) {
        $sql = "SELECT THEME_ID, ORDER_TIME, ORDER_ID FROM orderdetails WHERE ORDER_DATE = :date";
        $stmt = $this->db->prepare($sql);
        // $stmt->bindParam(':date', $date);
        $stmt->execute(['date' => $date, 'themeId' => $themeId]);
        // $stmt->execute();
        $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $orders;
    }

    public function fetchThemeRevenueByMonth($month, $year) {
        $sql = "SELECT THEME_ID, THEME_NAME, SUM(TOTAL_AMOUNT) AS theme_revenue FROM orderdetails WHERE MONTH(ORDER_DATE) = :month AND YEAR(ORDER_DATE) = :year GROUP BY THEME_ID, THEME_NAME";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':month', $month);
        $stmt->bindParam(':year', $year);
        $stmt->execute();
        $themeRevenue = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $themeRevenue;
    }

    public function fetchStoreRevenueByMonth($month, $year) {
        $sql = "SELECT STORE_ID, STORE_NAME, SUM(TOTAL_AMOUNT) AS store_revenue FROM orderdetails WHERE MONTH(ORDER_DATE) = :month AND YEAR(ORDER_DATE) = :year GROUP BY STORE_ID, STORE_NAME";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':month', $month);
        $stmt->bindParam(':year', $year);
        $stmt->execute();
        $storeRevenue = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $storeRevenue;
    }

}

$dashboard = new Dashboard($pdo);

if (isset($_GET['date'])) {
    $date = $_GET['date'];
    $orders = $dashboard->fetchOrdersByDate($date);
    header('Content-Type: application/json');
    echo json_encode($orders);
    exit;
} elseif (isset($_GET['month']) && isset($_GET['year'])) {
    $month = $_GET['month'];
    $year = $_GET['year'];
    $themeRevenue = $dashboard->fetchThemeRevenueByMonth($month, $year);
    $storeRevenue = $dashboard->fetchStoreRevenueByMonth($month, $year);
    header('Content-Type: application/json');
    echo json_encode(
        ['themeRevenue' => $themeRevenue ?: [],
         'storeRevenue' => $storeRevenue ?: []]);
    exit;
}



?>