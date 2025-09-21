import { Search } from "lucide-react"

const SearchBar = () => {
    return (
        <div className="flex items-center">
            <input type="text" className="h-11 px-4 bg-card-bg text-text-primary min-w-[200px] md:min-w-[300px] border-2 border-r-0 border-borderColor rounded-l-full focus:outline-none focus:border-primary" placeholder="Enter city name..." />
            <button className="h-11 bg-primary px-4 border-primary rounded-r-full cursor-pointer transition-colors duration-200 hover:bg-secondary">
                <Search className="w-6 h-6 text-white" />
            </button>
        </div>
    )
}

export default SearchBar