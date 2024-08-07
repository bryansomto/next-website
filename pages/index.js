import Footer from "@/components/Footer";
import Center from "@/components/Center";
import Navbar from "@/components/Navbar";
import Welcome from "./welcome";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Welcome />
      <Center>
        {/* <DesignGrid
          webDesigns={webAppDesigns}
          uiDesigns={uiDesigns}
          brandDesigns={brandDesigns}
        /> */}
      </Center>
      <Footer />
    </section>
  );
}
