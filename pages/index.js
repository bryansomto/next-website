import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Design } from "@/models/Design";
import DesignGrid from "@/components/DesignGrid";

export default function Home({ webAppDesigns, uiDesigns, brandDesigns }) {
  return (
    <section>
      <Center>
        <Header />
        <DesignGrid
          webDesigns={webAppDesigns}
          uiDesigns={uiDesigns}
          brandDesigns={brandDesigns}
        />
        <Footer />
      </Center>
    </section>
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
  const uiDesigns = await Design.find(
    {
      category: "6558f7d1cf12ca9bf85a269a",
    },
    null,
    { sort: { _id: -1 }, limit: 4 }
  );
  const brandDesigns = await Design.find(
    {
      category: "6558f7f6cf12ca9bf85a269d",
    },
    null,
    { sort: { _id: -1 }, limit: 4 }
  );
  return {
    props: {
      webAppDesigns: JSON.parse(JSON.stringify(webAppDesigns)),
      uiDesigns: JSON.parse(JSON.stringify(uiDesigns)),
      brandDesigns: JSON.parse(JSON.stringify(brandDesigns)),
    },
  };
}
