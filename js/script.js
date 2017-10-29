$(document).ready(function(){
	var menu_active = 0;
	//Cuando el DOM carga completamente se activa todo lo dentro.
	if(menu_active==0){		
		console.log("abriendo  funcion - activo:"+ menu_active);
		$( ".navbar-toggle" ).click(function() {
			console.log("abriendo menu- activo:"+ menu_active);
			$("#menu_xs").addClass( "menu_xs_2" );
			$(".navbar-toggle").addClass( "btn_menu" );
			menu_active=1;
			console.log("abrir menu- activo:"+ menu_active);
		});
	}
	else{
		$( ".navbar-toggle" ).click(function() {
			console.log("cerrar menu- activo:"+ menu_active);
			//$("#menu_xs").removeClass( "menu_xs_2" );
			//$(".navbar-toggle").removeClass( "btn_menu" );
			//console.log("cerrar menu");	
			//menu_active=0;
		});
	}
});