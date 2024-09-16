<?php

// 載入php API共同參數
include_once '../sql.php';

// $username = $_POST['username'];
// $pwd = $_POST['password'];

// $sql = "SELECT * FROM MEMBER where EMAIL = ? and PASSWORD = ?";

// $statement = $pdo->prepare($sql);
// $statement->bindValue(1,$username);
// $statement->bindValue(2,$pwd);
// $statement->execute();
// $data = $statement->fetchAll();

// if(count($data) > 0){
//      echo "登入成功";
// //     header("Location: Welcome.php");
// //     session_start();
// //     $_SESSION["memberID"] = "$account";
// }else{
//      echo "帳號或密碼錯誤";
// //     header("Location: Login.html");
// }

// 獲取 POST 資料
$data = json_decode(file_get_contents("php://input"), true);
$user = $data['username'];
$pass = $data['password'];

// 檢查用戶名和密碼
$sql = "SELECT * FROM MEMBER WHERE EMAIL = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $user);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user_data = $result->fetch_assoc();
    if (password_verify($pass, $user_data['password'])) {
        echo json_encode(["status" => "success", "message" => "登入成功"]);
    } else {
        echo json_encode(["status" => "error", "message" => "密碼錯誤"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "用戶名不存在"]);
}





?>