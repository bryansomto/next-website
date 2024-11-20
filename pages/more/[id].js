import Center from "@/components/Center";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { mongooseConnect } from "@/lib/mongoose";
import { Carousel } from "@/models/Carousel";
import { Carousel as Slide } from "react-responsive-carousel";
import React from "react";
import styled from "styled-components";
import { forest, kelly, onyx, snow } from "@/lib/colors";

const Label = styled.p`
  /* margin-bottom: 4%; */
  color: ${snow};
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  /* border-radius: 10px; */
  background-color: ${forest};
  padding: 10px 0;
  /* border-top: 5px solid ${kelly}; */
  border-bottom: 2px solid ${kelly};
`;

const More = ({ carousel }) => {
  return (
    <section>
      <Navbar />
      <Label className="">{carousel.title}</Label>
      <Center>
        <article className="space-y-6 sm:my-4">
          <div className="w-screen sm:w-fit sm:flex justify-center">
            <div className="sm:w-2/6">
              <Slide className="">
                {carousel.images.length > 0 &&
                  carousel.images.map((image, index) => (
                    <div className="" key={index}>
                      <img src={image} alt="" className="" />
                    </div>
                  ))}
              </Slide>
            </div>
            <div className="text-center sm:text-left sm:p-8">
              <p className="px-4 sm:px-0">{carousel.description}</p>
            </div>
          </div>
        </article>
      </Center>
      <Footer />
    </section>
  );
};

export default More;

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const carousel = await Carousel.findById(id);
  return {
    props: {
      carousel: JSON.parse(JSON.stringify(carousel)),
    },
  };
}
