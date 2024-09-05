<?php
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
