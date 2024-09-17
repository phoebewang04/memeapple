<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

require '../sql.php';

// 獲取公告資料
$query = "SELECT * FROM NEWS WHERE STATUS = 1";
$stmt = $pdo->prepare($query);
$stmt->execute();
$announcements = $stmt->fetchAll(PDO::FETCH_ASSOC);

// 返回 JSON 格式的公告資料
echo json_encode($announcements);
?>