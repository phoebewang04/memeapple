<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include_once './UserController.php';

$method = $_SERVER['REQUEST_METHOD'];
$userController = new UserController();

switch($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $userController->getUser($_GET['id']);
        } else {
            $userController->getUsers();
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        $userController->createUser($data->name, $data->email);
        break;

    default:
        echo json_encode(array("message" => "Method not supported"));
        break;
}
