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
          src="https://cdn.poehali.dev/projects/20488433-ea94-4c7a-b0ee-fe8b2529b599/files/22b7b2cd-1efb-4472-a996-011d0f5004e8.jpg"
          alt="Париж — столица моды и романтики"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-4 opacity-70">Франция · Столица мира</p>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight mb-6 leading-none">
          PARIS
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Столица моды, искусства и гастрономии. Город, в который влюбляются с первого взгляда — и возвращаются снова.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="#sights"
            className="inline-block border border-white text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Достопримечательности
          </a>
          <a
            href="#brands"
            className="inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300"
          >
            Модные бренды
          </a>
        </div>
      </div>
    </div>
  );
}
