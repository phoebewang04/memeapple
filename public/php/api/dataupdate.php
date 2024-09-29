<?php

// 載入 php API 共同參數
include_once '../sql.php';

// 獲取請求的數據
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['memberId'])) {
    $memberId = $data['memberId'];

    try {
        // 使用 PDO 進行查詢
        $sql = "SELECT * FROM memberdetails WHERE ID = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(1, $memberId, PDO::PARAM_INT);
        $stmt->execute();
        
        if ($stmt->rowCount() > 0) {
            $user_data = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode([
                "status" => "success",
                "message" => "獲取成功",
                "user" => [
                    "id" => $user_data['ID'],
                    "name" => $user_data['NAME'],
                    "email" => $user_data['EMAIL'],
                    "phone" => $user_data['PHONE'],
                    "status" => $user_data['STATUS'],
                    "password" => $user_data['PASSWORD'],
                    "regidate" => $user_data['REGI_DATE'],
                    "ordercounts" => $user_data['ORDER_COUNTS'],
                    "profession" => $user_data['PROFESSION'],
                    "color" => $user_data['COLOR'],
                ]
            ]);
        } else {
            echo json_encode(["status" => "error", "message" => "用戶名不存在"]);
        }
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "資料庫錯誤: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "請提供會員 ID"]);
}

?>