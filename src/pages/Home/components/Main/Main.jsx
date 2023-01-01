import React from "react";
import Food from "./components/Food";
import { landingPageMeals } from "../../../../constants";

const Main = () => {
  return (
    <section id="main">
      {/* Flex Container */}
      <div className="flex flex-col mx-auto items-center space-y-6 text-center px-4 text-white">
        <h1 className="font-bold text-4xl">Special Meals of the day!</h1>
        <p className="text-veryLightGrey text-center max-w-[609px]">
          Check our specials of the day and get discounts on all our meals and
          swift delivery to what ever location within Ilorin.
        </p>
        <br />
        <div className="flex flex-col items-center w-full pt-8 space-y-12 md:space-y-0 md:space-x-4 md:flex-row">
          {landingPageMeals.map((meal) => (
            <Food
              key={meal.id}
              image={meal.image}
              title={meal.name}
              description={meal.shortDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
