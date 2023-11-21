import { mongooseConnect } from "@/lib/mongoose";
import { Design } from "@/models/Design";
import Center from "@/components/Center";
import DesignDetail from "@/components/DesignDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BrandDesigns({ brandDesigns }) {
  return (
    <Center>
      <Navbar />
      <DesignDetail brandDesigns={brandDesigns} color="surfaceBright" />
      <Footer />
    </Center>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const brandDesigns = await Design.find(
    {
      category: "6558f7f6cf12ca9bf85a269d",
    },
    null,
    { sort: { _id: -1 }, limit: 4 }
  );
  return {
    props: {
      brandDesigns: JSON.parse(JSON.stringify(brandDesigns)),
    },
  };
}
