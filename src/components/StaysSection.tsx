import Icon from "@/components/ui/icon";

const hotels = [
  {
    name: "Hôtel Lutetia",
    stars: 5,
    rating: 9.4,
    desc: "Легендарный отель в стиле ар-деко на Левом берегу. Джаз-бар, спа и бассейн.",
    price: "от 800 €/ночь",
    link: "https://www.hotellutetia.com",
    area: "Saint-Germain-des-Prés",
  },
  {
    name: "Le Meurice",
    stars: 5,
    rating: 9.6,
    desc: "Дворцовый отель с видом на Тюильри. Ресторан со звездой Michelin, номера в духе Версаля.",
    price: "от 1 100 €/ночь",
    link: "https://www.dorchestercollection.com/paris/le-meurice",
    area: "Rue de Rivoli, 1-й округ",
  },
  {
    name: "Hotel des Grands Boulevards",
    stars: 4,
    rating: 9.1,
    desc: "Бутик-отель с внутренним садом, баром на крыше и шикарным итальянским рестораном.",
    price: "от 280 €/ночь",
    link: "https://www.hoteldesgrandsboulevards.com",
    area: "Grands Boulevards, 2-й округ",
  },
  {
    name: "Hôtel du Petit Moulin",
    stars: 4,
    rating: 9.0,
    desc: "Дизайнерский отель в Марэ — каждый номер оформлен Кристианом Лакруа.",
    price: "от 230 €/ночь",
    link: "https://www.hoteldupetitmoulin.com",
    area: "Le Marais, 3-й округ",
  },
];

const cafes = [
  {
    name: "Café de Flore",
    rating: 4.5,
    desc: "Культовое парижское кафе с 1887 года. Столик у окна — и весь Сен-Жермен перед вами.",
    specialty: "Горячий шоколад, круассаны",
    link: "https://cafedeflore.fr",
    area: "Boulevard Saint-Germain",
  },
  {
    name: "Les Deux Magots",
    rating: 4.4,
    desc: "Легендарный интеллектуальный салон. Здесь бывали Хемингуэй, Пикассо и Сартр.",
    specialty: "Café crème, тарт татен",
    link: "https://www.lesdeuxmagots.fr",
    area: "Place Saint-Germain-des-Prés",
  },
  {
    name: "Brasserie Bofinger",
    rating: 4.6,
    desc: "Старейшая брассери Парижа у Бастилии. Морепродукты и вид на набережную Сены.",
    specialty: "Устрицы, choucroute",
    link: "https://www.bofingerparis.com",
    area: "Place de la Bastille / Сена",
  },
  {
    name: "Café de l'Homme",
    rating: 4.7,
    desc: "Терраса прямо напротив Эйфелевой башни. Лучший вид на башню во всём Париже.",
    specialty: "Французская кухня, вино",
    link: "https://www.cafedelhomme.com",
    area: "Площадь Трокадеро / Сена",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="Star" size={12} className="text-amber-400 fill-amber-400" />
      ))}
    </span>
  );
}

export default function StaysSection() {
  return (
    <div id="stays" className="bg-white">
      {/* Отели */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="uppercase mb-3 text-xs tracking-widest text-neutral-500">Где остановиться</h3>
          <h2 className="text-3xl lg:text-5xl mb-4 text-neutral-900 leading-tight max-w-xl">
            Лучшие отели Парижа
          </h2>
          <p className="text-neutral-500 text-sm mb-14 max-w-lg">Отобраны по оценкам гостей. Все отели имеют рейтинг выше 9.0 на Booking.com.</p>

          <div className="flex flex-col lg:flex-row gap-0">
            <div className="flex-1 h-[360px] lg:h-auto">
              <img
                src="https://cdn.poehali.dev/projects/20488433-ea94-4c7a-b0ee-fe8b2529b599/files/84a62cc8-a44e-4a0a-99fd-4c7c9a93acbe.jpg"
                alt="Роскошный отель Парижа"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 divide-y divide-neutral-100">
              {hotels.map((h, i) => (
                <div key={i} className="p-6 lg:p-8 hover:bg-neutral-50 transition-colors duration-200">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Stars count={h.stars} />
                        <span className="text-xs bg-neutral-900 text-white px-2 py-0.5 font-semibold">{h.rating}</span>
                      </div>
                      <h4 className="text-base font-bold text-neutral-900">{h.name}</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{h.area}</p>
                    </div>
                    <span className="text-xs text-neutral-500 shrink-0 text-right">{h.price}</span>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-3">{h.desc}</p>
                  <a
                    href={h.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-black border border-black px-3 py-1.5 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Забронировать <Icon name="ExternalLink" size={11} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Кафе */}
      <div id="cafes" className="bg-neutral-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="uppercase mb-3 text-xs tracking-widest text-neutral-500">Кофе и атмосфера</h3>
          <h2 className="text-3xl lg:text-5xl mb-4 text-white leading-tight max-w-xl">
            Кафе с видом на Сену
          </h2>
          <p className="text-neutral-500 text-sm mb-14 max-w-lg">Легендарные парижские кафе с видом на реку и лучшей атмосферой города.</p>

          <div className="flex flex-col lg:flex-row gap-0">
            <div className="flex-1 divide-y divide-neutral-800">
              {cafes.map((c, i) => (
                <div key={i} className="p-6 lg:p-8 hover:bg-neutral-900 transition-colors duration-200">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Icon
                              key={j}
                              name="Star"
                              size={12}
                              className={j < Math.round(c.rating) ? "text-amber-400 fill-amber-400" : "text-neutral-700"}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-neutral-400">{c.rating} / 5</span>
                      </div>
                      <h4 className="text-base font-bold text-white">{c.name}</h4>
                      <p className="text-xs text-neutral-500 mt-0.5">{c.area}</p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-1">{c.desc}</p>
                  <p className="text-xs text-neutral-600 mb-3">☕ {c.specialty}</p>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-white border border-neutral-700 px-3 py-1.5 hover:border-white transition-all duration-300"
                  >
                    Подробнее <Icon name="ArrowRight" size={11} />
                  </a>
                </div>
              ))}
            </div>
            <div className="flex-1 h-[360px] lg:h-auto">
              <img
                src="https://cdn.poehali.dev/projects/20488433-ea94-4c7a-b0ee-fe8b2529b599/files/7e81cefb-16d2-492a-b55f-ba3e813b03ba.jpg"
                alt="Кафе с видом на Сену"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
