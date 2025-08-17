import Image from "next/image";
import { useState } from "react";

interface FlippingCardProps {
  imageSrc: string;
  imageAlt: string;
  backText: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
}

export const FlippingCard: React.FC<FlippingCardProps> = ({ 
  imageSrc, 
  imageAlt, 
  backText, 
  width = 200, 
  height = 200,
  backgroundColor = "bg-black",
  textColor = "text-white",
  borderRadius = "rounded-4xl"
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <div 
        className={`relative cursor-pointer perspective-1000`}
        style={{ width: `${width}px`, height: `${height}px` }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div 
          className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:-translate-y-2 ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          <button className="absolute inset-0 w-full h-full backface-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={width}
              height={height}
              className={`${borderRadius} transition ease-in w-full h-full object-cover`}
            />
          </button>
          
          <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${backgroundColor} ${borderRadius} flex items-center justify-center p-6`}>
            <div className={`text-center ${textColor}`}>
              <p className="text-sm opacity-90">
                {backText}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </>
  );
};