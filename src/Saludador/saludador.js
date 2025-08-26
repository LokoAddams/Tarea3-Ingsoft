export function saludar({ name = "", lang = "es", date = new Date() } = {}) {
  const base = lang === "en" ? "Hello" : "Hola";
  if (name && name.trim().length > 0) return lang === "en" ? `Hello, ${name}!` : `¡Hola, ${name}!`;
  return lang === "en" ? "Hello!" : "¡Hola!";
}
