<?php

// 載入php API共同參數
include_once '../sql.php';

class Dashboard{
    private $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }

    public function getTable() {

        $date = $_GET['date'] ?? null;
        $time = $_GET['time'] ?? null;
        $themeName = $_GET['theme_name'] ?? null;

        // SQL
        $sql = "SELECT ORDER_ID, ORDER_DATE, ORDER_TIME, THEME_NAME FROM `OrderDetails` WHERE ORDER_DATE = ?";
        $params = ['date' => $date];

        try{
            $stmt = $this->db->prepare($sql);
            $stmt->execute($params);
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

            header('Content-Type: application/json');
            echo json_encode($results);
        } catch(PDOException $e) {
            echo 'Error: ' . $e->getMessage();
        }


    }

}



?>