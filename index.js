
let title=document.getElementById('title').value;
let desc=document.getElementById('desc').value;
let btn=document.getElementById('btn');


function get(){
     title=document.getElementById('title').value;
 desc=document.getElementById('desc').value;
    if(localStorage.getItem('itemJson')==null){
        Arr=[];
        Arr.push([title,desc]);
        localStorage.setItem('itemJson',JSON.stringify(Arr));
    }
    else{
        let ArrStr=localStorage.getItem('itemJson');
        Arr=JSON.parse(ArrStr);
        Arr.push([title,desc]);
        localStorage.setItem('itemJson',JSON.stringify(Arr));
    }
    update();
}
function update(){
     title=document.getElementById('title').value;
     desc=document.getElementById('desc').value;
    if(localStorage.getItem('itemJson')==null){
        Arr=[];
    
        localStorage.setItem('itemJson',JSON.stringify(Arr));
    }
    else{
        let ArrStr=localStorage.getItem('itemJson');
        Arr=JSON.parse(ArrStr);
      
    }
    let str="";
    let tb=document.getElementById('tb');
    Arr.forEach((element,index )=> {
        str+=` <tr id="tr">
        <td>${index+1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button onclick="pro(${index})">Delete</button></td>
    </tr>`;
        
    });
tb.innerHTML=str;
}
function pro(i){
    let ArrStr=localStorage.getItem('itemJson');
        Arr=JSON.parse(ArrStr);
    Arr.splice(i,1)
        localStorage.setItem('itemJson',JSON.stringify(Arr));
update();
}

btn.addEventListener('click',()=>{
     title=document.getElementById('title').value;
     desc=document.getElementById('desc').value;
    if(!title||!desc){
        alert("Sorry you can't add note Without some title and description.");
    }
    else{
        get();
    }
})
update();

function clearStorage(){
    if(confirm("Do you really want to clear all the notes?")){
    localStorage.clear();
    update();
    }
}

let search=document.getElementById('search');
let st="";

search.addEventListener('input',function(){
  tb.innerHTML.innerHTML="";
  Arr.forEach((element,index)=>{
    if(element[0]==search.value||element[1]==search.value){
        st+=`<tr id="tr">
        <td>${index+1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button onclick="pro(${index})">Delete</button></td>
    </tr>`;

    }

    
  })

  
  tb.innerHTML=st;
  
  
})

