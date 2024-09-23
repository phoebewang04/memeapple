<?php

// 載入php API共同參數
include_once '../sql.php';

class OrderCancel {
    private $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }

    // 更新訂單狀態API
    public function updateOrderStatus($orderId, $status) {
        $sql = "UPDATE orders SET ORDER_STATUS = ? WHERE ID = ?";

        $stmt = $this->db->prepare($sql);
        $stmt->execute([$status, $orderId]);
        error_log("SQL: $sql, Status: $status, Order ID: $orderId"); // 添加這行來記錄日誌

        if ($stmt->rowCount() > 0) {
            return ['success' => true];
        } else {
            return ['success' => false];
        }
    }
}

$orderCancel = new OrderCancel($pdo);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $orderId = $data['orderId'];
    $status = (int)$data['status'];
    $result = $orderCancel->updateOrderStatus($orderId, $status);
    header('Content-Type: application/json');
    echo json_encode($result);
}

?>