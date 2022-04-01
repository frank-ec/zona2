var tableRoles;

document.addEventListener('DOMContentLoaded', function(){

	tableRoles = $('#tableRoles').dataTable( {  // Aqui la referencia a la tabla
		"aProcessing":true,
		"aServerSide":true,
        "language": {
        	"url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json"
        },
        "ajax":{
            "url": " "+base_url+"/Roles/getRoles", // Controlador Roles
            "dataSrc":""
        },
        "columns":[
            {"data":"idrol"},
            {"data":"nombrerol"},
            {"data":"descripcion"},
            {"data":"status"},
            {"data":"options"},
          
        ],
        "resonsieve":"true",
        "bDestroy": true,
        "iDisplayLength": 10, // Mostrar 10 registros
        "order":[[0,"desc"]]  
    });

    // Nuevo rol
    var formRol = document.querySelector("#formRol");
    formRol.onsubmit = function(e){
        e.preventDefault();
        // Capturar valores de formulario
        var strNombre = document.querySelector('#txtNombre').value;
        var strDescripcion = document.querySelector('#txtDescripcion').value;
        var intStatus = document.querySelector('#listStatus').value;
            if(strNombre == '' || strDescripcion == '' || intStatus == ''){
                swal("Atencion", "Todos los campos son obligatorios", "error");
                return false;
            }
        // Validacion para navegadores y envio de datos por Ajax
        var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        var ajaxUrl = base_url+'/Roles/setRol';  // Envia al metodo
        var formData = new FormData(formRol) ;
        request.open("POST",ajaxUrl,true);
        request.send(formData);
        request.onreadystatechange = function(){
            if(request.readyState == 4 && request.status == 200){
                console.log(request.responseText);
            }
        }
    }
});

function openModal(){
	$('#modalFormRol').modal('show');
}



