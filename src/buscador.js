export function buscarProyecto(nombre, proyectos) {
  let matches = [];
  let i = 0;

  if(proyectos.length === 0){
    return "";
  }
  
  do{
    if(proyectos[i] === nombre)
      matches.push(nombre);
    i++;
  }while (i<=proyectos.length)
  return matches;
}