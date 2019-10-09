<?php

//var_dump($_POST);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require './vendor/autoload.php';

$mail = new PHPMailer(TRUE);

try {
  $mail->setFrom('youknowwhoitis@gmail.com');
  $mail->addAddress('bailey.pownell@gmail.com');
  $mail->Body='<h1 align=left>Name: ' .$_POST['user_name'].'<br>Email: '.$_POST['user_email'].'<br>Message: '.$_POST['user_message'].'</h1>';

  $mail->addReplyTo($_POST['user_email']);
  $mail->isHTML(true);

  $mail->isSMTP();
  $mail->Host='smtp.gmail.com';
  $mail->SMTPAuth = TRUE;
  $mail->SMTPSecure = 'tls';
  $mail->Username = 'bailey.pownell@gmail.com';
  $mail->Password='Epluribusunum1776';
  $mail->Port=587;
  $mail->send();
}
catch (Exception $e)
{
   /* PHPMailer exception. */
   echo $e->errorMessage();
}
catch (\Exception $e)
{
   /* PHP exception (note the backslash to select the global namespace Exception class). */
   echo $e->getMessage();
}




?>
