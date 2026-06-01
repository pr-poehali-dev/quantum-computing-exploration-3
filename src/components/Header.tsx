interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-bold">PARIS</div>
        <nav className="hidden sm:flex gap-6 lg:gap-8">
          <a href="#sights" className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-sm">
            Достопримечательности
          </a>
          <a href="#brands" className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-sm">
            Бренды
          </a>
          <a href="#map" className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-sm">
            Карта
          </a>
          <a href="#stays" className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-sm">
            Отели
          </a>
          <a href="#contact" className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-sm">
            Контакт
          </a>
        </nav>
      </div>
    </header>
  );
}