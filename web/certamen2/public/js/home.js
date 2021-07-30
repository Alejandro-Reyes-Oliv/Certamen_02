const cargarTipos = async()=>{
    let tipos = await getTipos();
    let tiposSelect = document.querySelector("#tipo-select");
    tipos.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        tiposSelect.appendChild(option);
    });
};

document.addEventListener("DOMContentLoaded", ()=>{
    cargarTipos();
});

document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let fecha = document.querySelector("#fecha-txt").value.trim();
    let hora = document.querySelector("#hora-txt").value.trim();
    let medidor = document.querySelector("#medidor-select").value.trim();
    let direccion = document.querySelector("#direccion-txt").value.trim();
    let valor = document.querySelector("#valor-txt").value.trim();
    let tipo = document.querySelector("#tipo-select").value.trim();

    let errores = [];
    if(hora === "" || (hora.charAt(2)!=':' || hora.length!=5)){ 
        errores.push("Debe ingresar una hora valida");
    }else{
        let lecturas = await getLecturas(); 
    
    };

    if(errores.length == 0){


        let lectura ={};
        lectura.fecha = fecha;
        lectura.hora = hora;
        lectura.medidor = medidor;
        lectura.direccion = direccion;
        lectura.valor = valor;
        lectura.tipo = tipo;

        let res = await crearLectura(lectura); 

        await Swal.fire("Lectura Creada", "Lectura creada exitosamente", "info");

        window.location.href = "ver_lecturas";

    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    };


});