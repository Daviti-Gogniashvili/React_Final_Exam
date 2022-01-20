import About from "./components/about/about";
import Education from "./components/education/education";
import Intro from "./components/intro/intro";
import Product from "./components/product/product";

function App() {
  return (
      <div className="App">
        <Intro />
        <About />
        <Education />
        <Product />
      </div>
  );
}

export default App;
