import '../global.css'
import 'aos/dist/aos.css'
import {useEffect} from "react";
import AOS from 'aos'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: -300
    })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
