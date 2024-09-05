<?php
// 允許跨域請求
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Member API
function getMembers($db) {
    $keyword = isset($_GET['keyword']) ? $_GET['keyword'] : '';
    $status = isset($_GET['status']) ? $_GET['status'] : '所有狀態';
    $statusMap = [
        '所有狀態' => '',
        '正常' => '0',
        '停權' => '1'
    ];

    // SQL
    $sql = 'SELECT * FROM MemeStudio.MEMBER';
    $params = [];

    if ($status != '所有狀態') {
        $sql .= " WHERE status = ?";
        $params[] = $statusMap[$status];
    }
    if ($keyword != '') {
        if ($status != '所有狀態') {
            $sql .= " AND (NAME LIKE ? OR EMAIL LIKE ? OR PHONE LIKE ?)";
        } else {
            $sql .= " WHERE (NAME LIKE ? OR EMAIL LIKE ? OR PHONE LIKE ?)";
        }
        $params[] = "%$keyword%";
        $params[] = "%$keyword%";
        $params[] = "%$keyword%";
    }

    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($results);
}

// Example usage
require_once 'api.php';
getMembers($db);
?>
