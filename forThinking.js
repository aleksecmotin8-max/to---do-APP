//primitieves copy like value 
let a = 100;
let b = a;
b = 99;
console.log('a:',a);
console.log ('b:',b)
//obects copy like link
let task1 = {text:'learn JS',done :false};
let task2 = task1;
task2.done = true;
console.log(task1);
console.log( task2)
let tasks = [{
    text:'jopa',done:false
},{
    text:'dolbyob?',done:true
},{
    text:'pupupup',done:true
}]
let filtered = tasks.filter((item)=>{
  return item.text.includes('o');
})
filtered[0].done = true;
console.log(tasks)
let users = [
    {name:'bob'},
    {name:'alex'},
    {name:'tom'}
];
let filtered = tasks.filter((item)=>{
    return item.name !== currentText;
})
//if current button it iteration eventing like alec |remove| вернется только 
// боб и том и можно присвоить фльтеред к основному массиву и тогда алекс исчезнет нахуй отовсюду