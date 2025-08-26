function tramo(h) {
  if (h >= 5 && h <= 11) return "morning";
  if (h >= 12 && h <= 18) return "afternoon";
  return "evening";
}

export function saludar({ name = "", lang = "es", date = new Date() } = {}) {
  const h = date.getHours();
  const slot = tramo(h);
  const parts = {
    es: { morning: "Buenos días", afternoon: "Buenas tardes", evening: "Buenas noches", hello: "Hola" },
    en: { morning: "Good morning", afternoon: "Good afternoon", evening: "Good evening", hello: "Hello" },
  }[lang || "es"];

  const cabeza = parts[slot] || parts.hello;
  return name ? `${cabeza}, ${lang === "en" ? name : name}!` : `${cabeza}!`;
}
