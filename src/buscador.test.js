import { buscarProyecto } from "./buscador.js";

describe("Buscar", () => {
  it("no encuentra proyectos cuando no se tiene una lista de proyectos", () => {
    let proyectos = [];
    expect(buscarProyecto("proyecto1", proyectos)).toEqual("");
  });
});
