import React from "react";

// Destructuring of props
// const Food = (props) => {
//   return (
//     <div>{props.title}</div>
//   )
// }

const Food = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center space-y-4 w-1/3 ">
      <img src={image} alt="" className="w-64" />
      <h2 className="font-bold text-brighterBrown text-2xl">{title}</h2>
      <p className="text-center text-veryLightGrey">{description}</p>
    </div>
  );
};

export default Food;
