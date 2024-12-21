import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "aos/dist/aos.css";
import AOS from "aos";

const BurcherCard = ({ imageUrl, title, pdfUrl }) => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full rounded overflow-hidden" data-aos="fade-up">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center text-gray-700">
          {/* Clicking the title opens the PDF in a new tab */}
          <h1
            onClick={() => window.open(pdfUrl, "_blank")}
            className="hover:underline cursor-pointer"
          >
            {title}
          </h1>
        </div>
      </div>
      {/* Display the image */}
      <img className="w-full md:h-72 h-full" src={imageUrl} alt={title} />
    </div>
  );
};

// PropTypes validation
BurcherCard.propTypes = {
  imageUrl: PropTypes.string.isRequired, // Ensure imageUrl is a required string
  title: PropTypes.string.isRequired, // Ensure title is a required string
  pdfUrl: PropTypes.string.isRequired, // Ensure pdfUrl is a required string
};

export default BurcherCard;
