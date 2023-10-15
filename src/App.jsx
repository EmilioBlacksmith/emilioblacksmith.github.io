import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./containers/content/Hero/Hero";
import { Portfolio } from "./containers/content/Portfolio/Portfolio";


export default function App() {
    return(
        <>
            <Header/>
            <Footer/>
            <Hero />
        </>
    );
}