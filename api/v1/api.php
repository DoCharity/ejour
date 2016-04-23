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
          $sql="select name from main where code='$spot'";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $spot_name_result=$row['name'];
              //$spot_name_result=json_encode($spot_name_result);
          } else {
              $spot_name_result="Connection error";
              //$spot_name_result=json_encode($spot_name_result);
          }//获取景点名称
          $sql="select description from main where code='$spot'";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $spot_description_result=$row['description'];
              //$spot_description_result=json_encode($spot_description_result);
          } else {
              $spot_description_result="Connection error";
              //$spot_description_result=json_encode($spot_description_result);
          }//获取景点介绍
          $sql="select pic from main where code='$spot'";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $spot_pic_result=$row['pic'];
              //$spot_pic_result=json_encode($spot_pic_result);
          } else {
              $spot_pic_result="Connection error";
              //$spot_pic_result=json_encode($spot_pic_result);
          }//获取景点介绍
          
          
          
      /*if (isset($_GET['info'])) {
        $info=$_GET['info'];
      } else {
        $info="description";
      }
      if($info=='spot-name') {
          $name='spot-name';
          $sql="select name from main where code='$spot'";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $result=$row[name];
              $result=json_encode($result);
          } else {
              $result="Connection error";
              $result=json_encode($result);
          }//获取景点名称
      } else if($info=='spot-description') {
          $name='spot-description';
          $sql="select description from main where code='$spot'";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $result=$row[description];
              $result=json_encode($result);
          } else {
              $result="Connection error";
              $result=json_encode($result);
          }//获取景点介绍
      } else if($info=='spot-pic') {
          $name='spot-pic';
          $sql="select pic from main where code='$spot'";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $result=$row[pic];
              $result=json_encode($result);
          } else {
              $result="Connection error";
              $result=json_encode($result);
          }//获取景点图片
      } else {*/
          $sql="select name from $spot where id=$id";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $name_result=$row['name'];
              //$name_result=json_encode($name_result);
          } else {
              $name_result="Connection error";
              //$name_result=json_encode($name_result);
          }//获取展品名
          $sql="select pic from $spot where id=$id";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $pic_result=$row['pic'];
              //$pic_result=json_encode($pic_result);
          } else {
              $pic_result="Connection error";
              //$pic_result=json_encode($pic_result);
          }//获取展品图片
          $sql="select description from $spot where id=$id";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $description_result=$row['description'];
              //$description_result=json_encode($description_result);
          } else {
              $description_result="Connection error";
              //$description_result=json_encode($description_result);
          }//获取展品简介
          $sql="select story from $spot where id=$id";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $story_result=$row['story'];
              //$story_result=json_encode($story_result);
          } else {
              $story_result="Connection error";
              //$story_result=json_encode($story_result);
          }//获取展品故事
          $sql="select media from $spot where id=$id";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $media_result=$row['media'];
              //$media_result=json_encode($media_result);
          } else {
              $media_result="Connection error";
              //$media_result=json_encode($media_result);
          }//获取展品多媒体资料
          
          /*$name = $info;
          $sql="select $info from $spot where id=$id";
          if ($rs = $db->query($sql)) {
              $row=$rs->fetch();
              $result=$row[$info];
              $result=json_encode($result);
          } else {
              $result="Connection error";
              $result=json_encode($result);
          }//正常处理*/
      //}
      //echo($result);
      $arr = array ('spot_name'=>$spot_name_result,'spot_pic'=>$spot_pic_result,'spot_description'=>$spot_description_result,'name'=>$name_result,'pic'=>$pic_result,'description'=>$description_result,'story'=>$story_result,'media'=>$media_result);
      echo json_encode($arr);
?>
