import { TareasManager } from "./tareasManager.js";

const boton_agregar = document.getElementById("add-btn");
const lista_tareas = document.querySelector(".list");
const boton_limpiar = document.querySelector(".cleanBtn");

const tareaManager = new TareasManager(lista_tareas);

//  Iniciamos la app Web
tareaManager.inicializarContador();
tareaManager.listarTareas();

boton_agregar.addEventListener("click", () => {
  tareaManager.agregarTarea("");
});

boton_limpiar.addEventListener("click", () => {
  tareaManager.limpiarTodo();
});

lista_tareas.addEventListener("click", (event) => {
  const target = event.target;

  if (target.type === "submit") {
    tareaManager.eliminarTarea(target.parentElement.id);
  }
});

lista_tareas.addEventListener("keypress", (event) => {
  const target = event.target;
  if (event.keyCode === 13) {
    tareaManager.editarTarea(target.parentElement.id, target.value);
  }
});
