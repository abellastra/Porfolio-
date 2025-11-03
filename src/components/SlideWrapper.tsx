import { useSwiperSlide } from "swiper/react";
function SlideWrapper({ children }: { children: React.ReactNode }) {
  const { isActive } = useSwiperSlide();
  return (
    <div
  className={`w-full max-w-md h-full transition-all duration-300 rounded-xl p-4 ${
            isActive
          ? "scale-105 z-10  shadow-xl "
          : "scale-70 opacity-60 bg-gray-100"
      }`}
    >
      {" "}
      {children}{" "}
    </div>
  );
}
export default SlideWrapper;