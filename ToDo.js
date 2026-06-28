let tasks = [];
let nextId = 1;
const all = document.createElement('div');
const initialDiv = document.createElement('div');
const  changetDiv = document.createElement('div');
const input = document.createElement('input');
const buttonAdd = document.createElement('button');
const inputSearch = document.createElement('input');
buttonAdd.textContent = 'Add';
const startProgramRender = () => {
    document.body.appendChild(all);
    all.appendChild(initialDiv);
    all.appendChild(changetDiv);
    initialDiv.appendChild(input);
    initialDiv.appendChild(buttonAdd);    
    initialDiv.appendChild(inputSearch );
}  
const addTask =() =>{
    let normalInput = input.value.trim()
    if (normalInput!==''){
        tasks.push ({text:normalInput,done:false,id:nextId});
        nextId++;
        input.value = '';
      renderCurrentView();
    }
}
const renderCurrentView =() =>{
    let query = inputSearch.value.toLowerCase();
    let filtered = tasks.filter((item)=>{
        return item.text.toLowerCase().includes(query)
    });
    renderTasks(filtered)
}
const renderTasks = (arr) => {
    changetDiv.innerHTML = '';
    arr.forEach((currentTask, index) => {
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
          renderCurrentView()
        });
        buttonRemove.addEventListener('click',()=>{
         tasks = tasks.filter((item)=>{
         return item.id !== currentTask.id;
         }) ;
         renderCurrentView();
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
    inputSearch.addEventListener('input',()=>{
      renderCurrentView();
    })
startProgramRender();
renderCurrentView()
