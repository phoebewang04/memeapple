<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// 載入php API共同參數
require '../sql.php';

// // 獲取公告資料
// $query = "SELECT * FROM NEWS WHERE STATUS = 1";
// $stmt = $pdo->prepare($query);
// $stmt->execute();
// $announcements = $stmt->fetchAll(PDO::FETCH_ASSOC);

// // 返回 JSON 格式的公告資料
// echo json_encode($announcements);

class News{
    private $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }
    // 查詢資料 API
    public function getNews($status = null, $id = null) {
        // 這是三元運算子的運用
        // 檢查 $_GET['publish_date'] 是否存在
        // 如果存在，則將其值賦給 $publish_date
        // 如果不存在，則將空字符串 '' 賦給 $publish_date。
        $publish_date = isset($_GET['publish_date']) ? $_GET['publish_date'] : '';
        // 這也是三元運算子的運用
        // isset($_GET['keyword'])：檢查 $_GET['keyword'] 是否存在且不為 null。
        // ? $_GET['keyword']：如果條件為真（即 $_GET['keyword'] 存在），則返回 $_GET['keyword'] 的值。
        // : ''：如果條件為假（即 $_GET['keyword'] 不存在），則返回空字符串 ''。
        $keyword = isset($_GET['keyword']) ? $_GET['keyword'] : '';

        // SQL
        // 使用 WHERE 1=1 方便動態構建查詢條件，避免處理第一個條件前面的 AND 或 OR。
        $sql = 'SELECT * FROM NEWS WHERE 1=1';
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

        if ($status !== null) {
            $sql .= " AND STATUS = ?";
            $params[] = $status;
        }

        if ($id !== null) {
            $sql .= " AND ID = ?";
            $params[] = $id;
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
        $sql = "UPDATE NEWS SET STATUS = ? WHERE ID = ?";

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

    // 根據需求調用不同的方法
    if (isset($_GET['action']) && $_GET['action'] === 'updateStatus') {
        $id = $_GET['id'];
        $status = $_GET['status'];
        echo json_encode($news->updateStatus($id, $status));
    } else {
        // 查詢狀態為 0 的公告
        $id = isset($_GET['id']) ? $_GET['id'] : null;
        $news->getNews(0, $id);  // 查詢狀態為 0 的公告，並根據 ID 過濾
    }

?>