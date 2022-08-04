import Header from "./components/header";
import Navbar from "./components/navbar";
import TopStory from "./components/top-story";
import News from "./components/news";
import Topic from "./components/topic";
import Tour from "./components/tour";
import Car from "./components/car";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
import Totop from "./components/totop";
function App() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = (event) => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Totop scroll={scroll} />
      <Header />
      <Navbar scroll={scroll} />
      <main>
        <TopStory />
        <News />
        <Topic />
        <Tour />
        <Car />
      </main>
      <Footer />
    </div>
  );
}

export default App;
