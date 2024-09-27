<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// 載入php API共同參數
include_once '../sql.php';

class ThemeRating{
    private $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }

    public function getThemeRating($themeId) {
        $sql = 'SELECT THEME_ID, DIFFICULT_AVG, SCARY_AVG, RECOMMAND_AVG FROM themerating WHERE THEME_ID = ?';
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$themeId]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}

$themeRating = new ThemeRating($pdo);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $themeId = $_GET['id'];
    try {
        $result = $themeRating->getThemeRating($themeId);
        echo json_encode($result);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}


?>