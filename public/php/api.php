<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Database connection
$host = '127.0.0.1';
$port = 3306;
$dbname = 'MemeStudio';
$user = 'root';
$password = 'password';

try {
    $db = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $user, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected to database\n";
} catch (PDOException $e) {
    echo "Error connecting to DB: " . $e->getMessage();
    exit;
}

// Include member API
require_once 'member.php';

// Route handling
$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

if (strpos($requestUri, '/php/member.php') === 0) {
    if ($requestMethod === 'GET') {
        getMembers($db);
    } else {
        header("HTTP/1.1 405 Method Not Allowed");
        echo json_encode(['error' => 'Method Not Allowed']);
    }
} else {
    header("HTTP/1.1 404 Not Found");
    echo json_encode(['error' => 'Not Found']);
}
?>

