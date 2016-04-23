<?php
      @session_start();
      $dsn = "mysql:host=localhost;dbname=yourDBname";
      $db = new PDO($dsn, 'user', 'password');
      $db->query('set names utf8;');
      date_default_timezone_set('PRC');
?>
