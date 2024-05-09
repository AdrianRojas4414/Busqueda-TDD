export function buscarProyecto(nombre, proyectos) {
  let matches = [];
  let i = 0;

  if(proyectos.length === 0){
    return "";
  }

  for(const pro of proyectos){
    if(pro.startsWith(nombre))
      matches.push(pro);
  }
  return matches;
}