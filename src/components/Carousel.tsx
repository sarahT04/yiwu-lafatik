import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselItem = {
  src: string;
  alt: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
};

type CarouselProps = {
  items: CarouselItem[];
  intervalMs?: number;
  className?: string;
  imageClassName?: string;
  showControls?: boolean;
  showIndicators?: boolean;
  controlButtonClassName?: string;
  controlIconClassName?: string;
  controlIconSize?: number;
  indicatorContainerClassName?: string;
  indicatorButtonClassName?: string;
  indicatorActiveClassName?: string;
  indicatorInactiveClassName?: string;
  renderContent?: (item: CarouselItem, index: number) => React.ReactNode;
};

export function Carousel({
  items,
  intervalMs = 0,
  className = "",
  imageClassName = "object-cover",
  showControls = true,
  showIndicators = true,
  controlButtonClassName = "",
  controlIconClassName = "",
  controlIconSize = 24,
  indicatorContainerClassName = "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2",
  indicatorButtonClassName = "w-2 h-2 rounded-full transition-all",
  indicatorActiveClassName = "bg-white w-6",
  indicatorInactiveClassName = "bg-white/60",
  renderContent,
}: CarouselProps) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = items.length > 1;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearAutoAdvance = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAutoAdvance = () => {
    if (!intervalMs || !hasMultiple) {
      return;
    }

    clearAutoAdvance();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
  };

  useEffect(() => {
    startAutoAdvance();

    return () => {
      clearAutoAdvance();
    };
  }, [hasMultiple, intervalMs, items.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    startAutoAdvance();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    startAutoAdvance();
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {items.map((item, index) => (
        <div
          key={`${item.src}-${index}`}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={item.src}
            alt={item.alt}
            className={`w-full h-full ${imageClassName}`}
          />
          {renderContent ? renderContent(item, index) : null}
        </div>
      ))}

      {showControls && hasMultiple ? (
        <>
          <button
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 -translate-y-1/2 ${controlButtonClassName}`}
            aria-label={t("common.carousel.previous")}
          >
            <ChevronLeft className={controlIconClassName} size={controlIconSize} />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 -translate-y-1/2 ${controlButtonClassName}`}
            aria-label={t("common.carousel.next")}
          >
            <ChevronRight className={controlIconClassName} size={controlIconSize} />
          </button>
        </>
      ) : null}

      {showIndicators && hasMultiple ? (
        <div className={indicatorContainerClassName}>
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${indicatorButtonClassName} ${
                index === currentIndex ? indicatorActiveClassName : indicatorInactiveClassName
              }`}
              aria-label={t("common.carousel.goToSlide", { index: index + 1 })}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
