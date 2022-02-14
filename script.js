function weather(newCity){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + newCity + '&lang=ru&appid=5ed6514844134807a8349480146e992d').then(function (resp) {return resp.json() }).then(function (data) {
        //добавляем название города
        document.querySelector('.city').textContent = data.name;
        //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        //Добавляем описание погоды
        document.querySelector('.desc').textContent = data.weather[0]['description'];
        //Добавляем иконку погоды
        document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            //Обрабатываем ошибки
        });
}

weather('Moscow');