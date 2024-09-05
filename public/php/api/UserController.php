<?php
include_once '../config/database.php';

class UserController {
    private $db;

    public function __construct() {
        $database = new Database();
        $this->db = $database->getConnection();
    }

    public function getUsers() {
        $query = "SELECT id, name, email FROM MEMBER";
        $stmt = $this->db->prepare($query);
        $stmt->execute();

        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
    }

    public function getUser($id) {
        $query = "SELECT id, name, email FROM MEMBER WHERE id = ?";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(1, $id);
        $stmt->execute();

        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($user);
    }

    public function createUser($name, $email) {
        $query = "INSERT INTO MEMBER SET name = :name, email = :email";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":email", $email);

        if ($stmt->execute()) {
            echo json_encode(array("message" => "User created."));
        } else {
            echo json_encode(array("message" => "Unable to create user."));
        }
    }
}
