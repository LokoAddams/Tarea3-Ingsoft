function tramo(h) {
  if (h >= 5 && h <= 11) return "morning";
  if (h >= 12 && h <= 18) return "afternoon";
  return "evening";
}

function tratoPorGenero(g, lang="es") {
  if (lang === "en") return g === "M" ? "Mr." : g === "F" ? "Ms." : "";
  return g === "M" ? "señor" : g === "F" ? "señora" : "";
}

export function saludar({ name = "", gender = "", lang = "es", date = new Date() } = {}) {
  const h = date.getHours();
  const slot = tramo(h);
  const L = {
    es: { morning: "Buenos días", afternoon: "Buenas tardes", evening: "Buenas noches" },
    en: { morning: "Good morning", afternoon: "Good afternoon", evening: "Good evening" },
  }[lang || "es"];
  const cabeza = L[slot];

  if (name) {
    const trato = tratoPorGenero(gender, lang);
    if (lang === "en") return trato ? `${cabeza}, ${trato} ${name}!` : `${cabeza}, ${name}!`;
    return trato ? `${cabeza}, ${trato} ${name}!` : `${cabeza}, ${name}!`;
  }
  return `${cabeza}!`;
}

