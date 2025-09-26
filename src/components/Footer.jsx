const Footer = () => {
  return (
    <footer className="bg-header-bg py-10 text-center border-[1px] border-borderColor shadow-[0_-4px_20px_rgba(15, 23, 42, 0.08)]">
      <div className="container-custom">
        <div className="flex justify-center items-center gap-12 flex-wrap mb-4">
          <a href="https://openweathermap.org/" target="_blank" className="footer-link">Weather API</a>
          <a href="#" target="_blank" className="footer-link">Privacy Policy</a>
          <a href="#" target="_blank" className="footer-link">Terms of Service</a>
          <a href="https://www.linkedin.com/in/nazmul-hossin/" target="_blank" className="footer-link">Contact Support</a>
          <a href="https://github.com/nazmulhossin/weather-app" target="_blank" className="footer-link">About WeatherPro</a>
        </div>

        <div className="text-text-secondary text-[0.9rem] mt-4 pt-4 border-t border-borderColor">
          ©{new Date().getFullYear()} WeatherPro. All rights reserved. Developed by <a href="https://github.com/nazmulhossin" target="_blank" className="text-primary transition duration-200 hover:text-secondary">Md Nazmul Hossain</a>.
        </div>
      </div>
    </footer>
  )
}

export default Footer