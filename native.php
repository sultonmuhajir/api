<?php 

   // getContents
   $contents = file_get_contents('https://feriirawan-api.herokuapp.com/list/symbols/province/150');
   $data = json_decode($contents, true);
   print_r($data);

   
   // Curl
   $curl = curl_init();
   curl_setopt($curl, CURLOPT_URL, 'https://feriirawan-api.herokuapp.com/list/symbols/province/150');
   curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
   $exec = curl_exec($curl);
   curl_close($curl);
   $data = json_decode($exec, true);
   print_r($data);

?>
