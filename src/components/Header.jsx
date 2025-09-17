const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <img src="/weather-icon.png" alt="weather-pro-logo" className="h-10" /> <span className="ml-2">WeatherPro</span>
                    </div>
                    <div className="search-bar">
                        <input type="text" className="search-input" placeholder="Enter city name..." value="Dhaka, Bangladesh" />
                        <button className="search-btn">Search</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header