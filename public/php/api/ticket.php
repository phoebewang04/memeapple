<?php

// 載入php API共同參數
include_once '../sql.php';

class Order {
    private $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }   

    // Order API
    public function getOrders() {

        $order_date = isset($_GET['order_date']) ? $_GET['order_date'] : '';
        $store_name = isset($_GET['store_name']) ? $_GET['store_name'] : '所有分館';
        $theme_name = isset($_GET['theme_name']) ? $_GET['theme_name'] : '所有主題';
        $order_status = isset($_GET['order_status']) ? $_GET['order_status'] : '所有狀態';
        $keyword = isset($_GET['keyword']) ? $_GET['keyword'] : '';
        $memberId = isset($_GET['memberId']) ? $_GET['memberId'] : '';

        // SQL
        $sql = 'SELECT * FROM orderdetails WHERE 1=1';
        $params = [];

        if ($order_date != '') {
            $sql .= " AND ORDER_DATE = ?";
            $params[] = $order_date;
        }
        if ($store_name != '所有分館') {
            $sql .= " AND STORE_NAME = ?";
            $params[] = $store_name;
        }
        if ($theme_name != '所有主題') {
            $sql .= " AND THEME_NAME = ?";
            $params[] = $theme_name;
        }
        if ($order_status != '所有狀態') {
            $sql .= " AND ORDER_STATUS = ?";
            $params[] = $order_status;
        }
        if ($keyword != '') {
            $sql .= " AND (ORDER_ID LIKE ? OR MEMBER_NAME LIKE ? OR MEMBER_PHONE LIKE ? OR MEMBER_EMAIL LIKE ?)";
            $params[] = "%$keyword%";
            $params[] = "%$keyword%";
            $params[] = "%$keyword%";
            $params[] = "%$keyword%";
        }
        if ($memberId != '') {
        //echo $memberId;

            $sql .= " AND MEMBER_ID = ?";
            $params[] = $memberId;
        }

        $sql .= " ORDER BY ORDER_DATE DESC";

        $stmt = $this->db->prepare($sql);
        $stmt->execute($params);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-Type: application/json');
        echo json_encode($results);
    }

}

$order = new Order($pdo);
$order->getOrders();  //暫時寫死



?>