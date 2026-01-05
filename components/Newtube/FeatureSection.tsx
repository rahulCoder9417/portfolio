import { ReactNode } from "react";
import ImageSlider from "./ImageSlider";

interface FeatureImage {
  src: string;
  alt: string;
}

interface FeatureSectionProps {
  number: number;
  title: string;
  description: ReactNode;
  images: FeatureImage[];
  reverse?: boolean;
}

const FeatureSection = ({ number, title, description, images, reverse = false }: FeatureSectionProps) => {
  return (
    <section className="py-20 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={`${reverse ? 'lg:order-2' : ''} animate-slide-up`}>
            <div className="flex items-center gap-4 mb-6">
              <span className="feature-number">{number}</span>
              <h3 className="font-heading text-3xl md:text-4xl font-bold">{title}</h3>
            </div>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
              {description}
            </div>
          </div>

          {/* Images */}
          <div className={`${reverse ? 'lg:order-1' : ''} ${reverse ? 'animate-slide-right' : 'animate-slide-left'} delay-200`}>
            {images.length === 1 ? (
              <div className="image-container shadow-glow group hover:shadow-glow-strong transition-all duration-500">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ) : (
              <ImageSlider images={images} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
