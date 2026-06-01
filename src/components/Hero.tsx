import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/20488433-ea94-4c7a-b0ee-fe8b2529b599/files/65346ece-8457-4c73-9ce6-2af50aa9cc47.jpg"
          alt="Эльбрус — высочайшая вершина России"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-80">Кабардино-Балкария · 5 642 м</p>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight mb-6 leading-none">
          ЭЛЬБРУС
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Высочайшая вершина России и Европы. Двуглавый спящий вулкан в сердце Большого Кавказа.
        </p>
        <a
          href="#routes"
          className="inline-block mt-8 border border-white text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Как добраться
        </a>
      </div>
    </div>
  );
}