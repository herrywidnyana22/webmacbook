import gsap from "gsap";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductView from "./components/ProductView";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Highlight from "./components/Highlight";
import Footer from "./components/Footer";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <ProductView/>
            <Showcase/>
            <Performance/>
            <Features/>
            <Highlight/>
            <Footer/>
        </main>
    );
}
 
export default App;