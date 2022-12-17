import React from "react";
import header from "../images/desktop/image-header.jpg";
import egg from "../images/desktop/image-transform.jpg";
import cup from "../images/desktop/image-stand-out.jpg";
import cherry from "../images/desktop/image-graphic-design.jpg";
import orange from "../images/desktop/image-photography.jpg";
import arrow from "../images/icon-arrow-down.svg";
import emily from "../images/image-emily.jpg";
import jennie from "../images/image-jennie.jpg";
import thomas from "../images/image-thomas.jpg";
import milk from "../images/desktop/image-gallery-milkbottles.jpg";
import cone from "../images/desktop/image-gallery-cone.jpg";
import orangeslice from "../images/mobile/image-gallery-orange.jpg";
import sugar from "../images/desktop/image-gallery-sugarcubes.jpg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";

function Desktop() {
  return (
    <div className="hidden md:flex w-[100%] mx-auto ">
      <div>
        <div className="-mt-20">
          <img src={header} className="relative w-screen h-[30%] " alt="/" />
          <div className="absolute flex  -mt-[40%] ml-[30%] text-5xl font-bold text-white">
            <p className="ml-12 tracking-wide">WE ARE </p>
            <p className="tracking-widest mx-4">CREATIVES</p>
          </div>
          <div className="absolute  w-32 -mt-[30%] ml-[48%]">
            <img src={arrow} alt="/" className="h-44" />
          </div>
        </div>

        <div className="flex h-[30%] items-center -mb-10   -mt-[15%]">
          <div className="w-[50%]">
            <div className="text-Verydarkdesaturatedblue text-3xl font-bold w-[68%] mx-auto items-start">
              <p>Transform your</p>
              <p>brand</p>
            </div>
            <article className="w-[70%] mx-auto text-sm font-bold text-Grayishblue  px-2">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </article>
            <p className="w-[68%] mx-auto items-start font-bold underline decoration-Yellow  decoration-2">
              LEARN MORE
            </p>
          </div>
          <div className="w-[50%]">
            <img src={egg} alt="" className=" w-screen h-[100%]" />
          </div>
        </div>

        <div className="flex h-[30%] items-center   -mt-[23%] ">
          <div className="w-[50%]">
            <img src={cup} alt="/" className=" w-screen h-[100%]" />
          </div>
          <div className="w-[50%]">
            <div className="text-Verydarkdesaturatedblue text-3xl font-bold text-center">
              <p>Stand out to the</p>
              <p>right audience</p>
            </div>
            <article className="w-[70%] mx-auto text-sm font-bold text-Grayishblue pt-3 px-2">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </article>
            <p className="text-center my-5 font-bold underline decoration-Yellow  decoration-2">
              Learn more
            </p>
          </div>
        </div>

        <div className="flex h-[30%] items-center  -mt-[24%]">
          <div className="w-[50%]">
            <img src={cherry} alt="" className="relative" />
            <div className="absolute -mt-[18%] text-Darkdesaturatedcyan w-[35%] mx-auto ml-[10%]">
              <p className="text-center font-extrabold ">Graphic design</p>
              <article className="text-center font-medium ">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients'
                attention.
              </article>
            </div>
          </div>
          <div className="w-[50%]">
            <img src={orange} alt="" className="relative" />
            <div className="absolute -mt-[17%] text-Darkblue">
              <p className="text-center font-extrabold ">Photography</p>
              <article className="text-center font-medium w-[60%] mx-auto">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </article>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-Grayishblue pt-3 tracking-widest py-5  w-[70%] mx-auto text-center">
            CLIENTS TESTIMONIALS
          </h3>
          <div className="bg-white flex w-[70%] mx-auto text-center pb-10">
            <div className="mx-3">
              <img
                src={emily}
                alt=""
                className="h-20 w-20 rounded-full mx-auto "
              />
              <article className="text-Verydarkgrayishblue font-bold py-4">
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </article>
              <p className="text-Verydarkdesaturatedblue font-extrabold py-4">
                Emily R.
              </p>
              <p className="text-Verydarkgrayishblue font-bold text-sm">
                Marketing Director
              </p>
            </div>
            <div className="mx-3">
              <img
                src={thomas}
                alt=""
                className="h-20 w-20 rounded-full mx-auto"
              />
              <article className="text-Verydarkgrayishblue font-bold py-4">
                Sunnyside's enthusiasm coupled with their keen interest in our
                brand's success made it a satisfying and enjoyable experience.
              </article>
              <p className="text-Verydarkdesaturatedblue font-extrabold py-4">
                Thomas S.
              </p>
              <p className="text-Verydarkgrayishblue font-bold text-sm">
                Chief Operating Officer
              </p>
            </div>
            <div className="mx-3">
              <img
                src={jennie}
                alt=""
                className="h-20 w-20 rounded-full mx-auto"
              />
              <article className="text-Verydarkgrayishblue font-bold py-4">
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </article>
              <p className="text-Verydarkdesaturatedblue font-extrabold py-4">
                Jennie F.
              </p>
              <p className="text-Verydarkgrayishblue font-bold text-sm">
                Business Owner
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-[100%] pt-20">
          <div className="flex w-[50%]">
            <img src={milk} alt="" className="w-[50%]" />
            <img src={orangeslice} alt="" className="w-[50%]" />
          </div>
          <div className="flex w-[50%]">
            <img src={cone} alt="" className="w-[50%]" />
            <img src={sugar} alt="" className="w-[50%]" />
          </div>
        </div>
        <div className="bg-teal-200 text-Darkmoderatecyan font-bold">
          <p className="py-5 flex justify-around text-3xl">sunnyside</p>
          <div className="flex justify-evenly py-5 mb-10">
            <p>About</p> <p>Services</p> <p>Projects</p>
          </div>
          <div className="flex w-[20%] mx-auto pb-20">
            <img src={facebook} alt="" className="mx-5" />
            <img src={instagram} alt="" className="mx-5" />
            <img src={twitter} alt="" className="mx-5" />
            <img src={pinterest} alt="" className="mx-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop;
