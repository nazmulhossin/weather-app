const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchCurrentWeather = async (city) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok)
    errorHandler(response);

  return response.json();
}

export const fetchFiveDayForecast = async (city) => {
  const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok)
    errorHandler(response);

  return response.json();
}

function errorHandler(response) {
  if (response.status === 404) {
    throw new Error(`We couldn't find weather data for the location you searched. Please check the spelling or try searching for a nearby city or landmark.`);
  } else if (response.status === 401) {
    throw new Error("Invalid API key. Please verify your credentials.");
  } else if (response.status === 500) {
    throw new Error("Server error. Please try again later.");
  } else {
    throw new Error(`Failed to fetch weather (Error ${response.status})`);
  }
}