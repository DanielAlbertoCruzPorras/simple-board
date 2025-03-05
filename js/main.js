import { findDataByForm } from "./formSignIn.js";

const form_login = document.querySelector("#form_login");
const dialog_login = document.querySelector("#dialog_login");
const dialog_login_close = document.querySelector("#dialog_login_close");

form_login.addEventListener("submit", findDataByForm); // Al dar click al botón del formulario se ejecuta la función findDataByForm
dialog_login_close.addEventListener("click", () => dialog_login.close()); // Al dar click al icono '×' del dialogo lo cierra
