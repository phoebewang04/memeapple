<?php

// 載入php API共同參數
include_once '../sql.php';

// 獲取 POST 資料
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$pass = $data['password'];
$name = $data['name'];
$phone = $data['phone'];

// 密碼加密
$pass_hash = password_hash($pass, PASSWORD_BCRYPT);

// 檢查是否已經有相同的帳號
$sql = "SELECT * FROM MEMBER WHERE EMAIL = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "帳號已存在"]);
} else {
    // 插入新用戶
    $sql = "INSERT INTO MEMBER(EMAIL, PASSWORD, NAME, PHONE) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $email, $pass_hash, $name, $phone);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "註冊成功"]);
    } else {
        echo json_encode(["status" => "error", "message" => $stmt->error]);
    }
}



?>