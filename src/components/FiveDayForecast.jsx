import { useSelector } from "react-redux";

const SevenDayForecast = () => {
  const { forecast } = useSelector((state) => state.weather);

  // Group forecast by unique date
  const dailyForecast = forecast.list.reduce((acc, item) => {
    const date = new Date(item.dt_txt).toDateString();
    if (!acc[date]) {
      acc[date] = item;
    }
    return acc;
  }, {});

  const uniqueDays = Object.values(dailyForecast).slice(0, 5);

  return (
    <section className="big-card">
      <h2 className="font-secondary text-2xl font-semibold text-primary mb-6">5-Day Forecast</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5">
        {
          uniqueDays.map((day, index) => (
            <div key={index} className="bg-card-bg rounded-(--radius) px-4 py-5 text-center transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:dark:shadow-[0_6px_15px_rgba(255,255,255,0.1)] border border-borderColor">
              <div className="font-semibold mb-2 text-text-primary">{index === 0 ? "Today" : new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</div>
              <div className="flex justify-center"><img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} className="size-30 md:size-25" /></div>
              <div className="flex justify-between mt-4">
                <span className="text-primary font-semibold">{Math.round(day.main.temp_max)}°</span>
                <span className="text-text-secondary">{Math.round(day.main.temp_min)}°</span>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default SevenDayForecast