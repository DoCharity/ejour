<?php

// 获取文件后缀名函数
function fileext($filename){
  $sTemp = strrchr($filename, ".");
  return substr($sTemp, 1);
}
function fileext2($filename){
  $sTemp = explode(".", $filename);
  return $sTemp[count($sTemp)-1];
}
// 生成随机文件名函数
function random($length){
  $captchaSource = "0123456789abcdefghijklmnopqrstuvwxyz这是一个随机打印输出字符串的例子";
  $captchaResult = date("YM"); // 随机数返回值
  $captchaSentry = ""; // 随机数中间变量
  for($i=0;$i<$length;$i++){
    $n = rand(0, 35); #strlen($captchaSource));
    if($n >= 36){
      $n = 36 + ceil(($n-36)/3) * 3;
      $captchaResult .= substr($captchaSource, $n, 3);
    }else{
      $captchaResult .= substr($captchaSource, $n, 1);
    }
  }
  return $captchaResult;
}
$type = array("jpg", "gif", "bmp", "jpeg", "png");
// 判断上传文件类型
@$fileext = strtolower(fileext($_FILES['file']['name']));
$uploadfilename = random(8);
if(in_array($fileext, $type)){
  $filename = explode(".", $_FILES['file']['name']);
  if(is_uploaded_file($_FILES['file']['tmp_name'])){
//    echo $_FILES['file']['tmp_name'];
    $flag = move_uploaded_file($_FILES['file']['tmp_name'], "/www/web/ejour_co/public_html/img/".$uploadfilename.".".$fileext);
    if($flag){
      echo "上传成功！";
	  //$file_url='http://'.$_SERVER['SERVER_NAME'].($path_v=='/'?'/':$path_v.'/').$filename;
	  echo "<a href=https://img.ejour.co/".$uploadfilename.'.'.$fileext.">外链地址</a>";
    }else{
      echo "上传失败。";
	  echo "<a href='javascript:history.go(-1)'>返回</a>";
    }
    
  }
}
?>
<html>
<head>
  <meta http-equiv="content-type" content="text/html" charset="utf-8">
  <title>上传图片-1分钱助学</title>
</head>
<body>
<center><div><p>1分钱助学-图片上传系统 V1.0</p>
<p>作者：张佑杰</p>
<p>支持的图片格式：jpg, gif, bmp, jpeg, png</p>
<p>注意：请及时保存生成的地址（形如img.1cf.co/xxxxxx.jpg）到数据表格的图片链接一栏；</p>
<p>请勿上传不遵循文件共享与传输协议CC BY-NC-SA 4.0的图片；请不要上传与项目题目无关的图片。</p>
<div>
<form method="post" action="" enctype="multipart/form-data">
  <input type="hidden" name="MAX_FILE_SEZE" value="2000000">
  <input type="file" name="file" value="view">
  <input type="submit" value="upload" name="B1">
</form>
</center>
</body>
</html>