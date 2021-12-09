import Head from 'next/head'
import FirstSection from "../component/home/first-section";
import SecondSection from "../component/home/second-section";
import ThirdSection from "../component/home/third-section";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Welcome to Fadhlan's Little Corner!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta property="og:url" content="xlfl.x-camp.id" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb id" />
        <meta property="og:title" content={"Muhammad Fadhlan's Personal Website"} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Muhammad Fadhlan is a final-year Undergraduate Student at Universitas Gadjah Mada. Currently working as an Intern as a Front-end Developer / IoT Engineer. This is his portfolio page."
        />
        <meta property="og:image" content={"https://i.ibb.co/z6T7vxz/thumbnail.jpg"} />
      </Head>
      <div className={""}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </div>
  )
}
