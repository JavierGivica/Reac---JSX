
//====================================================================================================
//VALIDACIONES
//====================================================================================================
// 1. Esperamos a que el formulario se intente enviar
const miFormulario = document.forms["registro"];

miFormulario.onsubmit = function (event) {
    // Detenemos el envío automático para validar primero
    event.preventDefault();
    // 2. Definimos los patrones (RegExp) para cada caso real
    const patronNombre = /^[A-Z][a-z]{2,14}$/; // Empieza por Mayúscula, seguido de 2 a 14 minúsculas
    const patronDNI = /^\d{8}[A-Z]$/;          // 8 números y una letra mayúscula al final
    const patronTelefono = /^[679]\d{8}$/;     // Empieza por 6, 7 o 9 y tiene 8 dígitos más (total 9)
    const patronEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Estructura estándar de email
    // 3. Capturamos los valores del formulario
    let nombre = miFormulario.elements["nombre"].value;
    let dni = miFormulario.elements["dni"].value;
    let tel = miFormulario.elements["telefono"].value;
    let email = miFormulario.elements["email"].value;

    let errores = [];
    // 4. Validamos cada campo
    if (!patronNombre.test(nombre)) {
        errores.push("El nombre debe empezar por mayúscula (ej: Juan).");
    }

    if (!patronDNI.test(dni)) {
        errores.push("El DNI debe tener 8 números y una letra mayúscula.");
    }

    if (!patronTelefono.test(tel)) {
        errores.push("El teléfono debe ser español (9 dígitos y empezar por 6, 7 o 9).");
    }

    if (!patronEmail.test(email)) {
        errores.push("El formato del correo electrónico no es válido.");
    }
    // 5. Decidimos si enviamos o mostramos errores
    if (errores.length === 0) {
        alert("¡Validación correcta! Enviando formulario...");
        this.submit(); // Enviamos el formulario manualmente
    } else {
        alert("Errores detectados:\n- " + errores.join("\n- "));
    }
};
//====================================================================================================
// CREAR MAPA
//====================================================================================================
// 1. Creamos el Mapa
let accesosEmpresa = new Map();

// 2. Definimos ejemplos reales (Objetos como llaves)
let empleado1 = { id: "EMP01", nombre: "Ana", departamento: "IT" };
let empleado2 = { id: "EMP02", nombre: "Marcos", departamento: "Ventas" };
let empleado3 = { id: "EMP03", nombre: "Lucia", departamento: "RRHH" };

// 3. Asignamos valores (Nivel de acceso)
accesosEmpresa.set(empleado1, "Nivel_Total");
accesosEmpresa.set(empleado2, "Nivel_Limitado");
accesosEmpresa.set(empleado3, "Nivel_Total");

// --- OPERACIONES QUE TE PEDIRÁN EN EL EXAMEN ---

// A. Comprobar si un empleado tiene acceso
if (accesosEmpresa.has(empleado1)) {
    console.log("El empleado " + empleado1.nombre + " está registrado.");
}
// B. Obtener el permiso de alguien específico
let permiso = accesosEmpresa.get(empleado2); // "Nivel_Limitado"
// C. Borrar a alguien (Despido o baja)
accesosEmpresa.delete(empleado3);
// D. Saber cuánta gente hay registrada ahora
console.log("Total registrados: " + accesosEmpresa.size); // Devuelve 2
//====================================================================================================
// RECORRER EL MAPA
//====================================================================================================
// 1. Ver solo los nombres de los empleados (Llaves)
console.log("LISTADO DE EMPLEADOS:");
for (let empleado of accesosEmpresa.keys()) {
    console.log("- " + empleado.nombre + " [" + empleado.id + "]");
}
// 2. Ver solo los niveles de permiso (Valores)
console.log("NIVELES DE ACCESO:");
for (let nivel of accesosEmpresa.values()) {
    console.log("- " + nivel);
}
// 3. Ver la relación completa (Llave y Valor juntos)
console.log("LISTA COMPLETA (EMPLEADO -> PERMISO):");
for (let [empleado, permiso] of accesosEmpresa.entries()) {
    console.log(empleado.nombre + " tiene permiso: " + permiso);
}