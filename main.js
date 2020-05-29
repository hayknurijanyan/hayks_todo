const addButton = document.getElementById("add-button");
 const input = document.getElementById("todo-name");
 addButton.onclick = onAddButtonClick;
input.addEventListener('keydown',onInputKeyDown); // keyboard
const ul = document.getElementById('ul');
const li = document.getElementById('item');

function onInputKeyDown (e) {
	if (e.which ===13) {
		onAddButtonClick()
	}
}


function onAddButtonClick(e) {
 	const todoName = input.value;
 	input.value= "";
 	if (!todoName) {
 		alert ("Please enter your task");
 		return
 	}
 	const newlist = document.createElement('li')
 	newlist.classList.add('item')
 	const task = document.createElement('div')
 	task.classList.add('item_input')
 	const check = document.createElement('button')
 	check.classList.add('done')
 	check.innerHTML = '<i class="fa fa-check">'
 	check.addEventListener('click',onCheckBtnClick)
 	const remove = document.createElement('button')
 	remove.classList.add('remove')
 	remove.innerHTML = '<i class="fa fa-trash"></i>'
 	remove.addEventListener('click',onRemoveBtnClick)

 	ul.prepend(newlist)
 	newlist.appendChild(task)
 	task.append(todoName)
 	newlist.appendChild(check)
 	newlist.appendChild(remove)

 }

 function onCheckBtnClick (event){
 	const currentLi = event.target.closest('.item');
    currentLi.classList.toggle('checked')
}

 function onRemoveBtnClick (event){
 	const currentLi = event.target.closest('.item');
    currentLi.classList.toggle('removed')
}