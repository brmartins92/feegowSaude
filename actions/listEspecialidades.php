<?php 
/* $token env */
include "../env/env.php";
ob_start("ob_gzhandler");
header("Content-type: application/json; charset=utf-8");


$curl = curl_init();

curl_setopt_array($curl, array(
 
 CURLOPT_URL => "https://api.feegow.com/v1/api/specialties/list",
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

if ($err) {
 echo "cURL Error #:" . $err;
} else {
 echo $response;
}
?>