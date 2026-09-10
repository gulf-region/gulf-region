
document.addEventListener('click',function(e){var mm=document.getElementById('mm');if(mm&&mm.classList.contains('open')&&!mm.contains(e.target)&&!e.target.closest('.burger'))mm.classList.remove('open');});
function toggle(el){var item=el.parentElement;var was=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));if(!was)item.classList.add('open');}
