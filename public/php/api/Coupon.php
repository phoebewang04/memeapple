<?php

// CORS 設置
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type, Authorization");
// header("Content-Type: application/json");

// 載入資料庫連接
include_once '../sql.php'; // 確保路徑正確，從 api 回到上一層再找到 sql.php

// 獲取會員ID 和 折扣金額

$method = $_SERVER['REQUEST_METHOD'];

if($method === 'GET'){
    $memberId = filter_input(INPUT_GET, 'member_id', FILTER_VALIDATE_INT);
    $discount = filter_input(INPUT_GET, 'discount', FILTER_VALIDATE_INT);

    if ($memberId === false || $discount === false) {
        die(json_encode(['status' => 'error', 'message' => '無效的會員ID或優惠金額']));
    }

    $sql = "SELECT * FROM COUPON WHERE MEMBER_ID = ? AND DISCOUNT = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$memberId, $discount]);

    if ($stmt->rowCount() > 0) {
        echo json_encode([
            'status' => 'exists',
            'message' => 'you have coupon',
        ]);
    } else {
        echo json_encode([
            'status' => 'not_found',
            'message' => 'you get coupon',
        ]);
    }

}else if($method === 'POST'){
    // $memberId = filter_input(INPUT_POST, 'member_id', FILTER_VALIDATE_INT);
    // $discount = filter_input(INPUT_POST, 'discount', FILTER_VALIDATE_INT);
    
    $memberId = $_POST["member_id"];
    $discount = $_POST["discount"];
    // $memberId = 40;
    // $discount = 150;


    var_dump($discount); // 打印折扣值來確認
    error_log("接收到的 DISCOUNT 值: " . $discount);

    if ($memberId === false || $discount === false) {
        die(json_encode(['status' => 'error', 'message' => '無效的會員ID或優惠金額']));
    }

    // 插入新的優惠券記錄
    // $couponStatus = 1; // 未使用
    $insertSql = "INSERT INTO COUPON (DISCOUNT, MEMBER_ID) VALUES (?, ?)";
    // $insertSql = "INSERT INTO COUPON (DISCOUNT, MEMBER_ID, COUPON_STATUS) VALUES (?, ?, ?)";
    $insertStmt = $pdo->prepare($insertSql);
    $insertStmt->execute([$discount, $memberId]);
    // $insertStmt->execute([$discount, $memberId, $couponStatus]);

    echo json_encode([
        'status' => 'success',
        'message' => 'you get coupon',
    ]);
}

?>