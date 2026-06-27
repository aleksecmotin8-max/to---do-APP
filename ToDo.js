let tasks = [];
const all = document.createElement('div');
const initialDiv = document.createElement('div');
const  changetDiv = document.createElement('div');
const input = document.createElement('input');
const buttonAdd = document.createElement('button');
buttonAdd.textContent = 'Add';
const startProgramRender = () => {
    document.body.appendChild(all);
    all.appendChild(initialDiv);
    all.appendChild(changetDiv);
    initialDiv.appendChild(input);
    initialDiv.appendChild(buttonAdd);    
}  
const AddTask =() =>{
    let normalInput = input.value.trim('')
    if (normalInput!==''){
        tasks.push (normalInput);
        input.value = '';
        renderTasks();
    }
}
const renderTasks = () => {
    changetDiv.innerHTML = '';
    tasks.forEach((currentTask, index) => {
        const miniDiv = document.createElement('div');
        const p = document.createElement('p');
        const buttonRemove = document.createElement('button');
        p.textContent = currentTask;
        buttonRemove.textContent = 'Remove';
        buttonRemove.addEventListener('click',()=>{
          tasks.splice(index,1);
          renderTasks();     
    })
    miniDiv.appendChild(p);
        miniDiv.appendChild(buttonRemove);
        changetDiv.appendChild(miniDiv)
    })
    buttonAdd.addEventListener('click',()=>{
     AddTask()
    })
    input.addEventListener('keydown',(event)=>{
        if (event.key ==='Enter'){
            AddTask()
        }
    })
};
startProgramRender();
renderTasks()
