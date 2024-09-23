<?php

// 載入php API共同參數
include_once '../sql.php';

class Coupon {
    private $db;

    public function __construct(PDO $db) {
        $this->db = $db;
    }

    //查詢特定會員API
    public function getMemberCoupons($memberId) {
        $member_id = $_GET['member_id'];

        $sql = 'SELECT c.* FROM COUPON c LEFT JOIN ORDERS o ON c.ID = o.COUPON_ID WHERE o.COUPON_ID IS NULL AND c.MEMBER_ID = ?';
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$member_id]);
        $coupons = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // 檢查查詢結果
        if ($coupons === false) {
            echo json_encode(['error' => '查詢失敗']);
            return;
        }

        echo json_encode($coupons);
    }
}

$coupon = new Coupon($pdo);
$coupon->getMemberCoupons($_GET['member_id']);

?>
