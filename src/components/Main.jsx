import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CurrentWeather from "./CurrentWeather"
import FiveDayForecast from "./FiveDayForecast"
import { getCurrentWeather, getFiveDayForecast } from "../features/weather/weatherSlice";
import ErrorCard from "./ErrorCard";
import Loader from "./Loader";

const Main = () => {
  const dispatch = useDispatch();
  const { currentWeather, forecast, status, error } = useSelector((state) => state.weather);

  // Fetch initial data for Dhaka when the component mounts
  useEffect(() => {
    dispatch(getCurrentWeather("Dhaka"));
    dispatch(getFiveDayForecast("Dhaka"));
  }, [dispatch]);

  if (status === "loading" || !currentWeather || !forecast) return <Loader />;
  if (status === "failed") return <ErrorCard error={error} />;

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