const fetch = require("node-fetch");

//get all weather data
exports.getWeather = async (req, res) => {
  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=43.32472&lon=21.90333&exclude=hourly,minutely&units=metric&appid=${process.env.API_KEY}`
  );

  if (weatherData.status == 200) {
    const data = await weatherData.json();
    //console.log(data);
    res.json({
      status: 200,
      data,
      message: "Weather data retrieved successfully",
    });
  } else {
    res.json({
      status: 500,
      message: "Something went wrong",
    });
  }
};

//custom weather data
exports.getCustomWeather = async (req, res) => {
  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=43.32472&lon=21.90333&exclude=hourly,minutely&units=metric&appid=${process.env.API_KEY}`
  );

  if (weatherData.status == 200) {
    const data = await weatherData.json();
    //console.log(data);

    const today = {
      dt: data.current.dt,
      temp: data.current.temp,
      weather: data.current.weather,
    };

    const daily = [];

    data.daily.forEach((element) => {
      const day = {
        dt: element.dt,
        temp: element.temp,
        weather: element.weather,
      };
      daily.push(day);
    });

    const weatherObject = {
      today: today,
      daily: daily,
    };
    res.json({
      status: 200,
      weatherObject,
      message: "Weather data retrieved successfully",
    });
  } else {
    res.json({
      status: 500,
      message: "Something went wrong",
    });
  }
};
