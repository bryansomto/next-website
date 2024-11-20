import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Center from "./Center";
import { CertInstitutions } from "./assets";
import styled from "styled-components";
import { forest, kelly, onyx, snow } from "@/lib/colors";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonLink from "./ButtonLink";

const Label = styled.div`
  margin-bottom: 4%;
  color: ${onyx};
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  border-radius: 10px;
  /* background-color: ${onyx}; */
  border-top: 5px solid ${onyx};
  border-bottom: 2px solid ${onyx};
  /* padding: 10px; */
  @media (min-width: 768px) {
    padding-left: 10px;
  }
`;

const Grid = styled.div`
  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  @media (min-width: 1024px) {
  }
`;

const HomeSections = ({ carousels }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef1] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <Center className="">
      <div className=" w-4/5 sm:w-3/5 mt-10 sm:mt-20">
        <Image
          src={CertInstitutions}
          alt="logo"
          className="w-full flex items-center"
        />
      </div>
      <Grid className="">
        {carousels.length > 0 &&
          carousels.map((carousel, index) => (
            <div
              key={index}
              className="shadow-md p-4 sm:p-8 lg:p-12 rounded-md space-y-4 mb-8"
            >
              <div className="embla flex justify-center" ref={emblaRef}>
                <div className="embla__container w-6/12 sm:w-6/12 gap-4">
                  {/* {carousel.images.length > 0 &&
                    carousel.images.map((image, index) => ( */}
                  <div className="embla__slide" key={index}>
                    <img
                      src={carousel.images[0]}
                      alt=""
                      className="border-4 border-onyx rounded-full"
                    />
                  </div>
                  {/* ))} */}
                </div>
              </div>
              <div className="space-y-4 text-center">
                <Label>{carousel.title}</Label>
                <p>{carousel.description}</p>
                <ButtonLink
                  href={"/more/" + carousel._id}
                  black="true"
                  className="w-fit"
                >
                  See More
                </ButtonLink>
              </div>
            </div>
          ))}
      </Grid>
    </Center>
  );
};

export default HomeSections;
