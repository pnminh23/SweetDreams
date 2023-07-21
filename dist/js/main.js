//modal-signUp
var modal = document.querySelector('.modal-signup');
var btn = document.querySelector('.header .nav .right-nav .button');
btn.onclick = function(){
    modal.style.display = "flex";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
//modal-order
var modalorder = document.querySelector('.modal-order');
var btnOrder = document.querySelector('.right-nav svg');
var closeElement = document.querySelector('.modal-order .modal-header .close');
btnOrder.onclick = function(){
  modalorder.style.display = 'flex';
}
window.onclick = function(event) {
  if (event.target == modalorder) {
    modalorder.style.display = "none";
  }
}
closeElement.onclick = function() {
  modalorder.style.display = "none";
}