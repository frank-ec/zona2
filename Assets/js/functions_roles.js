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
    })
});

function openModal(){
	$('#modalFormRol').modal('show');
}



