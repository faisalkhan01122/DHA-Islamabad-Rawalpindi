import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const JacrandaCard = ({ imageUrl, title, link }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full rounded overflow-hidden" data-aos="fade-up">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center text-gray-700">
          <Link
            to={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {title}
          </Link>
        </div>
      </div>
      <img className="w-full" src={imageUrl} alt={title} />
    </div>
  );
};

JacrandaCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default JacrandaCard;
