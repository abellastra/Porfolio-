import { useSwiperSlide } from "swiper/react";
function SlideWrapper({ children }: { children: React.ReactNode }) {
  const { isActive } = useSwiperSlide();
  return (
 <div
      className={`w-full transition-all duration-300 rounded-xl p-4 ${
        isActive
          ? "scale-100 z-10 shadow-xl"
          : "scale-90 opacity-60 blur-[1px]"
      }`}
    

    >
      {" "}
      {children}{" "}
    </div>
  );
}
export default SlideWrapper;