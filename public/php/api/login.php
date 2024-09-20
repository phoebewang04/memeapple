<?php

// 載入php API共同參數
include_once '../sql.php';


// 獲取請求的數據
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['username'] ?? null;  // 確保變數名與前端一致
$pass = $data['password'] ?? null;


if ($email && $pass) {
    try {
        // 使用 PDO 進行查詢
        $sql = "SELECT * FROM MEMBER WHERE EMAIL = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(1, $email);
        $stmt->execute();
        
        if ($stmt->rowCount() > 0) {
            $user_data = $stmt->fetch(PDO::FETCH_ASSOC);

            // 確保資料庫中的密碼欄位名稱正確
            if ($pass === $user_data['PASSWORD']) {
                echo json_encode(["status" => "success", "message" => "登入成功",  "user" => [
                        "id" => $user_data['ID'],
                        "name" => $user_data['NAME'],
                        "email" => $user_data['EMAIL'],
                        "phone" => $user_data['PHONE'],
                        "status" => $user_data['STATUS'],
                    ]]);
            } else {
                echo json_encode(["status" => "error", "message" => "密碼錯誤"]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "用戶名不存在"]);
        }
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "資料庫錯誤: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "請提供帳號和密碼"]);
}


?>