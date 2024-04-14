const form=document.querySelector("#form");
const inputtask=document.querySelector("#inputtask");
const whole=document.querySelector(".whole");

form.addEventListener('submit',(e)=>{
  e.preventDefault();
const inputvalue=inputtask.value.trim()

if(!inputvalue){
    alert("please enter a valid input");
    return false;
}


const task=document.createElement('div');
task.classList.add("task");

const  content=document.createElement('div');
content.classList.add("content");

 const input_task=document.createElement('input')
 input_task.classList.add("text");
 input_task.setAttribute("readonly","readonly");
 input_task.classList.add("form-control");
 input_task.classList.add("mt-3");
 input_task.value=inputvalue;
 input_task.type="text";


 content.appendChild(input_task);
 task.appendChild(content);
 whole.appendChild(task);

 const action=document.createElement('div');
 action.classList.add("action");
 

 const button1=document.createElement('button');
//  button1.classList.add("button1");
 button1.classList.add("btn");
 button1.classList.add("btn-secondary");
 button1.innerHTML="Edit"
 button1.classList.add("mt-2");

 action.appendChild(button1);
 task.appendChild(action);

 const button2=document.createElement('button2');
 button2.classList.add("btn");
 button2.classList.add("btn-danger");
 button2.classList.add("mt-2");
 button2.classList.add("mx-2");
 button2.innerHTML="Delete"

 action.appendChild(button2);
 task.appendChild(action);

 inputtask.value=""


//  Editing......

 button1.addEventListener('click',()=>{

 if(button1.innerHTML == "Edit"){  
   input_task.removeAttribute("readonly");
   button1.innerHTML="save"
   input_task.focus();
 }else{
  input_task.setAttribute("readonly","readonly");
  button1.innerHTML="Edit"
 }
  
 })

// deleting.....

  button2.addEventListener('click',()=>{
    whole.removeChild(task)
  })




})
