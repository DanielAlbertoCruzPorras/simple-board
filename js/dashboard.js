/*
import {findAllStudent} from "./students.js";
import {findAllCourse} from "./course.js";
import {findAllPayments} from "./payments.js";
import {findAllUsers} from "./user.js";
*/

// A pesar de que mantengo todo en un solo archivo prefiero dejarlos como funciones 
// para en cualquier momento hacer reutilización de código

// Funciones para obtener datos del localStorage en su forma "común"
/*
const findAllStudent = () => {
    return localStorage.getItem("students") || 0;
};

const findAllCourse = () => {
    return localStorage.getItem("course") || 0;
};

const findAllPayments = () => {
    return JSON.parse(localStorage.getItem("payment")) || { format: "COP", total: 0 };
};

const findAllUsers = () => {
    return localStorage.getItem("users") || 0;
};
*/

// Funciones para obtener datos del localStorage en su forma de función flecha
export const findAllStudent = () => localStorage.getItem("students") || 0;

export const findAllCourse = () => localStorage.getItem("course") || 0;

export const findAllPayments = () => JSON.parse(localStorage.getItem("payment")) || { format: "COP", total: 0 };

export const findAllUsers = () => localStorage.getItem("users") || 0;

// Función para actualizar el dashboard
export const updateDashboard = () => {
    const students = document.querySelector("#students > strong");
    const course = document.querySelector("#course > strong");
    const payment = document.querySelector("#payment > strong");
    const user = document.querySelector("#user > strong");

    if (students) students.innerHTML = findAllStudent();
    if (course) course.innerHTML = findAllCourse();
    if (user) user.innerHTML = findAllUsers();

    const money = findAllPayments();
    if (payment) {
        payment.dataset.format = money.format;
        payment.innerHTML = money.total;
    }
};

// Ejecutar la actualización cuando el DOM esté listo
updateDashboard();
