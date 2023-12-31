import TitleSection from "@/components/landing-page/title-section";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import appBanner from "../../../public/appBanner.png";
import { CLIENTS } from "@/lib/constants";

function HomePage() {
  return (
    <>
      <section
        className="overflow-hidden 
        px-4 
        sm:px-6 
        mt-10 
        sm:flex 
        sm:flex-col
        gap-4
        md:justify-center
        md:items-center "
      >
        <TitleSection
          title="All-in-One Collaboration an Productivity Plateform"
          subheading=""
          pill="Your workspace, Perfected"
        />
        <div
          className="bg-white
            p-[2px]
            mt-[6]
            rounded-xl
            bg-gradient-to-r
            from-primary
            to-brand-primaryBlue
            sm:w-[300px]
            "
        >
          <Button
            variant="btn-secondary"
            className="w-full rounded-[10px] p-6 text-2xl bg-background"
          >
            Get Notion-Free
          </Button>
        </div>
        <div className="mg:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[40px] relative sm:ml-0 ml-[-50px]">
          <Image src={appBanner} alt="Application Banner" />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden
        flex
        absolute
        after:content['']
        after:data:from-brand-dark
        after:to-transparent
        after:from-background
        after:bg-gradient-to-l
        after:right-0
        after:bottom-0
        after:w-20
        after:z-10
        after:absolute

        before:content['']
        before:data:from-brand-dark
        before:to-transparent
        before:from-background
        before:bg-gradient-to-r
        before:left-0
        before:top-0
        before:bottom-0
        before:w-20
        before:z-10
        before:absolute
        "
        >
          {" "}
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="flex
          flex-nowrap
          animate-slide
          "
            >
              {" "}
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className="relative w-[200px] m-20 shrink-0 flex items-center"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}{" "}
        </div>
      </section>
      <section
        className="px-4
      sm:px-6
      flex
      justify-center
      items-center
      flex-col
      relative
      "
      >
        <div
          className="w-[30%]
        blur-[120px]
        rounded-full
        h-32
        absolute
        bg-brand-primaryPurple/50
        -z-10
        top-22
        "
        ></div>
      </section>
    </>
  );
}

export default HomePage;
