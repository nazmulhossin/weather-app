const Footer = () => {
  return (
    <footer className="bg-header-bg py-10 text-center border-[1px] border-borderColor shadow-[0_-4px_20px_rgba(15, 23, 42, 0.08)]">
        <div className="container-custom">
            <div className="flex justify-center items-center gap-12 flex-wrap mb-4">
                <a href="#" className="footer-link">Weather API</a>
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">Terms of Service</a>
                <a href="#" className="footer-link">Contact Support</a>
                <a href="#" className="footer-link">About WeatherPro</a>
            </div>

            <div className="text-text-secondary text-[0.9rem] mt-4 pt-4 border-t border-borderColor">
                ©{new Date().getFullYear()} WeatherPro. All rights reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer