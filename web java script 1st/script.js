let namsteBtn = document.querySelector('button');
namsteBtn.addEventListener('click',input);
function input(){
    let name = prompt("Enter name of studet");
    namsteBtn.textContent = 'Roll on. 1'+name;
}
