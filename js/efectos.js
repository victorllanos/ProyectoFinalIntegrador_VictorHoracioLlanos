$(document).ready(function(){

// Scroll Elementos Menu
	//var acercaDe = $('#acerca-de').offset().top;
	var trabajo = $('#trabajo').offset().top;
	var contacto = $('#contacto').offset().top;
		

// Boton Acerca de
	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 500
		}, 600);
	});

	$('#btn-trabajo').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: trabajo - 40
		});
	});

	$('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto - 40
		});
	});

	


});