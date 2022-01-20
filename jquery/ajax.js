$.ajax({
   url: 'https://feriirawan-api.herokuapp.com/list/symbols/province/150',
   type: 'get',
   dataType: 'json',
   // data: {
   //    'key': 'value'
   // },
   success: function (data) {
      const lambang = data.lambang;
      $.each(lambang, function (i, el) {
         $(".row").append(`
         <div class="col-md-3 m-3">
            <div class="card">
               <h5 class="card-header text-center">${el.title}</h5>
               <div class="card-body text-center">
                  <img src="${el.url}" alt="${el.title}">
               </div>
            </div>
         </div>
         `);
      })
   }
})