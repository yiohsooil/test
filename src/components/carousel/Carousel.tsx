import React, { ReactNode, forwardRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  settings?: Settings;
  children?: ReactNode;
}

const Carousel = forwardRef<Slider, CarouselProps>(
  ({ settings, children }, ref) => {
    return (
      <Slider {...settings} ref={ref as React.Ref<Slider> | undefined}>
        {children}
      </Slider>
    );
  }
);

export default Carousel;
