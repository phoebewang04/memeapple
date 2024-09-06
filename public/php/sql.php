<?php

// SQL參數設定
    // MySQL info
    $db_host = "127.0.0.1";
    $db_user = "root";
    $db_pass = "password";
    $db_select = "MemeStudio";

    // 設定DSN
        // 前置詞: mysql
        // host: 主機IP
        // port: port number
        // dbname: 資料庫名稱
        // charset: 資料庫語系
    $dsn = "mysql:host=localhost; dbname=MemeStudio; charset=utf8";

    // 建立pdo物件
    $pdo = new PDO($dsn, $db_user, $db_pass);  

?>