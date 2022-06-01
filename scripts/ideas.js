        let hour = document.querySelector('.hour');
        hour.innerHTML = resp.hourly.map((hour, idx) => {
            console.log(idx);
            if (idx = 0) {
                return `
                    <div class="sample-card-hour">
                        <p class="sample-card-title now">Now</p>
                        <p class="sample-card-degree">${hour.temp.toFixed(0)}&deg;</p>
                        <img class="sample-card-img" src="https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png">
                        <p class="sample-card-img-desciption">${hour.weather[0].main}</p>
                    </div>`;
            } else if (idx <= 2) {
                return `
                    <div class="sample-card-hour">
                        <p class="sample-card-title">${new Date(hour.dt * 1000).getHours()}</p>
                        <p class="sample-card-degree">${hour.temp.toFixed(0)}&deg;</p>
                        <img class="sample-card-img" src="https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png">
                        <p class="sample-card-img-desciption">${hour.weather[0].main}</p>
                    </div>`;
            }
        }).join(' ');


        let day = document.querySelector('.day');
        day.innerHTML = resp.daily.map((day, idx) => {
            if (idx = 0) {
                return `
                    <div class="sample-card-hour">
                        <p class="sample-card-title now">Now</p>
                        <p class="sample-card-degree-high">${day.temp.max.toFixed(0)}&deg;</p>
                        <p class="sample-card-degree-low">${day.temp.min.toFixed(0)}&deg;</p>
                        <img class="sample-card-img" src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
                        <p class="sample-card-img-desciption">${day.weather[0].main}</p>
                    </div>`;
            } else if (idx <= 2) {
                return `
                    <div class="sample-card-hour">
                        <p class="sample-card-title">${new Date(day.dt * 1000).toDateString()}</p>
                        <p class="sample-card-degree-high">${day.temp.max.toFixed(0)}&deg;</p>
                        <p class="sample-card-degree-low">${day.temp.min.toFixed(0)}&deg;</p>
                        <img class="sample-card-img" src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
                        <p class="sample-card-img-desciption">${day.weather[0].main}</p>
                    </div>`;
            }
        }).join(' ');