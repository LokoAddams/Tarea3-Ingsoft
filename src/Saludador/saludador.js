function tramo(h) {
  if (h >= 5 && h <= 11) return "morning";
  if (h >= 12 && h <= 18) return "afternoon";
  return "evening";
}

function tratoPorGenero(g, lang="es") {
  if (lang === "en") return g === "M" ? "Mr." : g === "F" ? "Ms." : "";
  return g === "M" ? "señor" : g === "F" ? "señora" : "";
}

function tratoFormal(gender, lang="es") {
  if (!gender) return lang === "en" ? "Dear" : "Estimad@";
  if (lang === "en") return gender === "M" ? "Mr." : gender === "X" ? "Dear" : "Ms.";
  return gender === "M" ? "Sr." : gender === "X" ? "Estimad@" : "Sra.";
}

export function saludar({ name="", gender="", age=null, lang="es", date=new Date() } = {}) {
  const h = date.getHours();
  const L = { es:{morning:"Buenos días",afternoon:"Buenas tardes",evening:"Buenas noches"}, en:{morning:"Good morning",afternoon:"Good afternoon",evening:"Good evening"} }[lang];
  const cabeza = L[tramo(h)];

  if (!name) return `${cabeza}!`;

  let prefijo = "";
  if (age != null && Number(age) > 30) {
    // formal por edad; si no hay gender, asume neutro razonable
    prefijo = tratoFormal(gender, lang); // (elige "F" por defecto o maneja sin género)
  } else if (gender) {
    // trato coloquial por género (del paso 4)
    prefijo = tratoPorGenero(gender, lang);
  }

  if (prefijo) return lang === "en" ? `${cabeza}, ${prefijo} ${name}!` : `${cabeza}, ${prefijo} ${name}!`;
  return `${cabeza}, ${name}!`;
}


