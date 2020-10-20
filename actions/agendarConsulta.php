<?php 
  header("allow-control-access-origin: * ");


  include "../env/env.php";
  include "../bd/bd.php";

  //ob_start("ob_gzhandler");
  $date = new DateTime();
  $date_time = $date->format('Y-m-d H:i:s');
  

  $data = json_decode(file_get_contents("php://input"), true);
  $task = $data['nome'];
  
  
  $especialidade_id = $data['especialidade_id'];
  $profissional_id  = $data['profissional_id'];
  $nome             = $data['nome'];
  $indicacao        = $data['indicacao'];
  $cpf              = $data['cpf'];
  $nascimento       = $data['nascimento'];
    
  if((!$especialidade_id)||(!$profissional_id)||(!$nome)||(!$indicacao)||(!$cpf)||(!$nascimento)){
    echo "campo em branco";
    exit();
  }

  $sql = 'INSERT INTO agendamento 
  (specialty_id,professional_id,name,cpf,source_id,birthdate,date_time)
  VALUES 
  ("'.$especialidade_id.'","'.$profissional_id.'","'.$nome.'","'.$cpf.'","'.$indicacao.'","'.$nascimento.'","'.$date_time.'")';
  
  if ($conn->query($sql) === TRUE) {
    echo "sucess";
  } else {
    echo "falha no sistema interno, relatar ao administrador";
  }
  
  
  
?>