import { mongooseConnect } from "@/lib/mongoose";
import { Design } from "@/models/Design";
import DesignDetail from "@/components/DesignDetail";
import Center from "@/components/Center";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WebDesigns({ webAppDesigns }) {
  return (
    <Center>
      <Navbar />
      <DesignDetail webDesigns={webAppDesigns} color="surfaceBright" />
      <Footer />
    </Center>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const webAppDesigns = await Design.find(
    {
      category: "6558f7c3cf12ca9bf85a2697",
    },
    null,
    { sort: { _id: -1 }, limit: 4 }
  );
  return {
    props: {
      webAppDesigns: JSON.parse(JSON.stringify(webAppDesigns)),
    },
  };
}
