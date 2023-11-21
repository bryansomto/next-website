import { mongooseConnect } from "@/lib/mongoose";
import { Design } from "@/models/Design";
import DesignDetail from "@/components/DesignDetail";
import Center from "@/components/Center";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UIDesigns({ uiDesigns }) {
  return (
    <Center>
      <Navbar />
      <DesignDetail uiDesigns={uiDesigns} color="surfaceBright" />
      <Footer />
    </Center>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();

  const uiDesigns = await Design.find(
    {
      category: "6558f7d1cf12ca9bf85a269a",
    },
    null,
    { sort: { _id: -1 }, limit: 4 }
  );
  return {
    props: {
      uiDesigns: JSON.parse(JSON.stringify(uiDesigns)),
    },
  };
}
