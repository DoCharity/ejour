<?php
      @session_start();
      $dsn = "mysql:host=localhost;dbname=yourDBname";      //设置数据库名称
      $db = new PDO($dsn, 'user', 'password');              //设置用户名、密码
      $db->query('set names utf8;');                        //UTF-8格式
      date_default_timezone_set('PRC');                     //设置时区为UTC+8
?>
