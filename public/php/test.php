<?php
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
}
?>