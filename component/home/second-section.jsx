import React, {useEffect, useState} from 'react';
import Sections from "../sections";
import ReactMarkdown from "react-markdown";
import {aboutMe} from "../data/about-me";
import AvatarIcon from "../graphics/avatar-icon";
import {useInView} from "react-intersection-observer";
import {HiArrowNarrowDown} from "@react-icons/all-files/hi/HiArrowNarrowDown";

function SecondSection() {
  const {ref, inView, entry} = useInView(
    {
      threshold: 0
    }
  )

  const [active, setActive] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setActive(inView)
    }, 100)

  }, [inView])

  return (
    <Sections className={"relative bg-primary text-primary-content overflow-hidden"}>
      <div
        className={"absolute flex flex-col md:flex-row justify-center items-center w-full h-full py-6 px-12 sm:px-32 " +
      "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"}
        id={"second-section"}
      >
        <div
          className={"mr-0 sm:mr-6 md:mr-20"}
          ref={ref}
        >
          <div
            data-aos={"fade-right"}
            className={"z-40"}
          >
            <h1 className={"font-display font-bold text-6xl"}>
              a bit about me ...
            </h1>
            <ReactMarkdown className={"mt-12"}>
              {aboutMe}
            </ReactMarkdown>
          </div>
        </div>
        <div className={"hidden lg:block"}>
          <AvatarIcon active={active} height={"300"}/>
        </div>
        <div className={"hidden md:block lg:hidden"}>
          <AvatarIcon active={active} height={"230"}/>
        </div>
      </div>
      <div className={"absolute z-0 -left-3 -bottom-24 block md:hidden mt-12"}>
        <AvatarIcon active={active} height={"200"}/>
      </div>
      <button
        className={"absolute bottom-24 left-1/2 -translate-x-1/2 z-50"}
        onClick={() => {
          document.getElementById("third-section").scrollIntoView()
        }}
      >
        <HiArrowNarrowDown className={"animate-bounce"}/>
      </button>
    </Sections>
  );
}

export default SecondSection;