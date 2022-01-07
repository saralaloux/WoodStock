import About from "./components/main/About";
import Home from "./components/home/Home";
import "./styles/stylesheets/index.css";
import Furnitures from "./components/main/Furnitures";
import Shop from "./components/main/Shop";
import Form from "./components/main/Form";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Home />
      <main>
      <About />
      <Furnitures />
      <Shop />
      <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
