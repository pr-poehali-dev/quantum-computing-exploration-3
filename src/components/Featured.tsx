export default function Featured() {
  const routes = [
    {
      name: "Южный маршрут",
      description: "Самый популярный. Подъём на канатной дороге до 3 847 м, далее на ратраке до скал Пастухова. Финальный штурм занимает 6–10 часов.",
      difficulty: "Средний",
      duration: "2–3 дня",
    },
    {
      name: "Северный маршрут",
      description: "Дикий и малолюдный. Заброска от Джилы-Су, набор высоты пешком. Подходит для опытных альпинистов, желающих уединения.",
      difficulty: "Сложный",
      duration: "4–5 дней",
    },
    {
      name: "Как добраться",
      description: "Ближайший аэропорт — Минеральные Воды (МРВ). Далее 2,5 часа на машине до посёлка Терскол. Маршрутки и трансферы доступны ежедневно.",
      difficulty: "Легко",
      duration: "≈ 2,5 ч от МРВ",
    },
  ];

  return (
    <div id="routes" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500">Маршруты и логистика</h3>
        <h2 className="text-3xl lg:text-5xl mb-16 text-neutral-900 leading-tight max-w-2xl">
          Два пути к вершине — и один верный способ добраться
        </h2>

        <div className="flex flex-col lg:flex-row gap-0 mb-20">
          <div className="flex-1 h-[400px] lg:h-[600px]">
            <img
              src="https://cdn.poehali.dev/projects/20488433-ea94-4c7a-b0ee-fe8b2529b599/files/44dd02bf-3c8b-4c2e-bb37-e8621301f317.jpg"
              alt="Маршрут на Эльбрус"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 bg-neutral-950 text-white flex flex-col justify-center p-10 lg:p-16">
            <div className="space-y-10">
              {routes.map((route, i) => (
                <div key={i} className="border-b border-neutral-800 pb-8 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold">{route.name}</h4>
                    <span className="text-xs uppercase tracking-widest text-neutral-500 ml-4 shrink-0">{route.duration}</span>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-3">{route.description}</p>
                  <span className="text-xs uppercase tracking-widest text-neutral-500">Сложность: {route.difficulty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
