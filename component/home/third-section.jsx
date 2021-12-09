import React, {useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown";
import Sections from "../sections";
import {useInView} from "react-intersection-observer";
import CircleIcon from "../graphics/circle-icon";
import {socialMediaLinks} from "../data/social-media-links";
import {ThankyouRegards} from "../data/thankyou-regards";
import {HiArrowNarrowUp} from "@react-icons/all-files/hi/HiArrowNarrowUp";

function ThirdSection() {
  const {ref, inView, entry} = useInView(
    {
      threshold: 0
    }
  )

  const [active, setActive] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setActive(inView)
    }, 1000)

  }, [inView])

  return (
    <Sections className={"relative bg-base-300 overflow-hidden"}>
      <div
        className={"md:absolute flex flex-col " +
        "md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 " +
        "w-full h-full p-24"}
        ref={ref}
        id={"third-section"}
      >
        <h1 className={"font-display font-bold text-4xl"} >
          thank you for your visit
        </h1>
        <ReactMarkdown className={"text-lg mt-6"}>
          {ThankyouRegards}
        </ReactMarkdown>
        <div
          className={"grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto mt-20 place-items-center z-50"}
          data-aos={"fade-left"}
        >
          {socialMediaLinks.map((entry) => {
            return (
              <a
                href={entry.href}
                className={"flex flex-col mt-11 items-center group"}
              >
                <div className={"text-8xl mb-6 group-hover:text-primary transition-all"}>
                  {entry.icon}
                </div>
                <span className={"group-hover:underline group-hover:text-neutral transition-all"}>
                  {entry.text}
                </span>
              </a>
            )
          })}
        </div>
      </div>
      <div className={"block absolute -bottom-12 -right-12"}>
        <CircleIcon height={"200"} active={active}/>
        <button
          className={"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-primary-focus"}
          onClick={() => {
            window.scrollTo(0,0)
          }}
        >
          <HiArrowNarrowUp />
        </button>
      </div>
    </Sections>
  );
}

export default ThirdSection;