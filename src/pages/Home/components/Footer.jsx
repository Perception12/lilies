import React from "react";
import { footerData, copyRight, footerSocialLinks } from "../../../constants";

const Footer = () => {
  return (
    <footer id="footer" className="bg-veryDarkBlue text-white">
      <div className="container mx-auto py-8 px-12">
        {/* Flex Container */}
        <div className="flex flex-col justify-between space-y-8 md:flex-row md:space-y-0">
          {footerData.map((data) => (
            <div key={data.section} className="flex flex-col space-y-4">
              <h3 className="font-semibold">{data.section}</h3>
              {data.links.map((linkData) => (
                <a
                  key={linkData.name}
                  href={linkData.link}
                  className="text-[14px] text-veryLightGrey"
                >
                  {/* If there's link image, it displays image, else it displays the name */}
                  {linkData.image ? (
                    <img src={linkData.image} alt={linkData.name}></img>
                  ) : (
                    linkData.name
                  )}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className=" border-t border-gray-600 px-4 py-8">
        <div className="container flex mx-auto justify-between items-center">
          <div>
            <p className="text-[14px] text-veryLightGrey">{copyRight}</p>
          </div>

          <div className="flex space-x-3 items-center">
            {footerSocialLinks.map((social, index) => (
              <a href={social.link} key={index} className="bg-gray-600 w-[32px] h-[32px] flex justify-center items-center rounded-full" >
                <img src={social.image} alt="social" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
