import { Header } from "./components";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Newslatter from "./components/Newslatter";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
    <div className="container">
      <Header />
      <Logo />
      <Products />
      <Testimonials/>
      <Newslatter/>
    </div>
      <Footer/>
    </>
  );
}

export default App;
