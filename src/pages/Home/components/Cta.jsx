import React from 'react'

const Cta = () => {
  return (
    <section id="cta">
    <div className="mx-auto mt-20 max-w-7xl flex flex-row items-center py-12 px-4 space-y-4 text-brighterBrown lg:justify-between md:w-2/3">
        <div>
        <h1 className="container font-bold text-3xl">
        Get Notified When We Update!
        </h1>
        <p className="text-white mt-8">
        Get notified when we add new items to our specials menu, update our price list of have promos!
        </p>
        </div>
      
        <div class="flex flex-row-reverse mx-auto items-center space-y-10 text-center md:text-left md:w-3/4">
            <div className="flex border border-red-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-green-800 bg-white border rounded-md focus:border-black-400"
                    placeholder="gregphilips@gmail.com"
                />
                <button className="px-4 text-black bg-brighterBrown-600 border-l rounded">
                    Get notified
                </button>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Cta;
