import { buscarProyecto } from "./buscador.js";

describe("Buscar", () => {
  it("no encuentra proyectos cuando no se tiene una lista de proyectos", () => {
    let proyectos = [];
    expect(buscarProyecto("proyecto1", proyectos)).toEqual("");
  });
  it("encuentra un proyecto cuando el mismo se encuentra en una lista con un solo proyecto", () => {
    let proyectos = [];
    proyectos.push("pro1");
    expect(buscarProyecto("pro1", proyectos)).toEqual(["pro1"]);
  });
  it("encuentra un proyecto cuando el mismo se encuentra en una lista con varios proyectos", () => {
    let proyectos = [];
    proyectos.push("pro1");
    proyectos.push("pro2");
    proyectos.push("pro3");
    proyectos.push("pro4");
    expect(buscarProyecto("pro3", proyectos)).toEqual(["pro3"]);
  });
  it("encuentra mas de un proyecto cuando se encuentran en una lista con varios proyectos", () => {
    let proyectos = [];
    proyectos.push("pro1");
    proyectos.push("pro2");
    proyectos.push("pro3");
    proyectos.push("pro2");
    proyectos.push("pro5");
    expect(buscarProyecto("pro2", proyectos)).toEqual(["pro2","pro2"]);
  });
  it("encuentra mas de un proyecto cuando lo escrito coincide con la primera parte de varios proyectos en una lista", () => {
    let proyectos = [];
    proyectos.push("pro1");
    proyectos.push("ecuaciones");
    proyectos.push("pro3");
    proyectos.push("temor");
    proyectos.push("pro5");
    expect(buscarProyecto("pr", proyectos)).toEqual(["pro1","pro3","pro5"]);
  });
});
