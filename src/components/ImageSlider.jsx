// import { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// // import img1 from "../assets/Images/Images/Facebook.png";
// // import img2 from "../assets/Images/Images/Facebook.png";
// import img1 from "../assets/Images/RandomImages/Facebook.png";
// import img2 from "../assets/Images/RandomImages/Mask Group 1.png";
// import img3 from "../assets/Images/RandomImages/WhatsApp Image 2024-.png";
// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [{ img: { img1 } }, { img: { img2 } }, { img: { img3 } }];

//   // Automatically change slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div
//       className="relative w-full h-[70vh] flex justify-center items-center bg-gray-100 overflow-hidden p-6"
//       style={{
//         backgroundImage: "url('/uper gradiant copy.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="absolute inset-0 bg-white/70"></div>
//       {/* Skewed Previous Image */}
//       <div
//         className="absolute top-0 left-[-100px] md:left-[-60px]  lg:left-[-60px] w-0  md:w-48 lg:w-[20%] h-full overflow-hidden  z-10 p-10 translate-x-4 -skew-y-12 transition-all duration-500 cursor-pointer"
//         onClick={handlePrev}
//       >
//         <img
//           src={slides[(currentIndex - 1 + slides.length) % slides.length].img}
//           alt="Previous Slide"
//           className="w-full h-full object-cover  rounded-md"
//         />
//       </div>

//       {/* Main Image */}
//       <div className="w-full md:w-[60%] h-full relative z-10">
//         <img
//           src={slides[currentIndex].img}
//           alt="Main Slide"
//           className="w-full h-full object-cover rounded-md shadow-lg shadow-primary"
//         />
//         <button className="absolute bottom-5 left-[60px] md:left-[80px] transform -translate-x-1/2 px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-transparent border border-primary text-primary font-semibold rounded shadow-md hover:bg-primary hover:text-white">
//           See More
//         </button>
//       </div>

//       {/* Skewed Next Image */}
//       <div
//         className="absolute top-0 right-0 md:right-[-60px] w-0 md:w-48  lg:w-[20%] h-full overflow-hidden z-10 p-10 translate-x-4   skew-y-12 transition-all duration-500 cursor-pointer"
//         onClick={handleNext}
//       >
//         <img
//           src={slides[(currentIndex + 1) % slides.length].img}
//           alt="Next Slide"
//           className="w-full h-full object-cover rounded-md"
//         />
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={handlePrev}
//         className="absolute  left-2  md:left-36  lg:left-64 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-large hover:bg-gray-700 z-20"
//       >
//         <FaChevronLeft />
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute  right-2 md:right-36  lg:right-64 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-large hover:bg-gray-700 z-20"
//       >
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// };

// export default ImageSlider;
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../assets/Images/RandomImages/Facebook.png";
import img2 from "../assets/Images/RandomImages/Mask Group 1.png";
import img3 from "../assets/Images/RandomImages/WhatsApp Image 2024-.png";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [img1, img2, img3];

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative w-full h-[70vh] flex justify-center items-center bg-gray-100 overflow-hidden p-6"
      style={{
        backgroundImage: "url('/uper gradiant copy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Skewed Previous Image */}
      <div
        className="absolute top-0 left-[-100px] md:left-[-60px] w-0 md:w-48 lg:w-[20%] h-full overflow-hidden z-10 p-10 translate-x-4 -skew-y-12 transition-all duration-500 cursor-pointer"
        onClick={handlePrev}
      >
        <img
          src={slides[(currentIndex - 1 + slides.length) % slides.length]}
          alt="Previous Slide"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Main Image */}
      <div className="w-full md:w-[60%] h-full relative z-10">
        <img
          src={slides[currentIndex]}
          alt="Main Slide"
          className="w-full h-full object-cover rounded-md shadow-lg shadow-primary"
        />
        <button className="absolute bottom-5 left-[60px] md:left-[80px] transform -translate-x-1/2 px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-transparent border border-primary text-primary font-semibold rounded shadow-md hover:bg-primary hover:text-white">
          See More
        </button>
      </div>

      {/* Skewed Next Image */}
      <div
        className="absolute top-0 right-0 md:right-[-60px] w-0 md:w-48 lg:w-[20%] h-full overflow-hidden z-10 p-10 translate-x-4 skew-y-12 transition-all duration-500 cursor-pointer"
        onClick={handleNext}
      >
        <img
          src={slides[(currentIndex + 1) % slides.length]}
          alt="Next Slide"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-36 lg:left-64 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-large hover:bg-gray-700 z-20"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-36 lg:right-64 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-large hover:bg-gray-700 z-20"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
