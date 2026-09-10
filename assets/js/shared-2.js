
document.addEventListener('click',function(e){var mm=document.getElementById('mm');if(mm&&mm.classList.contains('open')&&!mm.contains(e.target)&&!e.target.closest('.burger'))mm.classList.remove('open');});
function toggle(el){var i=el.parentElement,w=i.classList.contains('open');document.querySelectorAll('.faq-item').forEach(function(x){x.classList.remove('open');});if(!w)i.classList.add('open');}
