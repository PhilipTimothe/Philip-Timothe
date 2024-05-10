import Image from "next/image";
import NavigationBar from "./components/NavBar";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="main">
      {/* <NavigationBar /> */}
      <ThemeSwitcher />
      <h1>Hi I'm Philip Timothe, a Data and Software Engineer!</h1>
    </main>
  );
}
