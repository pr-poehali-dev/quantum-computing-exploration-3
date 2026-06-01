const places = [
  { name: "Эйфелева башня", emoji: "🗼", address: "Champ de Mars, 5 Avenue Anatole France" },
  { name: "Лувр", emoji: "🏛️", address: "Rue de Rivoli, 75001 Paris" },
  { name: "Версаль", emoji: "👑", address: "Place d'Armes, 78000 Versailles" },
  { name: "Монмартр / Сакре-Кёр", emoji: "⛪", address: "35 Rue du Chevalier de la Barre, 75018" },
  { name: "Елисейские поля", emoji: "🌿", address: "Avenue des Champs-Élysées, 75008" },
  { name: "Нотр-Дам де Пари", emoji: "🕍", address: "6 Parvis Notre-Dame, 75004 Paris" },
];

export default function MapSection() {
  return (
    <div id="map" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase mb-3 text-xs tracking-widest text-neutral-500">Ориентиры</h3>
        <h2 className="text-3xl lg:text-5xl mb-14 text-neutral-900 leading-tight max-w-xl">
          Карта Парижа
        </h2>

        <div className="flex flex-col lg:flex-row gap-0 items-stretch">
          {/* Карта */}
          <div className="flex-[2] h-[400px] lg:h-[560px]">
            <iframe
              title="Карта Парижа"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.2764%2C48.8156%2C2.4182%2C48.9022&layer=mapnik&marker=48.8584%2C2.2945"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          {/* Список мест */}
          <div className="flex-1 bg-neutral-950 text-white p-8 lg:p-10 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-8">Популярные места</p>
            <div className="space-y-6">
              {places.map((p, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-neutral-800 pb-5 last:border-0 last:pb-0">
                  <span className="text-xl shrink-0 mt-0.5">{p.emoji}</span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{p.name}</p>
                    <p className="text-neutral-500 text-xs leading-relaxed">{p.address}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://www.openstreetmap.org/#map=13/48.8584/2.2945"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 border border-white text-white text-xs uppercase tracking-widest px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300 w-fit"
            >
              Открыть полную карту
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
