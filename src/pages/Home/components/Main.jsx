import React from "react";
import stirfry from "../../../assets/img/stir-fry.png";
import meatballs from "../../../assets/img/meatballs.png";
import burger from "../../../assets/img/burger.png";//

const main = () => {
    return ( 
        <section id="main">
            <div className="container mx-auto flex justify-center items-center md:flex-row">
            <div className="flex flex-col space-y-4 text-center text-white md:text-left md:w-2/3">
                <h1 className="height: 33, width: 463, left: 489, top: 867">
                    Special Meals of the day!
                    </h1>
                <p className="text-veryLightGrey md:w-4/5 xl:w-3/5">
                Check our specials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin.
                </p>
                <div className="flex flex-col md:flex-row">
                    <a href="/#">
                        <img style={{ width: 270, height: 230, top: 1108, left: 131 }} src={ stirfry } alt="" />
                        <p style={{ textAlign: 'center', width: 177, height: 33}}>
                            <span className="text-brightBrown">Stir fry Pasta</span>
                        </p>
                    </a>

                    <a href="/#">
                        <img style={{ width: 270, height: 230, top: 1108, left: 612 }} src={ meatballs } alt="" />
                        <p style={{ textAlign: 'center', width: 168, height: 33}}> 
                        <span className="text-brightBrown">Meat Balls </span>
                        </p>
                    </a>

                    <a href="/#">
                        <img style={{ width: 270, height: 230, top: 1108, left: 1094 }} src={ burger } alt="" />
                        <p style={{ textAlign: 'center', width: 144, height: 33 }}> 
                        <span className="text-brightBrown">Burger Meal</span>
                     </p>
                    </a>
                </div>
            </div>
            </div>
        </section>
     );
}
 
export default main ;
        
 
  
              