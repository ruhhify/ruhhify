var hbg=document.getElementById('hamburger');
var drw=document.getElementById('navDrawer');

function closeDrawer(){
  hbg.classList.remove('open');
  drw.classList.remove('open');
  drw.style.visibility='hidden';
  drw.style.pointerEvents='none';
  document.body.style.overflow='';
}
function openDrawer(){
  hbg.classList.add('open');
  drw.classList.add('open');
  drw.style.visibility='visible';
  drw.style.pointerEvents='all';
  document.body.style.overflow='hidden';
}
hbg.addEventListener('click',function(e){
  e.stopPropagation();
  drw.classList.contains('open') ? closeDrawer() : openDrawer();
});
hbg.addEventListener('touchstart',function(e){
  e.preventDefault();
  e.stopPropagation();
  drw.classList.contains('open') ? closeDrawer() : openDrawer();
},{passive:false});
