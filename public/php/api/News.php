<?php

// 載入php API共同參數
include_once '../sql.php';

class News {
    private $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }   

    // 查詢資料 API
    public function getNews() {

        $publish_date = isset($_GET['publish_date']) ? $_GET['publish_date'] : '';
        $keyword = isset($_GET['keyword']) ? $_GET['keyword'] : '';

        // SQL
        $sql = 'SELECT * FROM newsdetails WHERE 1=1';
        $params = [];

        if ($publish_date != '') {
            $sql .= " AND PUBLISH_DATE = ?";
            $params[] = $publish_date;
        }
        if ($keyword != '') {
            $sql .= " AND (TOPIC LIKE ? OR ARTICLE LIKE ? OR PUBLISHER_NAME LIKE ?)";
            $params[] = "%$keyword%";
            $params[] = "%$keyword%";
            $params[] = "%$keyword%";
        }
        $sql .= " ORDER BY PUBLISH_DATE DESC";

        $stmt = $this->db->prepare($sql);
        $stmt->execute($params);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-Type: application/json');
        echo json_encode($results);
    }

    // 更新狀態API
    public function updateStatus($id, $status) {
        $sql = "UPDATE newsdetails SET STATUS = ? WHERE ID = ?";

        $stmt = $this->db->prepare($sql);
        $stmt->execute([$status, $id]);

        if ($stmt->rowCount() > 0) {
            return ['success' => true];
        } else {
            return ['success' => false];
        }
    }

}

$news = new News($pdo);
$news->getNews();  //暫時寫死



?>