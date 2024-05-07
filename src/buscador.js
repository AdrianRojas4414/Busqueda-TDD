export function buscarProyecto(nombre, proyectos) {
  if(proyectos.length === 0)
    return "";
  if(nombre === proyectos[0])
    return nombre;
}