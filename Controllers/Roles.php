<?php 
	class Roles extends Controllers{
		public function __construct()
		{
			parent::__construct();
		}

		public function Roles()
		{
			$data['page_id'] = 3;
			$data['page_tag'] = "Roles Usuario";
			$data['page_name'] = "rol_usuario";
			$data['page_title'] = "Roles Usuario <small> Aplicaciones</small>";
			$this->views->getView($this,"roles",$data);
		}

		public function getRoles()
		{
			$arrData = $this->model->selectRoles();
			//dep($arrData);
			echo json_encode($arrData,JSON_UNESCAPED_UNICODE);
			die();
		}
	}
 ?>
