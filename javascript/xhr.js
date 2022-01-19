const request = new XMLHttpRequest();
request.open('GET', 'https://feriirawan-api.herokuapp.com/list/symbols/province/150');
request.send();
request.onload = function () {
   const data = JSON.parse(request.response);
   const lambang = data.lambang;
   let dataLambang = '';
   lambang.forEach(el => {
      dataLambang += `
      <div class="col-md-3 m-3">
         <div class="card">
            <h5 class="card-header text-center">${el.title}</h5>
            <div class="card-body text-center">
               <img src="${el.url}" alt="${el.title}">
            </div>
         </div>
      </div>
      `
   });
   document.querySelector(".row").innerHTML = dataLambang;
}