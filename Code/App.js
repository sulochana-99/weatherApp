//we will store the apikey in one value
const apiKey ="6badbbed43822301fa435e0cbefa0bd7";
//store the url in one value
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//it will take the i/p from the search
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const WhetherIcon=document.querySelector(".whethericon");
async function  checkwhether(city){
    //it will take the apiurl and city and appid and give the response
    const response = await fetch(apiUrl + city +  `&APPId=${apiKey}`);
    //It will display when we enter the wrong city name
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".whether").style.display="none"
    }
    else{
        var data= await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + " °c";
        document.querySelector(".wind").innerHTML= data.wind.speed+"%";
        document.querySelector(".humidity").innerHTML= data.main.humidity +" km/hr";
        //it will take the iamges according to the weather report from  the main array
         if(data.weather[0].main == "Clouds"){
             WhetherIcon.src="../Images/clouds.png"
        }
        else if(data.weather[0].main=="Clear")
        {
            WhetherIcon.src="../Images/clear.png"
         }
        else if(data.weather[0].main=="Drizzle")
        {
             WhetherIcon.src="../Images/drizzle.png"
        }
        else if(data.weather[0].main=="Hummidity")

        {
             WhetherIcon.src="../Images/hummidity.png"
         }
        else if(data.weather[0].main==="Mist")
        {
        WhetherIcon.src="../Images/mist.png"
        }
        else if(data.weather[0].main=="Wind")
        {
            WhetherIcon.src="../Images/wind.png"
        }
        else if(data.weather[0].main=="Snow")
        {
            WhetherIcon.src="../Images/snow.png"
        }
        else if(data.weather[0].main=="Rain")
        {
         WhetherIcon.src="../Images/rain.png"
        }
        else if(data.weather[0].main=="Thunderstrom")
        {
            WhetherIcon.src="../Images/thunderstrom.png"
        }
        //it will the weather when we enter r]the city until it will be empty
        document.querySelector(".whether").style.display = "block"
    }
}
    //it will take the data from the search button and display the value
    searchBtn.addEventListener("click", ()=>
    {
        checkwhether(searchBox.value);
    })

