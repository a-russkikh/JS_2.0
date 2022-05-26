fetch(
  'https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=5028b650e6f005eccc8c4114ceebed11'
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.disclaimer').textContent =
      data.weather[0]['description'];

    document.querySelector('.tempr').innerHTML =
      Math.round(data.main.temp - 273) + '&deg';
    document.querySelector(
      '.features'
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
  })
  .catch(function () {
    // Catch any errors
  });
