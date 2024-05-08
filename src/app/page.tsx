import Image from "next/image";
import NavigationBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="main">
      <NavigationBar />
      <h1>Home</h1>
    </main>
  );
}
