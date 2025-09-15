import React, { useEffect, useRef } from "react";

const PartnersSlider = ({ folderName, totalImages, altText = "Logo", bgColor = "bg-gray-50" }) => {
  const containerRef = useRef(null);

  const images = Array.from({ length: totalImages }, (_, i) => i + 1);
  const duplicatedImages = [...images, ...images]; // duplicado para scroll infinito

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    let animationFrameId;

    const scroll = () => {
      scrollAmount += 0.3; // velocidad
      if (scrollAmount >= container.scrollWidth / 2) 
        scrollAmount = 0;

      container.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className={`py-12 overflow-hidden relative ${bgColor}`}>
      <h2 className="sr-only">Partners</h2>
      <div className="max-w-7xl mx-auto px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none bg-transparent" />
        <div
          ref={containerRef}
          className="flex gap-8 whitespace-nowrap overflow-x-scroll no-scrollbar"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedImages.map((number, i) => (
            <div
              key={i}
              className="w-[120px] h-[100px] sm:w-[140px] sm:h-[110px] md:w-[160px] md:h-[120px] flex items-center justify-center shrink-0"
            >
              <img
                src={`/assets/images/${folderName}/${number}.webp`}
                alt={`${altText} ${number}`}
                className="max-w-full max-h-full object-contain select-none pointer-events-none"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(PartnersSlider);
