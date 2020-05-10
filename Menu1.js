$(document).ready(function () {
	$('.nav a[href^="#"]').click(function () {//Выбрать ссылки из меню
		var offset = $('.nav').innerHeight();//Высота меню, получаем динамически
		var target = $(this).attr('href');//Сохраняем значение атрибута href
		$('html, body').animate({
			scrollTop: $(target).offset().top - offset//Вычесть высоту меню
		}, 500);//Время анимации
		$('.nav a[href^="#"]').removeClass('active');//Удалить класс active у всех пунктов меню
		$(this).addClass('active');//Добавить класс active активной ссылке
		return false;
	});
});
