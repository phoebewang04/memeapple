<?php
session_start(); // 啟動 session

// 錯誤報告
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// 載入php API共同參數
include_once '../sql.php';

class Login {
    private $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }

    // 登入API
    public function login($account, $password) {
        $sql = 'SELECT * FROM EMPLOYEE WHERE ACCOUNT = ?';
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$account]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && $password === $user['PASSWORD']) {
            $_SESSION['user'] = $user; // 在這裡保存 session
            return ['success' => true, 'role' => $user['ROLE'], 'user' => $user];
        } else {
            return ['success' => false, 'message' => '帳號或密碼錯誤'];
        }
    }

    // 登出API
    public function logout() {
        session_unset();
        session_destroy();
        return ['success' => true];
    }
}

$login = new Login($pdo);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    try {
        $action = $data['action'];

        if ($action === 'login') {
            $account = $data['account'];
            $password = $data['password'];
            $result = $login->login($account, $password);
            echo json_encode($result);
        } elseif ($action === 'logout') {
            $result = $login->logout();
            echo json_encode($result);
        }
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}

?>