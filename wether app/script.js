const form = document.querySelector("form");
const search = document.getElementById("search");
form.addEventListener(
    "keyup", function (event) {
        wether(search.value)
        event.preventDefault();
    });

function wether(city) {

    var w_data = document.getElementById("w_data");
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`;
    fetch(url).then(res => res.json()).then(result => {
        if(result.cod == "404"){
            w_data.innerHTML="<p>City Not Found </p>"
        }


        w_data.innerHTML = `
        <div class="wrap">
        <div class="img">
       <img src="https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" alt="">
   </div>
   <div class="data">   
       <p>${result.main.temp}</p>
       <p>${result.weather[0].description}</p>
   </div>
   </div>
        `;
    });
}
