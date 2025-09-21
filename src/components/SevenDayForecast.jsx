const SevenDayForecast = () => {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return (
        <section className="big-card">
            <h2 className="font-secondary text-2xl font-semibold text-primary mb-6">7-Day Forecast</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5">
                {
                    daysOfWeek.map((day, index) => (
                        <div key={index} className="bg-card-bg rounded-(--radius) px-4 py-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] border border-borderColor">
                            <div className="font-semibold mb-2 text-text-primary">{day}</div>
                            <div className="text-[2.5rem] my-2">☀️</div>
                            <div className="flex justify-between mt-4">
                                <span className="text-primary font-semibold">72°</span>
                                <span className="text-text-secondary">58°</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default SevenDayForecast