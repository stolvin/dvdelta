<?php
$sendto = "deltamail@list.ru, s-o-v@mail.ru";
$user_name = $_POST['name'];
$user_phone = $_POST['phone'];

// Формирование заголовка письма
$subject  = "Заявка на замер с сайта dvdelta.ru";
$headers  = "From: dvdelta\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма
$msg  = "<html><body style='font-family:Verdana, Arial, sans-serif;'>";
$msg .= "<h3>Заявка на замер с сайта dvdelta.ru</h3>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$user_name."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$user_phone."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
   echo "true";
} else {
   echo "false";
}
?>