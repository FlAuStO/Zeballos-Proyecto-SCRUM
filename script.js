// Comparador de Metodologías
function compararMetodologias() {
  const tabla = 
    <table border="1"  cellpadding="10">
      <tr><th>Característica</th><th>Scrum</th><th>Cascada</th></tr>
      <tr><td>Flexibilidad</td><td>Alta</td><td>Baja</td></tr>
      <tr><td>Documentación</td><td>Mínima</td><td>Extensa</td></tr>
      <tr><td>Adaptabilidad</td><td>Alta</td><td>Baja</td></tr>
    </table>
  ;
  document.getElementById("tablaComparacion").innerHTML = tabla;
}

// Encuesta de Preferencias
function hacerEncuesta() {
  let respuesta = prompt("¿Tu proyecto tiene requisitos cambiantes? (si/no)");
  let sugerencia = (respuesta.toLowerCase() === "si") ? "Scrum o Kanban" : "Modelo en Cascada";
  document.getElementById("resultadoEncuesta").innerHTML = 
    <p>Recomendación: <strong>${sugerencia}</strong></p>;
}
