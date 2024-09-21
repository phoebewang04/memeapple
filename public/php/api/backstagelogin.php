<?php

// 載入php API共同參數
include_once '../sql.php';

class Login {
    private $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }

    // 登入API
    public function login() {
        $account = $_POST['account'];
        $password = $_POST['password'];

        $sql = "SELECT * FROM EMPLOYEE WHERE ACCOUNT = ?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$account]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['PASSWORD'])) {
            $_SESSION['user'] = $user;
            echo json_encode(['success' => true, 'role' => $user['ROLE']]);
        } else {
            echo json_encode(['success' => false, 'message' => '帳號或密碼錯誤']);
        }
    }

    // 登出API
    public function logout() {
        session_unset();
        session_destroy();
        echo json_encode(['success' => true]);
    }

    // 檢查登入API
    public function checkStatus() {
        $response = ['loggedIn' => false];

        if (isset($_SESSION['user'])) {
            $response['loggedIn'] = true;
        }

        echo json_encode($response);
    }
}

$login = new Login($pdo);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['action'])) {
        if ($_POST['action'] == 'login') {
            $login->login();
        } elseif ($_POST['action'] == 'logout') {
            $login->logout();
        }
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $login->checkStatus();
}

?>