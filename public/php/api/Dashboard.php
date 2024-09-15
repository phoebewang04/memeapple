<?php

// 載入php API共同參數
include_once '../sql.php';

class Dashboard{
    private $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }

    public function fetchOrdersByDate($date) {
        $sql = "SELECT THEME_ID, ORDER_TIME, ORDER_ID FROM OrderDetails WHERE ORDER_DATE = :date";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':date', $date);
        $stmt->execute();
        $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $orders;
    }

}

$dashboard = new Dashboard($pdo);

if (isset($_GET['date'])) {
    $date = $_GET['date'];
    $orders = $dashboard->fetchOrdersByDate($date);
    header('Content-Type: application/json');
    echo json_encode($orders);
    exit;
} elseif (isset($_GET['param'])) {
    $param = $_GET['param'];
    $result = $dashboard->function2($param);
    echo json_encode($result);
}



?>