
document.addEventListener('click',function(e){
  var mm=document.getElementById('mm');
  if(mm&&mm.classList.contains('open')&&!mm.contains(e.target)&&!document.querySelector('.burger').contains(e.target))mm.classList.remove('open');
});
