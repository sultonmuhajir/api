<?php 
   $curl = curl_init();
   curl_setopt($curl, CURLOPT_URL, 'https://feriirawan-api.herokuapp.com/list/symbols/province/150');
   curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
   $data = curl_exec($curl);
   curl_close($curl);
   $lambang = json_decode($data, true)['lambang'];
?>


<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
   <title>Lambang Provinsi</title>
</head>

<body>
   <h2 class="text-center mt-3 mb-4">Lambang Provinsi Seluruh Indonesia</h2>
   <div class="container">
      <div class="row justify-content-center">
         <?php foreach($lambang as $el) : ?>
         <div class="col-md-3 m-3">
            <div class="card">
               <h5 class="card-header text-center"><?= $el['title'] ?></h5>
               <div class="card-body text-center">
                  <img src="<?= $el['url'] ?>" alt="<?= $el['title'] ?>">
               </div>
            </div>
         </div>
         <?php endforeach ?>
      </div>
   </div>
</body>

</html>