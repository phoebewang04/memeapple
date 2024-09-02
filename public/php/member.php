<?php
// 連線到資料庫
include("./sql.php");

// 設定參數
$status = $_GET['status'];
    $statusMap = [
        '所有狀態' => '',
        '正常' => '0',
        '停權' => '1'
    ];

$keyword = $_GET['keyword'];

// 設定SQL語法
$query = "SELECT * FROM MEMBER";

if ($status != '所有狀態') {
    $statusValue = $statusMap[$status];
    $query .= " WHERE status = :status";
}
if ($keyword != '') {
    if ($status != '全部' && $status != '') {
        $query .= " AND (NAME LIKE :keyword OR EMAIL LIKE :keyword OR PHONE LIKE :keyword)";
    } else {
        $query .= " WHERE (NAME LIKE :keyword OR EMAIL LIKE :keyword OR PHONE LIKE :keyword)";
    }
}

// 執行
$statement = $pdo->prepare($query);
if ($status != '全部') {
    $statement->bindParam(':status', $statusMap[$status]);
}
$statement->bindParam(':keyword', $keyword);
$statement->execute();
$result = $statement->fetchAll(PDO::FETCH_ASSOC);

// Output data as JSON
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}
echo json_encode($data, JSON_NUMERIC_CHECK);
?>