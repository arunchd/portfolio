import FeaturedServices from "../components/FServices"
import { Hero } from "../components/Hero"
import HowWeWork from "../components/HowWeWork"
import About from "./About"

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <FeaturedServices />
            <HowWeWork />

        </>
    )
}

export default Home
