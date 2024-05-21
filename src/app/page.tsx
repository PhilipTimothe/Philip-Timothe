import NavigationBar from "./components/NavBar";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Image from "next/image";
import Phil from "../../public/Nokwer.jpg";

export default function Home() {
  return (
    <main className="main">
      {/* <NavigationBar /> */}
      {/* <ThemeSwitcher /> */}
      <section id="banner-section">
        <Banner />
      </section>
      <section id="aboutme-section">
        <AboutMe />
      </section>
    </main>
  );
}
