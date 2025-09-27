import { useEffect } from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
