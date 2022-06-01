const app = {
    init: () => {
        document
            .getElementById('getBtn')
            .addEventListener('click', app.fetchWeather);
        document
            .getElementById('currentBtn')
            .addEventListener('click', app.getLocation);
    },
    fetchWeather: (ev) => {
        let lat = document.getElementById('latitude').value;
        let lon = document.getElementById('longitude').value;
        let key = '9c8765708f57f9f4286624d9f20d2995';
        let lang = 'en';
        let units = 'imperial';
        // issue where 3.0 wasnt working properly so i had to move to 2.5 where it suddenly worked
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;

        fetch(url)
        .then(resp => {
            if (resp.ok) return resp.json();
        })
        .then(data => {
            app.showWeather(data);
        })
        .catch(console.err);
    },
    getLocation: (ev) => {
        let opts = {
            enableHighAccuracy: true,
            timeout: 1000 * 10, // 10 seconds
            maximumAge: 1000 * 60 * 5, // 5 minutes
        };
        navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
    },
    ftw: (position) => {
        document.getElementById('latitude').value = position.coords.latitude.toFixed(2);
        document.getElementById('longitude').value = position.coords.longitude.toFixed(2);
    },
    wtf: (err) => {
        console.error(err);
    },
    showWeather: (resp) => {
        console.log(resp);
        let main = document.querySelector('.sample-card-current');
        main.innerHTML = `<h5>Current's Forecast</h5>
        <div class="sample-card-banner">
            <div>
                <p class="sample-card-text big">${resp.current.feels_like.toFixed(0)}&deg;</p>
                <p class="sample-card-text">Feels Like</p>
            </div>
            <div>
                <img src="https://openweathermap.org/img/wn/${resp.current.weather[0].icon}@4x.png" alt="Weather description" class="card-img">
                <p class="sample-card-img-desciption">${resp.current.weather[0].main}</p>    
            </div>
        </div>
        
        <div class="sample-card-body">
            <div class="sample-card-table">
                <div class="sample-card-col">
                    <div class="sample-card-row">
                        <p class="sample-card-text">High / Low</p>
                        <p class="sample-card-text">${resp.daily[0].temp.max.toFixed(0)} / ${resp.daily[0].temp.min.toFixed(0)}</p>
                    </div>
                    <div class="sample-card-row">
                        <p class="sample-card-text">Humidity</p>
                        <p class="sample-card-text">${resp.current.humidity}%</p>
                    </div>
                    <div class="sample-card-row">
                        <p class="sample-card-text">Pressure</p>
                        <p class="sample-card-text">${(resp.current.pressure * 0.0145038).toFixed(2)} in</p>
                    </div>
                    <div class="sample-card-row">
                        <p class="sample-card-text">Visibility</p>
                        <p class="sample-card-text">${resp.current.visibility / 1000}km</p>
                    </div>
                </div>
                <div class="sample-card-col">
                    <div class="sample-card-row">
                        <p class="sample-card-text">Wind</p>
                        <p class="sample-card-text">${resp.current.wind_speed.toFixed(0)}mph ${resp.current.wind_deg}&deg;</p>
                    </div>
                    <div class="sample-card-row">
                        <p class="sample-card-text">Dew Point</p>
                        <p class="sample-card-text">${resp.current.dew_point}</p>
                    </div>
                    <div class="sample-card-row">
                        <p class="sample-card-text">UV Index</p>
                        <p class="sample-card-text">${resp.current.uvi}</p>
                    </div>
                    <div class="sample-card-row">
                        <p class="sample-card-text">Sunrise</p>
                        <p class="sample-card-text">${new Date(resp.current.sunrise * 1000).toTimeString()}</p>
                    </div>
                </div>
            </div>
        </div>`;

        // counting to 7 for no reason
        let hour = document.querySelector('.hour');
        let hourhtml =  `
        <div class="sample-card-hour">
            <p class="sample-card-title now">Now</p>
            <p class="sample-card-degree">${resp.hourly[0].temp.toFixed(0)}&deg;</p>
            <img class="sample-card-img" src="https://openweathermap.org/img/wn/${resp.hourly[0].weather[0].icon}@2x.png">
            <p class="sample-card-img-desciption">${resp.hourly[0].weather[0].main}</p>
        </div>`;

        for (var i = 1; i < 5; i++) {
            hourhtml += `
            <div class="sample-card-hour">
                <p class="sample-card-title">${new Date(resp.hourly[i].dt * 1000).getHours()}</p>
                <p class="sample-card-degree">${resp.hourly[i].temp.toFixed(0)}&deg;</p>
                <img class="sample-card-img" src="https://openweathermap.org/img/wn/${resp.hourly[i].weather[0].icon}@2x.png">
                <p class="sample-card-img-desciption">${resp.hourly[i].weather[0].main}</p>
            </div>`;
        }
        hour.innerHTML = hourhtml;


        let day = document.querySelector('.day');
        let dayhtml = `
        <div class="sample-card-hour">
            <p class="sample-card-title now">Today</p>
            <p class="sample-card-degree-high">${resp.daily[0].temp.max.toFixed(0)}&deg;</p>
            <p class="sample-card-degree-low">${resp.daily[0].temp.min.toFixed(0)}&deg;</p>
            <img class="sample-card-img" src="https://openweathermap.org/img/wn/${resp.daily[0].weather[0].icon}@2x.png">
            <p class="sample-card-img-desciption">${resp.daily[0].weather[0].main}</p>
        </div>`;

        for (var i = 1; i < 5; i++) {
            dayhtml += `
            <div class="sample-card-hour">
                <p class="sample-card-title">${new Date(resp.daily[i].dt * 1000).toDateString()}</p>
                <p class="sample-card-degree-high">${resp.daily[i].temp.max.toFixed(0)}&deg;</p>
                <p class="sample-card-degree-low">${resp.daily[i].temp.min.toFixed(0)}&deg;</p>
                <img class="sample-card-img" src="https://openweathermap.org/img/wn/${resp.daily[i].weather[0].icon}@2x.png">
                <p class="sample-card-img-desciption">${resp.daily[i].weather[0].main}</p>
            </div>`;
        }
        day.innerHTML = dayhtml;
        
    },
};


app.init();