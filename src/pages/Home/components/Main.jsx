import React from "react";
import stirfry from "../../../../assets/img/stir-fry.png";
import meatballs from "../../../../assets/img/meatballs.png";
import burger from "../../../../assets/img/burger.png"; 
import Food from "./components/Food";

const main = () => {
  return (
    <section id="main" >
        {/* Flex Container */}
        <div className="flex flex-col mx-auto items-center space-y-6 text-center text-white md:text-left md:w-2/3">
          <h1 className="font-bold text-4xl">
            Special Meals of the day!
          </h1>
          <p className="text-veryLightGrey text-center md:w-4/5 xl:w-3/5">
            Check our specials of the day and get discounts on all our meals and
            swift delivery to what ever location within Ilorin.
          </p>
          <br />
          <div className="flex flex-col items-center space-x-4 md:flex-row">
            <Food
              image={stirfry}
              title="Stir fry pasta"
              description={"Stir fry pasta yada yada yada because of Sesan"}
            />
            <Food
              image={meatballs}
              title="Meat Balls"
              description={"Stir fry pasta yada yada yada because of Sesan"}
            />
            <Food
              image={burger}
              title="Burger Meal"
              description={"Stir fry pasta yada yada yada because of Sesan"}
            />
          </div>
        </div>
    </section>
  );
};

export default main;