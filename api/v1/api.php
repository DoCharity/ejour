<?php
      //数据库
      require_once("conn.php");
        
      //主程序
	  if (isset($_GET['id'])) {
        $id=$_GET['id'];
      } else {
        header("Location: https://www.ejour.co");
      }
	  if (isset($_GET['spot'])) {
        $spot=$_GET['spot'];
        if($spot=='main'){
            header("Location: https://www.ejour.co");
        } else {
            ;
        }
      } else {
        header("Location: https://www.ejour.co");
      }
      if (isset($_GET['info'])) {
        $info=$_GET['info'];
      } else {
        $info="description";
      }
      if($info=='spot-name') {
          $sql="select name from main where code='$spot'";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $result=$row[name];
          } else {
              $result="Connection error";
          }//获取景点名称
      } else if($info=='spot-description') {
          $sql="select description from main where code='$spot'";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $result=$row[description];
          } else {
              $result="Connection error";
          }//获取景点介绍
      } else if($info=='spot-pic') {
          $sql="select pic from main where code='$spot'";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $result=$row[pic];
          } else {
              $result="Connection error";
          }//获取景点图片
      } else {
          $sql="select $info from $spot where id=$id";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $result=$row[$info];
          } else {
              $result="Connection error";
          }//正常处理
      }
      echo($result);
?>
