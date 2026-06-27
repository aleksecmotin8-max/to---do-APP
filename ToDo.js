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
const addTask =() =>{
    let normalInput = input.value.trim()
    if (normalInput!==''){
        tasks.push ({text:normalInput,done:false});
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
        const buttonDone = document.createElement('button')
        p.textContent = currentTask.text;
        if (currentTask.done){
            p.style.textDecoration = 'line-through'
        }
        buttonRemove.textContent = 'Remove';
        buttonDone.textContent = currentTask.done ? 'cansel' : 'done'
        buttonDone.addEventListener('click',()=>{
            currentTask.done = !currentTask.done; 
          renderTasks()
        });
        buttonRemove.addEventListener('click',()=>{
          tasks.splice(index,1);
          renderTasks();     
    })
    miniDiv.appendChild(p);
        miniDiv.appendChild(buttonRemove);
        miniDiv.appendChild(buttonDone);
        changetDiv.appendChild(miniDiv)
    })
};
 buttonAdd.addEventListener('click',()=>{
     addTask()
    })
    input.addEventListener('keydown',(event)=>{
        if (event.key ==='Enter'){
            addTask()
        }
    })
startProgramRender();
renderTasks()
