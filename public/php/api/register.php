<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// 載入php API共同參數
include_once '../sql.php';

// 獲取 POST 資料
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'] ?? '';
$pass = $data['password'] ?? '';
$name = $data['name'] ?? '';
$phone = $data['phone'] ?? '';

// 檢查是否有必要的參數
if (!$email || !$pass || !$name || !$phone) {
    echo json_encode(["status" => "error", "message" => "缺少必要的參數"]);
    exit();
}

// 檢查是否已經有相同的帳號
$sql = "SELECT * FROM MEMBER WHERE EMAIL = ? OR PHONE = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$email, $phone]);

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (count($result) > 0) {
    $existingEmails = array_column($result, 'EMAIL');
    $existingPhones = array_column($result, 'PHONE');

    $messages = [];
    if (in_array($email, $existingEmails)) {
        $messages[] = "帳號已存在";
    }
    if (in_array($phone, $existingPhones)) {
        $messages[] = "電話號碼已存在";
    }
    echo json_encode(["status" => "error", "message" => implode(", ", $messages)]);
    exit;
} else {
    $sql = "INSERT INTO MEMBER(EMAIL, PASSWORD, NAME, PHONE, REGI_DATE, STATUS) VALUES (?, ?, ?, ?, CURDATE(),0)";
    $stmt = $pdo->prepare($sql);

    if ($stmt->execute([$email, $pass, $name, $phone])) { // 直接使用 execute
        echo json_encode(["status" => "success", "message" => "註冊成功"]);
    } else {
        echo json_encode(["status" => "error", "message" => "註冊失敗，請稍後再試。"]);
    }
}

?>