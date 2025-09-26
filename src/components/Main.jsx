import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CurrentWeather from "./CurrentWeather"
import FiveDayForecast from "./FiveDayForecast"
import { getCurrentWeather, getFiveDayForecast } from "../features/weather/weatherSlice";

const Main = () => {
  const dispatch = useDispatch();

  // Fetch initial data for Dhaka when the component mounts
  useEffect(() => {
    dispatch(getCurrentWeather("Dhaka"));
    dispatch(getFiveDayForecast("Dhaka"));
  }, [dispatch]);

  return (
    <main className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-8 mb-12">
        <CurrentWeather />
        <FiveDayForecast />
      </div>
    </main>
  )
}

export default Main