import React from "react";
import stirfry from "../../../assets/img/stir-fry.png";
//import meatballs from "../../../assets/img/meatballs.png";
//import burger from "../../../assets/img/burger.png";//

const main = () => {
    return ( 
        <section id="main">
            <div className="container mx-auto flex flex col-reverse items-center md:justify-between md:mt-4 px-4 py-8 md:py-24 md:flex-row">
            <div className="flex flex-col space-y-4 text-center text-white md:text-left md:w-2/3">
                <h1 className="height: 77, width: 609, left: 423, top: 935, border-radius: null">
                    Special Meals of the day!
                    </h1>
                <p className="text-veryLightGrey md:w-4/5 xl:w-3/5">
                Check our specials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin.
                </p>
                <div className="flex items-center justify-center space-x-2 md:justify-start">
                    <a href="/#">
                        <img style={{ width: 250, height: 250 }} src={ stirfry } alt="" />
                    </a>
                    <p className="text-brightBrown">
                        Stir fry Pasta
                    </p>
                </div>
            </div>
            </div>
        </section>
     );
}
 
export default main ;
        
 
  
              