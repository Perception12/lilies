import React from "react";

const Cta = () => {
  return (
    <section id="cta">
      <div className="container mx-auto mt-20 flex flex-col items-center py-12 space-y-4 md:flex-row md:justify-between">
        <div className="flex-1">
          <h1 className="container text-brighterBrown font-bold text-3xl">
            Get Notified When We Update!
          </h1>
          <p className="text-white mt-8 max-w-[531px]">
            Get notified when we add new items to our specials menu, update our
            price list of have promos!
          </p>
        </div>

        <div class="flex-1 flex space-x-4 justify-end">
            <input
              type="text"
              className="px-4 py-2 bg-white rounded-md outline-none"
              placeholder="gregphilips@gmail.com"
            />
            <button className="px-4 text-sm text-veryDarkGreen bg-brighterBrown font-semibold rounded-md">
              Get notified
            </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
