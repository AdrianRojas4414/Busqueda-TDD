export function buscarProyecto(nombre, proyectos) {
  if(proyectos.length === 0){
    return "";
  }

  for(let i = 0; proyectos.length; i++){
    if(proyectos[i] === nombre)
      return proyectos[i];
  }
}