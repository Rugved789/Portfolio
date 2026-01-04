import ThemeToggler from "../components/ThemeToggler";
import StarBack from "../components/StarBack";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import SkillSection from "../components/Skills";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
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


        <SkillSection />


        <ProjectSection />


        <ContactSection />
      </main>

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default Home;
