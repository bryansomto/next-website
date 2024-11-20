import Footer from "@/components/Footer";
import { mongooseConnect } from "@/lib/mongoose";
import HomeSections from "@/components/HomeSections";
import { Navbar } from "@/components/Navbar";
import { Carousel } from "@/models/Carousel";
import Center from "@/components/Center";

export default function Home({ carousels }) {
  return (
    <section>
      <Navbar />
      <Center>
        <HomeSections carousels={carousels} />
      </Center>
      <Footer carousels={carousels} />
    </section>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const carousels = await Carousel.find({}, null, {
    // sort: { _id: -1 },
    limit: 5,
  });
  return {
    props: {
      carousels: JSON.parse(JSON.stringify(carousels)),
    },
  };
}
