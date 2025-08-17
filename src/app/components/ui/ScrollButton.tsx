import React from "react";

export const ScrollButton = ({
  targetId,
  children,
}: {
  targetId: string;
  children: React.ReactNode;
}) => {
  // scrolls the user down to the element with the passed id
  const scrollToElement = () => {
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <button onClick={scrollToElement} className="group">
      <h3 className="relative inline-block">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
      </h3>
    </button>
  );
};
