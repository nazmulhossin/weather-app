import { Sun, Moon } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../features/theme/themeSlice";

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  }

  return (
    <button onClick={handleToggle} className="p-2 rounded-full transition-transform hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-90 cursor-pointer" aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
      {theme === "light" ? (
        <Moon className="size-7"/>
      ) : (
        <Sun className="size-7 text-gray-300 hover:text-gray-200" />
      )}
    </button>
  )
}

export default ThemeToggler