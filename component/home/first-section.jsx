import React, {useEffect, useState} from 'react';
import NameIcon from "../graphics/name-icon";
import ReactMarkdown from "react-markdown";
import {myRole} from "../data/my-role";
import {HiArrowNarrowDown} from "@react-icons/all-files/hi/HiArrowNarrowDown";
import Sections from "../sections";
import {useInView} from "react-intersection-observer";

function FirstSection(props) {
  const { ref, inView, entry } = useInView(
    {
      threshold: 0
    }
  )

  const [active, setActive] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 500)

  }, [inView])

  return (
    <Sections className={"bg-base-300 overflow-hidden"}>
      <div
        className={"absolute flex flex-col items-end " +
      "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}
        ref={ref}

      >
        <div className={"hidden md:block"}>
          <NameIcon active={active} height={"100"}/>
        </div>
        <div className={"hidden sm:block overflow-hidden md:hidden"}>
          <NameIcon active={active} height={"80"}/>
        </div>
        <div className={"block overflow-hidden sm:hidden"}>
          <NameIcon active={active} height={"55"}/>
        </div>
        <div
          data-aos={"fade-left"}
          data-aos-delay={"1600"}
          data-aos-duration={"800"}
        >
          <ReactMarkdown children={myRole} className={"my-role mt-5 text-right text-base-content"}/>
        </div>
      </div>
      <button
        className={"absolute bottom-24 left-1/2 -translate-x-1/2"}
        onClick={() => {
          document.getElementById("second-section").scrollIntoView()
        }}
      >
        <HiArrowNarrowDown className={"animate-bounce"}/>
      </button>
    </Sections>
  );
}

export default FirstSection;