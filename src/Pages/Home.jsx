import ThemeToggler from "../components/ThemeToggler";
import StarBack from "../components/StarBack";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggler*/}
      <ThemeToggler />


      {/* Background effects*/}
      <StarBack />


      {/* Navbar*/}

      <Navbar />

      {/* Main*/}

      <main>
        <HeroSection />

        <AboutMe />
      </main>

      {/* Foteer */}
    </div>
  );
};

export default Home;
