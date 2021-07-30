
const cargartipos = async ()=>{
    let filtroCbx = document.querySelector("#filtro-cbx");
    let tipos = await getTipos();
    tipos.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        option.value = m;
        filtroCbx.appendChild(option);
    });
};

const iniciarEliminacion = async function(){ 
    let id = this.id;
    let resp = await Swal.fire({title:"¿Esta usted seguro?", 
    text:"Esta operacion no se puede revertir", 
    icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarLectura(id)){
            let lecturas= await getLecturas();
            cargarTabla(lecturas);
            Swal.fire("Lectura Eliminada", "Lectura eliminada exitosamente", "info");
        }else{
            Swal.fire("Error en eliminacion", "No se pudo atender la solicitud", "error");
        }
    }else{
        Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    };
};

const cargarTabla = (lecturas)=>{
    
    let tbody = document.querySelector("#tbody-lectura");
    tbody.innerHTML = "";
    
    for(let i = 0; i < lecturas.length;++i){
        
        let tr = document.createElement("tr");
    
        let tdfecha = document.createElement("td"); 
        tdfecha.innerText = lecturas[i].fecha; 
        let tdhora = document.createElement("td");
        tdhora.innerText = lecturas[i].hora;
        let tdmedidor = document.createElement("td");
        tdmedidor.innerText = lecturas[i].medidor;
        let tddireccion = document.createElement("td");
        tddireccion.innerText = lecturas[i].direccion;
        let tdvalor = document.createElement("td");
        tdvalor.innerText = lecturas[i].valor;
        let tdtipo = document.createElement("td");
        tdtipo.innerText = lecturas[i].tipo;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.id = lecturas[i].id; 
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);

        tr.appendChild(tddecha);
        tr.appendChild(tdhora);
        tr.appendChild(tdmedidor);
        tr.appendChild(tddireccion);
        tr.appendChild(tdvalor);
        tr.appendChild(tdtipo);
        tr.appendChild(tdAcciones);
 
        tbody.appendChild(tr);

    
    };
};

document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let lecturas = await getLecturas(filtro);
    cargarTabla(lecturas);
});

document.addEventListener("DOMContentLoaded", async ()=>{  
    await cargarTipos();
    let lecturas = await getLecturas();
    cargarTabla(lecturas);
});
