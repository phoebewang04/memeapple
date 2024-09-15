<?php
// CORS 設置
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// database.php
class Database {
    private $pdo;
    
    public function __construct($host, $dbname, $user, $password) {
        $dsn = "mysql:host=$host; dbname=$dbname; charset=utf8";
        $this->pdo = new PDO($dsn, $user, $password);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function getConnection() {
        return $this->pdo;
    }
}

// index.php
// Route handling
$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Database connection
$db = new Database('localhost', 'MemeStudio', 'root', 'password');
$pdo = $db->getConnection();

?>

