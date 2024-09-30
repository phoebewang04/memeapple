<?php
// 載入php API共同參數
include_once '../sql.php';

try {
    // 檢查請求方法
    if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['orderId'])) {
        $orderId = $_GET['orderId'];

        // 獲取該訂單的評分資料
        $stmt = $pdo->prepare("SELECT SURVEY_ID FROM ORDERS WHERE ID = :id");
        $stmt->bindParam(':id', $orderId, PDO::PARAM_INT);
        $stmt->execute();
        $surveyId = $stmt->fetchColumn();

        if ($surveyId) {
            // 如果存在，獲取評分資料
            $stmt = $pdo->prepare("SELECT DIFFICULT, SCARY, RECOMMAND FROM SURVEY WHERE ID = :surveyId");
            $stmt->bindParam(':surveyId', $surveyId, PDO::PARAM_INT);
            $stmt->execute();
            $survey = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($survey) {
                echo json_encode([
                    "tasks" => [
                        ["label" => "燒腦指數", "star" => $survey['DIFFICULT']],
                        ["label" => "驚嚇指數", "star" => $survey['SCARY']],
                        ["label" => "推薦指數", "star" => $survey['RECOMMAND']],
                    ]
                ]);
            } else {
                echo json_encode(["tasks" => []]);
            }
        } else {
            echo json_encode(["tasks" => []]);
        }
        exit();
    }

    // 如果是 POST 請求，處理評分的提交
    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data || !isset($data['orderId'])) {
        echo json_encode(["message" => "無效的資料格式"]);
        exit();
    }

    $orderId = $data['orderId'];
    $difficult = $data['difficult'];
    $scary = $data['scary'];
    $recommand = $data['recommand'];

    // 準備 SQL 語句，檢查該訂單是否已經填寫問卷
    $stmt = $pdo->prepare("SELECT SURVEY_ID FROM ORDERS WHERE ID = :id");
    $stmt->bindParam(':id', $orderId, PDO::PARAM_INT);
    $stmt->execute();
    $surveyId = $stmt->fetchColumn();

    if ($surveyId) {
        // 如果已存在，進行更新
        $stmt = $pdo->prepare("UPDATE SURVEY SET DIFFICULT = :difficult, SCARY = :scary, RECOMMAND = :recommand WHERE ID = :surveyId");
        $stmt->bindParam(':difficult', $data['difficult'], PDO::PARAM_INT);
        $stmt->bindParam(':scary', $data['scary'], PDO::PARAM_INT);
        $stmt->bindParam(':recommand', $data['recommand'], PDO::PARAM_INT);
        $stmt->bindParam(':surveyId', $surveyId, PDO::PARAM_INT);

        if (!$stmt->execute()) {
            echo json_encode(["message" => "更新 SURVEY 失敗: " . implode(", ", $stmt->errorInfo())]);
            exit();
        }
    } else {
        // 如果不存在，插入新的評分
        $stmt = $pdo->prepare("INSERT INTO SURVEY (DIFFICULT, SCARY, RECOMMAND) VALUES (:difficult, :scary, :recommand)");
        $stmt->bindParam(':difficult', $data['difficult'], PDO::PARAM_INT);
        $stmt->bindParam(':scary', $data['scary'], PDO::PARAM_INT);
        $stmt->bindParam(':recommand', $data['recommand'], PDO::PARAM_INT);

        if (!$stmt->execute()) {
            echo json_encode(["message" => "插入 SURVEY 失敗: " . implode(", ", $stmt->errorInfo())]);
            exit();
        }

        // 獲取新插入的 SURVEY ID
        $surveyId = $pdo->lastInsertId();

        // 更新 orders 表中的 SURVEY_ID
        $stmt = $pdo->prepare("UPDATE ORDERS SET SURVEY_ID = :surveyId WHERE ID = :id");
        $stmt->bindParam(':surveyId', $surveyId, PDO::PARAM_INT);
        $stmt->bindParam(':id', $orderId, PDO::PARAM_INT);

        if (!$stmt->execute()) {
            echo json_encode(["message" => "更新 ORDERS 失敗: " . implode(", ", $stmt->errorInfo())]);
            exit();
        }
    }

    echo json_encode(["message" => "評分已成功送出！"]);
} catch (PDOException $e) {
    echo json_encode(["message" => "錯誤: " . $e->getMessage()]);
}












// try {
//     // 獲取 JSON 請求資料
//     $data = json_decode(file_get_contents("php://input"), true);
//     if (!$data || !isset($data['orderId'])) {
//         echo json_encode(["message" => "無效的資料格式"]);
//         exit();
//     }

//     $orderId = $data['orderId'];
//     $difficult = $data['difficult'];
//     $scary = $data['scary'];
//     $recommand = $data['recommand'];
    

//     // 準備 SQL 語句，檢查該訂單是否已經填寫問卷
//     $stmt = $pdo->prepare("SELECT SURVEY_ID FROM ORDERS WHERE ID = :id");
//     $stmt->bindParam(':id', $orderId, PDO::PARAM_INT);
//     $stmt->execute();
//     $surveyId = $stmt->fetchColumn();

//     if ($surveyId) {
//         // 如果已存在，進行更新
//         $stmt = $pdo->prepare("UPDATE SURVEY SET DIFFICULT = :difficult, SCARY = :scary, RECOMMAND = :recommand WHERE ID = :surveyId");
//         $stmt->bindParam(':difficult', $data['difficult'], PDO::PARAM_INT);
//         $stmt->bindParam(':scary', $data['scary'], PDO::PARAM_INT);
//         $stmt->bindParam(':recommand', $data['recommand'], PDO::PARAM_INT);
//         $stmt->bindParam(':surveyId', $surveyId, PDO::PARAM_INT);

//          if (!$stmt->execute()) {
//             echo json_encode(["message" => "更新 SURVEY 失敗: " . implode(", ", $stmt->errorInfo())]);
//             exit();
//         }
//     } else {
//         // 如果不存在，插入新的評分
//         $stmt = $pdo->prepare("INSERT INTO SURVEY (DIFFICULT, SCARY, RECOMMAND) VALUES (:difficult, :scary, :recommand)");
//         $stmt->bindParam(':difficult', $data['difficult'], PDO::PARAM_INT);
//         $stmt->bindParam(':scary', $data['scary'], PDO::PARAM_INT);
//         $stmt->bindParam(':recommand', $data['recommand'], PDO::PARAM_INT);

//         if (!$stmt->execute()) {
//             echo json_encode(["message" => "插入 SURVEY 失敗: " . implode(", ", $stmt->errorInfo())]);
//             exit();
//         }

//         // 獲取新插入的 SURVEY ID
//         $surveyId = $pdo->lastInsertId();

//         // 更新 orders 表中的 SURVEY_ID
//         $stmt = $pdo->prepare("UPDATE ORDERS SET SURVEY_ID = :surveyId WHERE ID = :id");
//         $stmt->bindParam(':surveyId', $surveyId, PDO::PARAM_INT);
//         $stmt->bindParam(':id', $orderId, PDO::PARAM_INT);

//         if (!$stmt->execute()) {
//             echo json_encode(["message" => "更新 ORDERS 失敗: " . implode(", ", $stmt->errorInfo())]);
//             exit();
//         }
//     }

//     echo json_encode(["message" => "評分已成功送出！"]);
// } catch (PDOException $e) {
//     echo json_encode(["message" => "錯誤: " . $e->getMessage()]);
// }

?>