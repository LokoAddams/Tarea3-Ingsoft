// src/saludador.js
export function saludar({ name = "", gender = "", age = null, lang = "es", date = new Date() } = {}) {
  // Sólo placeholder al inicio; se irá enriqueciendo en cada paso.
  return lang === "en" ? "Hello!" : "¡Hola!";
}
