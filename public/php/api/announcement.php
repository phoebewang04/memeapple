<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'sql.php';

// 使前台分流頁顯示NEWS表格的資料

class Announcement {
    private $pdo;

    public function __construct($pdo){
        $this->pdo = $pdo;
    }

    public function getNews() {
        $stmt = $this->pdo->prepare("SELECT * FROM NEWS");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}

// 創建 Announcement 實例並抓取資料
$announcement = new Announcement($pdo);
$news = $announcement->getNews();

header('Content-Type: application/json');

// 將資料轉換為 JSON 格式並輸出
echo json_encode($news);

?>