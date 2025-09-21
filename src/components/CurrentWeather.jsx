const CurrentWeather = () => {
    return (
        <section className="big-card">
            <div className="font-secondary text-xl font-semibold text-primary mb-2">Dhaka, Bangladesh</div>
            <div className="text-text-secondary mb-8">Wednesday, September 17, 2025</div>

            <div className="flex items-center gap-4 mb-8">
                <div className="font-secondary text-[4rem] font-bold text-primary">72°</div>
                <div className="text-[4rem]">☀️</div>
            </div>

            <div className="text-xl font-medium mb-8 capitalize">Sunny and Clear</div>

            <div className="grid grid-cols-[1fr_1fr] gap-4 [&>div]:flex [&>div]:justify-between [&>div]:items-center [&>div]:p-3 [&>div]:bg-card-bg [&>div]:rounded-(--radius) [&>div]:border [&>div]:border-borderColor">
                <div>
                    <span className="text-text-secondary font-medium">Feels like</span>
                    <span className="text-primary font-semibold">75°F</span>
                </div>
                <div>
                    <span className="text-text-secondary font-medium">Humidity</span>
                    <span className="text-primary font-semibold">65%</span>
                </div>
                <div>
                    <span className="text-text-secondary font-medium">Wind Speed</span>
                    <span className="text-primary font-semibold">8 mph</span>
                </div>
                <div>
                    <span className="text-text-secondary font-medium">UV Index</span>
                    <span className="text-primary font-semibold">6</span>
                </div>
            </div>
        </section>
    )
}

export default CurrentWeather