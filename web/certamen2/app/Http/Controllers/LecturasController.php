<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lectura;

class LecturasController extends Controller
{
    public function getTipos(){
        $tipos = array(); 
        $tipos[] = "Kilowatts";
        $tipos[] = "Watts";
        $tipos[] = "Temperatura";
         
        return $tipos;
    }



    public function getLecturas(){
    
        $lectura= Lectura::all();
        return $lectura;
    }

    public function filtrarLecturas(Request $request){
        $input = $request -> all();
        $filtro = $input["filtro"];
        $lectura = Lectura::where("tipo", "=" , $filtro)->get(); 
        return $lectura;
    }

    public function crearLectura(Request $request){
        $input = $request->all();
        $fecha = $input["fecha"];
        $hora = $input["hora"];
        $medidor = $input["medidor"];
        $direccion = $input["direccion"];
        $valor = $input["valor"];
        $tipo = $input["tipo"]; 

        $lectura = new Lectura(); 
        $lectura->fecha = fecha;
        $lectura->hora = $hora;
        $lectura->medidor = $medidor;
        $lectura->direccion = $direccion;
        $lectura->valor = $valor;
        $lectura->tipo = $tipo;
        $lectura->save();
        return $lectura;


    }

    public function actualizarLectura(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $lectura = Lectura::findOrFail($id); 
        $lectura->fecha = $input["fecha"];
        $lectura->hora = $input["hora"];
        $lectura->medidor = $input["medidor"];
        $lectura->direccion= $input["direccion"];
        $lectura->valor = $input["valor"];
        $lectura->tipo = $input["tipo"];

        $lectura->save();
        return $consola;
    }
    public function eliminarLectura(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $lectura = Lectura::findOrFail($id); 
        $lectura->delete(); 

        return "Eliminado";


    }
}
