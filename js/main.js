const $ = document;
// modal
const modal = $.querySelector('.modal_cont');
const modalBox = $.querySelector('.modal')
const close = $.querySelector('.fa-xmark');
const input = $.querySelector('#input');
const btnAdd = $.querySelector('.btn_send');

//list
const btnTodo = $.querySelector('.btn_add');
const lists = $.querySelector('.list');
let boxs = $.querySelectorAll('.box');
let index = 0;

//btn add todo
btnTodo.addEventListener('click',()=>{
  modalBox.classList.add('show');
  modal.style.display = 'flex';
  input.focus();
});

//close modal
close.addEventListener('click',()=>{
  modal.style.display = 'none';
});

//enter for add list
input.addEventListener('keyup',(e)=>{
  if(input.value === ''){
    alert('please type todo')
  }
 else if(e.keyCode === 13){
  addItem();
  modal.style.display = 'none';
 }
});


//function for add list
const addItem = ()=>{
  index++;
  let inputValue = input.value;
  let li = document.createElement('li');
  let i = document.createElement('i');
  i.className = 'fa-solid fa-xmark';
  li.textContent = inputValue;
  li.className = 'bg-black px-[10px] rounded-md capitalize flex justify-between items-center gap-[15px] text-white ';
  li.setAttribute('draggable',true);
  
  lists.append(li);
  li.setAttribute('id', 'A'+ index);
  li.append(i);
  input.value = '';
}

// add todo input
btnAdd.addEventListener('click',()=>{
  if(input.value === ''){
    alert('please type todo');
  }
  else{
    addItem();
    modal.style.display = 'none';
  }
});



//drag-start
lists.addEventListener('dragstart',(e)=>{
  e.dataTransfer.setData('el',e.target.id);
});

//remove li in list
lists.addEventListener('click',(e)=>{
  if(e.target.className.includes('fa-solid fa-xmark')){
    let parentValue = e.target.parentElement;
    parentValue.style.display = 'none';
  }
});

//drop
boxs.forEach(value=>{
  value.addEventListener('drop',(e)=>{
    let dataObj = e.dataTransfer.getData('el');
    let addObjC = document.getElementById(dataObj);
    value.append(addObjC);
  })
});

//drag-over
boxs.forEach(value=>{
  value.addEventListener('dragover',(e)=>{
    e.preventDefault();
  })
})