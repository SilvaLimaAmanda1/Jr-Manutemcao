//Botão do menu abre e fecha

const menuBtn = document.getElementById('menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', ()=>{
	navigation.classList.toggle('active');
	//Muda para o ícone de 'hambúrger' para 'X' quando aberto
	const icon = menuBtn.querySelector('i');
	icon.classList.toggle('ri-menu-2-line');
	icon.classList.toggle('ri-close-line');
});
//Fechar o menu ao clicar em qualquer link
document.querySelectorAll('.navigation a').forEach(link=>{
	link.addEventListener('click',()=>{
		navigation.classList.remove('active');
		menuBtn.querySelector('i').classList.replace('ri-close-line', 'ri-menu-2-line');
	});
});





