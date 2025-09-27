import { useSelector } from "react-redux"

const CurrentWeather = () => {
  const dateFormatOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", dateFormatOptions);
  const { currentWeather } = useSelector((state) => state.weather);

  return (
    <section className="big-card">
      <div className="font-secondary text-xl font-semibold text-primary mb-2">{currentWeather.name}, {currentWeather.sys.country}</div>
      <div className="text-text-secondary mb-8">{formattedDate}</div>

      <div className="flex items-center gap-4 mb-8">
        <div className="font-secondary text-5xl md:text-[4rem] font-bold text-primary">{Math.round(currentWeather.main.temp)}°</div>
        <div className="text-5xl md:text-[4rem]"><img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt={currentWeather.weather[0].description} /></div>
      </div>

      <div className="text-xl text-text-primary font-semibold mb-8 capitalize">{currentWeather.weather[0].description}</div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 [&>div]:flex [&>div]:justify-between [&>div]:items-center [&>div]:p-3 [&>div]:bg-card-bg [&>div]:rounded-(--radius) [&>div]:border [&>div]:border-borderColor">
        <div>
          <span className="text-text-secondary font-medium">Feels like</span>
          <span className="text-primary font-semibold">{Math.round(currentWeather.main.feels_like)}°C</span>
        </div>
        <div>
          <span className="text-text-secondary font-medium">Humidity</span>
          <span className="text-primary font-semibold">{currentWeather.main.humidity}%</span>
        </div>
        <div>
          <span className="text-text-secondary font-medium">Wind Speed</span>
          <span className="text-primary font-semibold">{currentWeather.wind.speed}m/s</span>
        </div>
        <div>
          <span className="text-text-secondary font-medium">Visibility</span>
          <span className="text-primary font-semibold">{currentWeather.visibility / 1000}km</span>
        </div>
      </div>
    </section>
  )
}

export default CurrentWeather