<?php

// 載入php API共同參數
include_once '../sql.php';

class Member {
    private $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }   

    // Member API
    public function getMembers() {

        $keyword = isset($_GET['keyword']) ? $_GET['keyword'] : '';
        $status = isset($_GET['status']) ? $_GET['status'] : '所有狀態';
        $statusMap = [
            '所有狀態' => '',
            '正常' => '0',
            '停權' => '1'
        ];

        // SQL
        $sql = 'SELECT * FROM memberdetails';
        $params = [];

        if ($status != '所有狀態') {
            $sql .= " AND STATUS = ?";
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

        $stmt = $this->db->prepare($sql);
        $stmt->execute($params);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-Type: application/json');
        echo json_encode($results);
    }

    // 更新狀態API
    public function updateStatus($id, $status) {
        $sql = "UPDATE memberdetails SET STATUS = ? WHERE ID = ?";

        $stmt = $this->db->prepare($sql);
        $stmt->execute([$status, $id]);

        if ($stmt->rowCount() > 0) {
            return ['success' => true];
        } else {
            return ['success' => false];
        }
    }

}

$member = new Member($pdo);
// $member->getMembers();  //暫時寫死

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $member->getMembers();
} else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];
    $status = $data['status'];
    $result = $member->updateStatus($id, $status);
    header('Content-Type: application/json');
    echo json_encode($result);
}


?>
