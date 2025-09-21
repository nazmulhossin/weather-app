import CurrentWeather from "./CurrentWeather"
import SevenDayForecast from "./SevenDayForecast"

const Main = () => {
  return (
    <main className="container-custom">
        <div className="grid grid-cols-[1fr_2fr] gap-8 mb-12">
            <CurrentWeather />
            <SevenDayForecast />
        </div>
    </main>
  )
}

export default Main