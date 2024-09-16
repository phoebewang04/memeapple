<?php

// CORS 設置
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// 載入資料庫連接
include_once '../sql.php'; // 確保路徑正確，從 api 回到上一層再找到 sql.php

// 獲取會員ID 和 遊戲ID
$memberId = $_GET['member_id'] ?? null;
$gameId = $_GET['game_id'] ?? null;

if ($memberId && $gameId) {
    // 檢查該會員是否已經有優惠券
    $sql = "SELECT * FROM COUPON WHERE MEMBER_ID = ? AND GAME_ID = ? AND COUPON_STATUS = 1";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$memberId, $gameId]);

    // 如果有查詢結果，表示已經有優惠券
    if ($stmt->rowCount() > 0) {
        echo json_encode([
            'status' => 'exists',
            'message' => '您已經擁有該優惠券',
        ]);
    } else {
        // 如果沒有查詢結果，則新增一筆優惠券記錄
        $discount = 150; // 優惠券折扣金額
        $couponStatus = 1; // 未使用

        $insertSql = "INSERT INTO COUPON (DISCOUNT, MEMBER_ID, COUPON_STATUS, GAME_ID) VALUES (?, ?, ?, ?)";
        $insertStmt = $pdo->prepare($insertSql);
        $insertStmt->execute([$discount, $memberId, $couponStatus, $gameId]);

        echo json_encode([
            'status' => 'success',
            'message' => '優惠券已成功領取！',
        ]);
    }
} else {
    echo json_encode([
        'status' => 'error',
        'message' => '缺少會員ID或遊戲ID參數。',
    ]);
}

?>



// // 載入php API共同參數
// include_once '../sql.php';


// //會員ID 和 遊戲ID(1：華容道； 2：1A2B； 3：密室)
// $memberId=$_GET['member_id'];
// $gameId=$_GET['game_id'];

// //檢查該會員是否已經有優惠券
// $sql = "SELECT * FROM COUPON WHERE MEMBER_ID = ? AND GAME_ID = ? AND COUPON_STATUS = 1";
// $stmt = $pdo->prepare($sql);
// $stmt->execute([$memberId, $gameId]);

// //如果有查詢結果，表示已經有優惠券
// if ($stmt->rowCount() > 0) {
//     echo json_encode([
//         'status' => 'exists',
//         'message' => '您已經擁有該優惠券',
//     ]);
// } else {
//     // 如果沒有查詢結果，則新增一筆優惠券記錄
//     $discount = 150; // 優惠券折扣金額
//     $couponStatus = 1; // 未使用

//     $insertSql = "INSERT INTO COUPON (DISCOUNT, MEMBER_ID, COUPON_STATUS, GAME_ID) VALUES (?, ?, ?, ?)";
//     $insertStmt = $pdo->prepare($insertSql);
//     $insertStmt->execute([$discount, $memberId, $couponStatus, $gameId]);

//     echo json_encode([
//         'status' => 'success',
//         'message' => '優惠券已成功領取！',
//     ]);
// }
?>