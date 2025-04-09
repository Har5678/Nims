import React, { useEffect, useState } from 'react';

const Reviews = () => {
  const clientReviews = [
    {
      name: "Ashutosh Tyagi",
      quote: "NIMS made my transition from school to college effortless...",
      rating: 5,
    },
    {
      name: "Hardik Tarika",
      quote: "The team at NIMS is highly professional and supportive...",
      rating: 4,
    },
    {
      name: "Piyush Agarwal",
      quote: "NIMS Educational Consultancy is truly dedicated to helping...",
      rating: 3,
    },
    {
      name: "Tushar Raj",
      quote: "The team at NIMS is highly professional and supportive...",
      rating: 5,
    },
    {
      name: "Manish Tyagi",
      quote: "NIMS made my transition from school to college effortless...",
      rating: 4,
    },
    {
      name: "Kritika Gupta",
      quote: "NIMS Educational Consultancy provided me with the best advice...",
      rating: 5,
    },
  ];

  const [visibleReviews, setVisibleReviews] = useState(clientReviews.slice(0, 3));
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setVisibleReviews((prevReviews) => {
          let currentIndex = clientReviews.findIndex((r) => r === prevReviews[0]);
          let nextIndex = (currentIndex + 3) % clientReviews.length;
          return clientReviews.slice(nextIndex, nextIndex + 3);
        });
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-12 px-4 md:px-6 lg:px-10 bg-gray-100">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-base md:text-lg font-semibold text-gray-700">
          A FEW WORDS FROM OUR CLIENTS
        </h2>
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 leading-snug mb-6">
          What people are saying about NIMS
        </h1>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-500"
          style={{ opacity: fade ? 1 : 0 }}
        >
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="w-full px-4 py-5 bg-white text-black rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < review.rating ? "orange" : "gray"}
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      className="mr-0.5"
                    >
                      <path d="M12 17.3l6.18 3.9-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.93-1.64 7.03z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm md:text-base italic mb-3">{review.quote}</p>
              <p className="font-semibold text-base md:text-lg">{review.name}</p>
              <p className="text-xs text-gray-500">Customer</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
