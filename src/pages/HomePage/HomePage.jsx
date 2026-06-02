import Hero from "./HomePageComponent/Hero";
import Books from "./HomePageComponent/Books";
const HomePage = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-10">
            <Hero />
            <Books />
        </div>
    )
}

export default HomePage;
