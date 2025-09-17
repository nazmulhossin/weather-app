const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <a href="#" className="footer-link">Weather API</a>
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">Terms of Service</a>
                <a href="#" className="footer-link">Contact Support</a>
                <a href="#" className="footer-link">About WeatherPro</a>
            </div>

            <div className="copyright">
                ©{new Date().getFullYear()} WeatherPro. All rights reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer