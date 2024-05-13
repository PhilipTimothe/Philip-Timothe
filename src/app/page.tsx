import NavigationBar from "./components/NavBar";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import Banner from "./components/Banner";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main /* className="main" */ className={roboto.className}>
      {/* <NavigationBar /> */}
      {/* <ThemeSwitcher /> */}
      {/* <div class="md:container md:mx-auto">
        <p class="text-8xl text-center" id="banner">
          Multifaceted Developer
        </p>
      </div> */}
      <Banner />
    </main>
  );
}
