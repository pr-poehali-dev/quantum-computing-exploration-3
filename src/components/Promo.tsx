import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/20488433-ea94-4c7a-b0ee-fe8b2529b599/files/22b7b2cd-1efb-4472-a996-011d0f5004e8.jpg"
            alt="Париж на закате"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="absolute top-12 left-6 z-10 flex flex-col gap-6 sm:gap-8">
        <div className="text-white">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Основан</p>
          <p className="text-3xl sm:text-4xl font-bold">250 до н.э.</p>
        </div>
        <div className="text-white">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Население</p>
          <p className="text-3xl sm:text-4xl font-bold">2,1 млн</p>
        </div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        О Париже
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl z-10 leading-tight">
        Город, где рождается мода. Столица Франции на протяжении 10 веков — центр искусства, гастрономии и высокой культуры.
      </p>
    </div>
  );
}
