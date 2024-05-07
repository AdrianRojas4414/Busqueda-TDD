import { buscarProyecto } from "./buscador.js";

describe("Buscar", () => {
  it("no encuentra proyectos cuando no se tiene una lista de proyectos", () => {
    let proyectos = [];
    expect(buscarProyecto("proyecto1", proyectos)).toEqual("");
  });
  it("encuentra un proyecto cuando el mismo se encuentra en una lista con un solo proyecto", () => {
    let proyectos = [];
    proyectos.push("pro1");
    expect(buscarProyecto("pro1", proyectos)).toEqual("pro1");
  });
});
