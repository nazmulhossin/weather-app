const Main = () => {
  return (
    <main className="container">
        <div className="main-content">
            {/* Current Weather */}
            <section className="current-weather">
                <div className="location">Dhaka, Bangladesh</div>
                <div className="date">Wednesday, September 17, 2025</div>
                
                <div className="current-temp">
                    <div className="temp-value">72°</div>
                    <div className="weather-icon">☀️</div>
                </div>
                
                <div className="weather-description">Sunny and Clear</div>
                
                <div className="weather-details">
                    <div className="detail-item">
                        <span clclassNameass="detail-label">Feels like</span>
                        <span className="detail-value">75°F</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Humidity</span>
                        <span className="detail-value">65%</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Wind Speed</span>
                        <span className="detail-value">8 mph</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">UV Index</span>
                        <span className="detail-value">6</span>
                    </div>
                </div>
            </section>

            {/* 7-Day Forecast */}
            <section className="forecast-section">
                <h2 className="forecast-title">7-Day Forecast</h2>
                <div className="forecast-grid">
                    <div className="forecast-card">
                        <div className="forecast-day">Today</div>
                        <div className="forecast-icon">☀️</div>
                        <div className="forecast-temps">
                            <span className="temp-high">72°</span>
                            <span className="temp-low">58°</span>
                        </div>
                    </div>
                    <div className="forecast-card">
                        <div className="forecast-day">Wed</div>
                        <div className="forecast-icon">⛅</div>
                        <div className="forecast-temps">
                            <span className="temp-high">69°</span>
                            <span className="temp-low">55°</span>
                        </div>
                    </div>
                    <div className="forecast-card">
                        <div className="forecast-day">Thu</div>
                        <div className="forecast-icon">🌧️</div>
                        <div className="forecast-temps">
                            <span className="temp-high">64°</span>
                            <span className="temp-low">52°</span>
                        </div>
                    </div>
                    <div class="forecast-card">
                        <div class="forecast-day">Fri</div>
                        <div class="forecast-icon">🌦️</div>
                        <div class="forecast-temps">
                            <span class="temp-high">66°</span>
                            <span class="temp-low">54°</span>
                        </div>
                    </div>
                    <div class="forecast-card">
                        <div class="forecast-day">Sat</div>
                        <div class="forecast-icon">☀️</div>
                        <div class="forecast-temps">
                            <span class="temp-high">71°</span>
                            <span class="temp-low">57°</span>
                        </div>
                    </div>
                    <div class="forecast-card">
                        <div class="forecast-day">Sun</div>
                        <div class="forecast-icon">☀️</div>
                        <div class="forecast-temps">
                            <span class="temp-high">74°</span>
                            <span class="temp-low">59°</span>
                        </div>
                    </div>
                    <div class="forecast-card">
                        <div class="forecast-day">Mon</div>
                        <div class="forecast-icon">⛅</div>
                        <div class="forecast-temps">
                            <span class="temp-high">68°</span>
                            <span class="temp-low">56°</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}

export default Main