import {i18n} from "../utils/i18n";
import React from 'react'
import { useGlobalContext } from "../utils/context";



const Home = () => {
    const{state:{direction}}=useGlobalContext();
    const translation=direction==="rtl"?i18n.pageHeading.fa:i18n.pageHeading.en;
  return (
    <div className="container">
        <h2>{translation.welcome}</h2>

    </div>
  )
}

export default Home