import Icon from "@/components/ui/icon";

const sights = [
  {
    name: "Эйфелева башня",
    desc: "Символ Парижа высотой 330 м. Построена в 1889 году. Ежегодно принимает более 7 млн посетителей.",
    link: "https://www.toureiffel.paris",
    emoji: "🗼",
  },
  {
    name: "Лувр",
    desc: "Крупнейший музей мира. Более 35 000 экспонатов, включая «Мону Лизу» Леонардо да Винчи.",
    link: "https://www.louvre.fr",
    emoji: "🏛️",
  },
  {
    name: "Версаль",
    desc: "Дворцово-парковый ансамбль XVIII века — резиденция французских королей в 20 км от Парижа.",
    link: "https://www.chateauversailles.fr",
    emoji: "👑",
  },
  {
    name: "Монмартр",
    desc: "Богемный холм с базиликой Сакре-Кёр, уличными художниками и лучшими видами на город.",
    link: "https://www.sacre-coeur-montmartre.com",
    emoji: "⛪",
  },
];

const brands = [
  { name: "Louis Vuitton", link: "https://fr.louisvuitton.com", cat: "Люкс" },
  { name: "Chanel", link: "https://www.chanel.com", cat: "Haute Couture" },
  { name: "Dior", link: "https://www.dior.com", cat: "Haute Couture" },
  { name: "Hermès", link: "https://www.hermes.com", cat: "Аксессуары" },
  { name: "Galeries Lafayette", link: "https://www.galerieslafayette.com", cat: "Универмаг" },
  { name: "Le Bon Marché", link: "https://www.lebonmarche.com", cat: "Универмаг" },
];

const stats = [
  { value: "100+", label: "млн туристов в год", sub: "#1 в мире по посещаемости" },
  { value: "4.8", label: "рейтинг путешествий", sub: "по версии TripAdvisor 2024" },
  { value: "3 500+", label: "ресторанов Michelin", sub: "в Иль-де-Франс" },
];

export default function Featured() {
  return (
    <div className="bg-white">
      {/* Статистика */}
      <div className="bg-neutral-950 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-5xl lg:text-6xl font-bold mb-2">{s.value}</p>
              <p className="text-neutral-300 text-sm uppercase tracking-widest mb-1">{s.label}</p>
              <p className="text-neutral-500 text-xs">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Достопримечательности */}
      <div id="sights" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="uppercase mb-3 text-xs tracking-widest text-neutral-500">Что посмотреть</h3>
          <h2 className="text-3xl lg:text-5xl mb-14 text-neutral-900 leading-tight max-w-xl">
            Популярные достопримечательности
          </h2>
          <div className="flex flex-col lg:flex-row gap-0">
            <div className="flex-1 h-[400px] lg:h-[560px]">
              <img
                src="https://cdn.poehali.dev/projects/20488433-ea94-4c7a-b0ee-fe8b2529b599/files/8200407d-5dd2-4227-9099-8763fd16c182.jpg"
                alt="Лувр ночью"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 bg-neutral-50 flex flex-col justify-center p-10 lg:p-12">
              <div className="space-y-8">
                {sights.map((s, i) => (
                  <div key={i} className="border-b border-neutral-200 pb-6 last:border-0 last:pb-0">
                    <h4 className="text-base font-semibold text-neutral-900 mb-2">
                      <span className="mr-2">{s.emoji}</span>{s.name}
                    </h4>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-3">{s.desc}</p>
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-black border border-black px-3 py-1.5 hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Открыть сайт <Icon name="ExternalLink" size={12} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Легендарные бренды */}
      <div id="brands" className="bg-neutral-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="uppercase mb-3 text-xs tracking-widest text-neutral-500">Мода и стиль</h3>
          <h2 className="text-3xl lg:text-5xl mb-14 text-white leading-tight max-w-xl">
            Легендарные бренды Парижа
          </h2>
          <div className="flex flex-col lg:flex-row gap-14 items-start">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {brands.map((b, i) => (
                <a
                  key={i}
                  href={b.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-neutral-700 p-6 hover:border-white transition-all duration-300 flex flex-col gap-2"
                >
                  <span className="text-xs uppercase tracking-widest text-neutral-500">{b.cat}</span>
                  <span className="text-white text-lg font-semibold group-hover:text-neutral-300 transition-colors">{b.name}</span>
                  <span className="text-neutral-600 text-xs flex items-center gap-1 mt-1">
                    Перейти на сайт <Icon name="ArrowRight" size={12} />
                  </span>
                </a>
              ))}
            </div>
            <div className="flex-1 lg:max-w-sm">
              <img
                src="https://cdn.poehali.dev/projects/20488433-ea94-4c7a-b0ee-fe8b2529b599/files/6664f0e7-6d00-45a0-828b-66ff05c5e258.jpg"
                alt="Парижские бутики"
                className="w-full h-[480px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
