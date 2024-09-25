<?php

// 錯誤報告
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

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
        $id = isset($_GET['id']) ? $_GET['id'] : null;

        if ($id) {
            // 編輯最新消息查詢特定ID資料
            $sql = 'SELECT * FROM newsdetails WHERE ID = ?';
            $stmt = $this->db->prepare($sql);
            $stmt->execute([$id]);
            $news = $stmt->fetch(PDO::FETCH_ASSOC);
            header('Content-Type: application/json');
            echo json_encode($news);
        } else {
            // 清單查詢SQL
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
    }

    // 新增資料API
    public function addNews($title, $content, $imagePath, $status, $publishDate, $publisherId) {
        $sql = 'INSERT INTO NEWS (TOPIC, ARTICLE, IMG, STATUS, PUBLISH_DATE, PUBLISHER_ID) VALUES (?, ?, ?, ?, NOW(), ?)';
        $stmt = $this->db->prepare($sql);

        if (!$stmt->execute([$title, $content, $imagePath, $status, $publisherId])) {
            return['success' => false, 'message' => 'SQL 執行失敗'];
            exit;
        }

        if ($stmt->rowCount() > 0) {
            return['success' => true, 'message' => '新增成功'];
        } else {
            return['success' => false, 'message' => '新增失敗', 'error' => $stmt->errorInfo()];
        }
    }

    // 更新狀態API
    public function updateStatus($id, $status) {
        $sql = "UPDATE NEWS SET STATUS = ? WHERE ID = ?";

        $stmt = $this->db->prepare($sql);
        $stmt->execute([$status, $id]);

        if ($stmt->rowCount() > 0) {
            return['success' => true, 'message' => '狀態更新成功'];
        } else {
            return['success' => false, 'message' => '狀態更新失敗'];
        }
    }

    // 更新資料API
    public function updateNews($id, $title, $content, $imagePath){
        $sql = 'UPDATE NEWS SET TOPIC = ?, ARTICLE = ?, IMG = ? WHERE ID = ?';
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$title, $content, $imagePath, $id]);

        if ($stmt->rowCount() > 0) {
            return['success' => true, 'message' => '更新成功'];
        } else {
            return['success' => false, 'message' => '更新失敗'];
        }
    }
}

$news = new News($pdo);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $news->getNews();
} else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if (isset($data['id']) && isset($data['status'])) {
        $id = $data['id'];
        $status = $data['status'];

        $result = $news->updateStatus($id, $status);

        header('Content-Type: application/json');
        echo json_encode($result);
    } else if (isset($_POST['title']) && isset($_POST['content']) && isset($_FILES['image'])) {
        try{
            $action = $_POST['action'];
            $title = $_POST['title'];
            $content = $_POST['content'];
            $id = $_POST['id'];
            $image = $_FILES['image'];
            // $publisherId = 1; // 暫時設定為1
            $publisherId = $_POST['publisherId'];
            $publishDate = date('Y-m-d');
            $status = 0;
    
            // 圖片上傳
            $targetDir = $_SERVER['DOCUMENT_ROOT'] . '/tid102/g1/front/img/';
            // $targetDir = '../../img/';
            $targetFile = $targetDir . basename($image['name']);
            if (move_uploaded_file($image['tmp_name'], $targetFile)) {
                // $imagePath = '/img/'. basename($image['name']);
                $imagePath = 'public/img/'. basename($image['name']);
            } else {
                $imagePath = null;
                echo json_encode(['success' => false, 'message' => '圖片上傳失敗']);
                exit;
            }
    
            if ($action == 'update') {
                $result = $news->updateNews($id, $title, $content, $imagePath);
            } else {
                $result = $news->addNews($title, $content, $imagePath, $status, $publishDate, $publisherId);
            }
    
            header('Content-Type: application/json');
            echo json_encode($result);
        } catch (Exception $e) {
            echo '幹你娘機掰: ', $e->getMessage(), "\n";
        }
    } else {
        // 測試缺少的參數
        $missingParams = [];
        if (!isset($_POST['title'])) $missingParams[] = 'title';
        if (!isset($_POST['content'])) $missingParams[] = 'content';
        if (!isset($_FILES['image'])) $missingParams[] = 'image';

        // 輸出除錯訊息
        echo json_encode([
            'success' => false,
            'message' => '缺少必要的參數: ' . implode(', ', $missingParams),
            'post_data' => $_POST,
            'files_data' => $_FILES
        ]);
        exit;
    }
}

?>


