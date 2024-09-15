<?php
// 組合兩版CORS設定
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

require 'sql.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $stmt = $pdo->prepare("SELECT * FROM News"); // 注意表格名稱是 News
    $stmt->execute();
    $news = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($news);
    exit;
}










?>