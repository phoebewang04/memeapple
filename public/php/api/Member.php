<?php

// 載入DB參數
include_once '../config/database.php';
include_once '../api/index.php';



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

        $stmt = $this->db->prepare($sql);
        $stmt->execute($params);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-Type: application/json');
        echo json_encode($results);
    }

    // 更新狀態
    // public function updateStatus($id) {
    //     // Update Status
    //     $query = "UPDATE MemeStudio.MEMBER SET status = ? WHERE id = ?";
    //     $stmt = $this->db->prepare($query);

    //     $_GET['status'] = $_GET['status'] == '正常' ? '0' : '1';
        
    //     $stmt->bindParam(1, $_GET['status']);
    //     $stmt->bindParam(2, $id);
    //     $stmt->execute();
    // }

}

$db = new Database('localhost', 'MemeStudio', 'root', 'password');
$pdo = $db->getConnection();
$member = new Member($pdo);
$member->getMembers();  //暫時寫死

// switch methods
// $method = $_SERVER['REQUEST_METHOD'];
// switch ($method) {
//     case 'GET':
//         $member->getMembers();
//         break;
//     case 'POST':
//         $member->updateStatus($_POST['id']);
//         break;
// }


?>
