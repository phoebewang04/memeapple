<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// 載入php API共同參數
include_once '../sql.php';

class preorder{
    private $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }
    public function fetchOrdersByDateAndTheme($date, $themeId) {
        // 查詢語句需要根據日期和主題ID進行過濾
        $sql = "SELECT THEME_ID, ORDER_TIME, ORDER_ID FROM orderdetails WHERE ORDER_DATE = :date AND THEME_ID = :themeId";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':date', $date);
        $stmt->bindParam(':themeId', $themeId);
        $stmt->execute();;
        $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $orders;
    }


    public function fetchThemeRevenueByMonth($month, $year) {
        $sql = "SELECT THEME_ID, SUM(TOTAL_AMOUNT) AS theme_revenue FROM orderdetails WHERE MONTH(ORDER_DATE) = :month AND YEAR(ORDER_DATE) = :year GROUP BY THEME_ID, THEME_NAME";
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

$preorder = new preorder($pdo);

if (isset($_GET['date']) && isset($_GET['themeId'])) {
    $date = $_GET['date'];
    $themeId = $_GET['themeId'];  // 從 GET 請求中獲取 themeId
    // 查詢數據
    $orders = $preorder->fetchOrdersByDateAndTheme($date, $themeId);
    
    // 返回 JSON 響應
    header('Content-Type: application/json');
    echo json_encode($orders);
    exit;
} elseif (isset($_GET['month']) && isset($_GET['year'])) {
    $month = $_GET['month'];
    $year = $_GET['year'];
    $themeRevenue = $preorder->fetchThemeRevenueByMonth($month, $year);
    $storeRevenue = $preorder->fetchStoreRevenueByMonth($month, $year);
    header('Content-Type: application/json');
    echo json_encode(
        ['themeRevenue' => $themeRevenue ?: [],
         'storeRevenue' => $storeRevenue ?: []]);
    exit;
}

?>
