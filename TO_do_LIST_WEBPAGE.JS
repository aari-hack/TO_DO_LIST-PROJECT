let list = document.getElementById('list')

let inputbox = document.getElementById('input_box')

function addtask()
{
    if (inputbox.value === '' ){
        alert('Add Your Task')
    }
    else{
        let Task = document.createElement('li')
        Task.textContent = inputbox.value
        list.appendChild(Task)

        let span = document.createElement('span')
        span.textContent = '\u00d7'
        Task.appendChild(span)
    }
    inputbox.value=''
    savedata()
}
list.addEventListener('click',(el)=>{
    if(el.target.tagName=='LI'){
        el.target.classList.toggle('checked')
        savedata()
    }
    else if(el.target.tagName=='SPAN'){
        el.target.parentElement.remove()
        savedata()
    }
})
function savedata()
{
    localStorage.setItem("Task" , list.innerHTML)
    
}
function showdata()
{
    list.innerHTML = localStorage.getItem('Task')
}
showdata()