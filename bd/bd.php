<?php 
  include "../env/env.php";
  $link = mysqli_connect("127.0.0.1", $userBD, $password, $banco);

  $conn = new mysqli($servername, $userBD, $password, $banco);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  
?>