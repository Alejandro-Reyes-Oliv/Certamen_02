@extends("layouts.master")

@section("contenido")
    <div class="row mt-2">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-warning text-white" >
                    <span>Filtrar</span>
                </div>
                <div class="card-body">
                    <select class="form-select" id="filtro-cbx">
                        <option value="todos">Todos</option>
                        <!--Agregar los demas options de forma manual o con javascript-->
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-12 col-md-12 col-lg-6 mx-auto">
            <table class="table table-hover table-bordered table-striped table-responsive">
                <thead class="bg-warning">
                    <tr>
                        <td>Fecha</td>
                        <td>Hora</td>
                        <td>Medidor</td>
                        <td>Valor</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody id = "tbody-lectura">

                </tbody>
            </table>
        </div>
    </div>
    
@endsection

@section("javascript")

<script src="{{asset('js/servicios/lecturasServices.js')}}"></script>
<script src="{{asset('js/servicios/tiposServices.js')}}"></script> 
<script src="{{asset('js/home.js')}}"></script>
<script src="{{asset('js/ver_lecturas.js')}}"></script>

@endsection