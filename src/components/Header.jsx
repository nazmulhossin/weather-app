import Logo from "./Logo"
import SearchBar from "./SearchBar"

const Header = () => {
    return (
        <header className="bg-header-bg py-4 mb-8 shadow-custom">
            <div className="container-custom">
                <div className="flex justify-between items-center flex-wrap gap-4">
                    <Logo />
                    <SearchBar />
                </div>
            </div>
        </header>
    )
}

export default Header