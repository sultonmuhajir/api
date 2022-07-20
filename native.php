<?php 

   // getContents
   $contents = file_get_contents("https://sultonmuhajir.github.io/tenses/assets/tenses.json");
   $data = json_decode($contents, true);
   print_r($data);

   // Curl
   $curl = curl_init();
   curl_setopt($curl, CURLOPT_URL, "https://sultonmuhajir.github.io/tenses/assets/tenses.json");
   curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
   $exec = curl_exec($curl);
   curl_close($curl);
   $data = json_decode($exec, true);
   print_r($data);
   
?>