import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Banner = () => {
  return (
    
    <Swiper
    className='mt-5 mb-10 rounded-3xl'
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide><img className='h-[600px] w-full' src="https://i.postimg.cc/qvg6K4Sy/art-drawing-background.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='h-[600px] w-full' src="https://i.postimg.cc/WzS9zgfM/macro-shot-artists-paint-palette-splashes-drips-312334994.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='h-[600px] w-full' src="https://i.postimg.cc/vTQsC7V9/row-assorted-paintbrushes-neatly-arranged-solid-background-captured-top-down-perspective-bristles-br.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='h-[600px] w-full' src="https://i.postimg.cc/mDD8PtCM/colorful-toucan-batik-textile-painting-distressed-dynamic-urban-street-art-elizabeth-wilson-s-origin.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='h-[600px] w-full' src="https://i.postimg.cc/8cYcBn7w/HD-wallpaper-beautiful-tree-colorful-art-tree-drawing-painting-beautiful-abstract.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='h-[600px] w-full' src="https://i.postimg.cc/NjkYQzQV/Zoom-bg-Van-Gogh-2-1160x653.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='h-[600px] w-full' src="https://i.postimg.cc/gjyXdKjK/surrealistic-horror-painting-featuring-tree-against-vibrant-blue-background-dark-red-dark-orange-hue.jpg" alt="" /></SwiperSlide>
  </Swiper>
  );
};

export default Banner;
