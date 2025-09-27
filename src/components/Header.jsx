import Logo from "./Logo"
import SearchBar from "./SearchBar"
import ThemeToggler from "./ThemeToggler"

const Header = () => {
  return (
    <header className="bg-header-bg py-4 mb-8 shadow-custom">
      <div className="container-custom">
        <div className="flex flex-col items-center flex-wrap gap-4 md:justify-between md:flex-row">
          <Logo />
          <div className="flex items-center gap-4 md:gap-8">
            <SearchBar />
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header