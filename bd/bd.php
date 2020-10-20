<?php 
  include "../env/env.php";
  

  $conn = new mysqli($servername, $userBD, $password, $banco);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  
?>