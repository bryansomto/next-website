import Footer from "@/components/Footer";
import Center from "@/components/Center";
import Welcome from "./welcome";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Welcome />
      <Footer />
    </section>
  );
}
