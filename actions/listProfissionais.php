<?php 
/* $token env */
include "../env/env.php";
ob_start("ob_gzhandler");
header("Content-type: application/json; charset=utf-8");
$especialidade_id = $_GET['especialidade_id'];
$arrayProfissionais = Array(); 
$countProfissionais = 0 ;


$curl = curl_init();

curl_setopt_array($curl, array(
 
 CURLOPT_URL => "https://api.feegow.com/v1/api/professional/list",
 CURLOPT_RETURNTRANSFER => true,
 CURLOPT_ENCODING => "",
 CURLOPT_MAXREDIRS => 10,
 CURLOPT_SSL_VERIFYPEER => 0,
 CURLOPT_SSL_VERIFYHOST => 0,
 CURLOPT_TIMEOUT => 30,
 CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
 CURLOPT_CUSTOMREQUEST => "GET",
 CURLOPT_HTTPHEADER => array(
   "accept: application/json",
   "cache-control: no-cache",
   "content-type: application/json",
   "x-access-token : {$token}",
 ),

));

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
$array = array();
if ($err) {
  echo "cURL Error #:" . $err;
} else {
 // echo $response;
  $array = $response;
  $json_a = json_decode($array, true);
  //var_dump($json_a['content'][0]['especialidades'][0]['especialidade_id'] );
  $sizeContent = sizeof($json_a['content']);
  
  
  for($i=0; $i <= $sizeContent ; $i++) { 
    $possuiEspecialidade = 0 ;
    @$sizeEspecialidades = sizeof($json_a['content'][$i]['especialidades']);
    for ($j=0; $j <= $sizeEspecialidades ; $j++) { 
      if ( $especialidade_id == @$json_a['content'][$i]['especialidades'][$j]['especialidade_id']){
        $possuiEspecialidade = 1 ;
        
      }
    }

    if( $possuiEspecialidade > 0){
      $arrayProfissionais["profissionais"][] = $json_a['content'][$i];
    }
    
    
  }

  echo json_encode($arrayProfissionais);
}

?>