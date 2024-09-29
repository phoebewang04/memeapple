<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// 載入php API共同參數
include_once '../sql.php';

$data = json_decode(file_get_contents("php://input"), true);
// var_dump($data);

// 提取接收到的數據
$storeId = $data['storeId'] ?? ''; 
$themeId = $data['themeId'] ?? '';
$orderDate = $data['orderDate'] ?? '';
$orderTime = $data['orderTime'] ?? '';
$attendance = $data['attendance'] ?? '';
$memberId = $data['memberId'] ?? '';
$total = $data['total'] ?? 0; 
// $orderStatus = 2; 
$couponId = $data['couponId'] ?? '';




// 檢查必要的參數是否存在
if (empty($themeId) ||  empty($orderDate) || empty($orderTime) || empty($attendance) || empty($storeId)|| empty($memberId))  {
    echo json_encode(["status" => "error", "message" => "缺少必要的參數"]);
    exit();
}

function calculateTotal($attendance) {
    switch ($attendance) {
        case 4:
            return 3960;
        case 5:
            return 4600;
        case 6:
            return 5100;
        case 7:
            return 5460;
        case 8:
            return 5680;
        default:
            return 0;
    }
}
$total = calculateTotal($attendance);

// 連接資料庫
try {
    // 正確的 PDO 資料庫連接方式
    // $pdo = new PDO('mysql:host=localhost;dbname=your_database', 'username', 'password');
     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 插入資料到資料庫
    $sql = "INSERT INTO ORDERS (STORE_ID, THEME_ID, ORDER_DATE, ORDER_TIME, ATTENDANCE, MEMBER_ID, ORDER_STATUS, TOTAL" . 
            (!empty($couponId) ? ", COUPON_ID" : "") . ") 
        VALUES (:store_id, :theme_id, :order_date, :order_time, :attendance, :member_id, 2, :total" . 
            (!empty($couponId) ? ", :coupon_id" : "") . ");";

    $stmt = $pdo->prepare($sql);

    $stmt->bindParam(':store_id', $storeId);
    $stmt->bindParam(':theme_id', $themeId);
    $stmt->bindParam(':order_date', $orderDate);
    $stmt->bindParam(':order_time', $orderTime);
    $stmt->bindParam(':attendance', $attendance);
    $stmt->bindParam(':member_id', $memberId);
    $stmt->bindParam(':total', $total);

    if (!empty($couponId)) {
        $stmt->bindParam(':coupon_id', $couponId);
    };

    // 執行 SQL 語句
    $stmt->execute();

    echo json_encode(["status" => "success", "message" => "訂單成功建立", "total" => $total]);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>