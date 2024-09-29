<?php

// 載入php API共同參數
include_once '../sql.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 獲取請求的資料
    $data = json_decode(file_get_contents('php://input'), true);
    $userId = $data['id'];
    $email = $data['email'];
    $name = $data['name'];
    $phone = $data['phone'];
    $password = $data['password'];
    $profession = $data['profession'];
    $color = $data['color'];


    file_put_contents('php://stderr', print_r($data, TRUE)); // 輸出接收到的資料

    // 構建 SQL 更新語句
    $sql = "UPDATE MEMBER SET EMAIL=?, NAME=?, PHONE=?, PASSWORD=? , PROFESSION_IMG=? , CARD_COLOR=? WHERE ID=?";
    

    try {
        // 準備 SQL 語句
        $stmt = $pdo->prepare($sql);
        
        // 執行語句
        $stmt->execute([$email, $name, $phone, $password, $profession, $color ,$userId ]);

        // 如果更新成功，返回成功的響應
        echo json_encode(['status' => 'success', 'message' => '資料已更新']);
        } catch (PDOException $e) {
            // 如果失敗，返回失敗的響應
            echo json_encode(['status' => 'error', 'message' => '更新失敗', 'error' => $e->getMessage()]);
        }
    } else {
        // 返回不支持的請求方法的響應
        echo json_encode(['status' => 'error', 'message' => '不支持的請求方法']);
    }

?>