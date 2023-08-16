let input = document.querySelector("#main-input");
let btn = document.querySelector("#add-btn");
let data = document.querySelector(".data");


 

btn.addEventListener("click",()=>{
    // alert(input.value);

    if(input.value == ""){
        alert("enter a task! BSDK");
    } else {
     
    let task = document.createElement("div");
    let delbtn = document.createElement("button");

    task.classList.add("task");
    task.innerText = input.value;

    delbtn.classList.add("deletebtn");
    delbtn.innerText = "X";
    
    
    task.appendChild(delbtn);

    data.append(task);


    delbtn.addEventListener("click",()=>{
        console.log("deleted task");
        task.remove();
    })
    
    input.value = "";
    
    }
    
    });

 


 



 
   