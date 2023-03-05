
function addnewtask(){

    let x=document.createElement("li");

    let y=document.createElement("input");

    let d=document.createElement("div");

    let b=document.createElement("button");

    b.setAttribute("id","put");

    b.innerHTML="Add";

    let ant=document.getElementById("add");

    

    d.setAttribute("class","t");
    
    d.setAttribute("id","remove")

    x.appendChild(d);

    y.setAttribute("type","text");

    y.setAttribute("id","task-input");

    b.setAttribute("onclick","added()");

    d.appendChild(y);

    d.appendChild(b);

    let ul=document.getElementById("tasks");

    ul.appendChild(d);
}

let i=1;
function added(){
    
    let x=document.getElementById("task-input").value;

    let z=document.createElement("li");

    z.setAttribute("class","mad");
   
    let ip=document.createElement("button");
    ip.setAttribute("id","check");
    ip.innerHTML="Mark as Done";
    


    let p=document.createElement("h1");
    p.setAttribute("class","td-para");
   
    z.appendChild(p);
    z.appendChild(ip);

    p.textContent=i+". "+x;
    
    i++;
    let ul=document.getElementById("tasks");
    ul.appendChild(z);
    

    let dt=document.getElementById("done-tasks");
   
   ip.addEventListener("click",function (){
            ul.removeChild(z);
           dt.appendChild(p);

           
   })
    let r=document.getElementById("task-input");

    r.value="";

    let rem=document.getElementById("remove");

    ul.removeChild(rem);
   

}

