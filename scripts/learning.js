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
            if (!resp.ok) throw new Error(resp.statusText);
            return resp.json();
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
    },
};

app.init();