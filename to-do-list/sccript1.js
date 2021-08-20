window.onload=function(){
    let todoinput =document.getElementById("input-todo")
    let btnadd = document.getElementById('btn-add')
    let btndel = document.getElementById('btn-del')
    let mylist=document.getElementById("list")
    let ulist=[]
    
    this.console.log(typeof mylist)
    this.console.log(btnadd)
    this.console.log(todoinput)
    let arr=[]
    function check(){
        for(i=0;i<arr.length;i++){
            let c=document.getElementById("cb"+i);
            console.log(c)
            if(c===null){continue}
            if(c.checked==true){
                arr[i].b=true;
            }
        }
    }
    function del(){
        let m=this.id.substring(3)
        console.log(m)
        arr.splice(m,1)
        render();
        
    }
    function up(){
        let m=this.id.substring(2)
        console.log(m)
        swap(m,m-1);
        console.log(arr)

        //arr.splice(m,1)
        render();
        
        
            }
            function down(){
                let m=this.id.substring(4)
                m=m-0;
                console.log(m)
                swap(m,m+1)
console.log(m+1)
                console.log(arr)
                //arr.splice(m,1)
                render();
                
                
                    }
        
                    function swap(a,l){
                        let c=arr[a];
                        arr[a]=arr[l];
                        arr[l]=c;
                    }
    
    
      function render(name){
          if(name!="delete"){
          check();}
          mylist.innerHTML=""
          
          for(let i=0;i<arr.length;i++){
            let checkbox=document.createElement("input")
            checkbox.type = "checkbox";
            checkbox.className = "name";
           checkbox.value = "value";
          checkbox.id="cb"+i;
          checkbox.checked=arr[i].b
          let label = document.createElement('label')
         label.htmlFor = "cb"+i;
          let li=document.createElement("li");
         li.setAttribute('class',"list-group-item list-group-item-warning ")
         if(arr[i].b==true){checkbox.setAttribute("checked","checked")}
         li.appendChild(checkbox);

label.appendChild(document.createTextNode(arr[i].label))
li.appendChild(label)
let x=document.createElement("button");
    let j=document.createElement("i");
j.className="fas fa-trash-alt";
x.setAttribute("class","btn btn-outline-warning pbtn")
x.id="del"+i;
x.addEventListener("click",del,false)
x.appendChild(j);
li.appendChild(x)


if(mylist.childElementCount!=0){let x=document.createElement("button");
    let j=document.createElement("i");
    x.setAttribute("class","btn btn-outline-warning pbtn")
j.className="fas fa-arrow-up button";
x.addEventListener("click",up,false);
x.appendChild(j)
x.id="up"+i;
li.appendChild(x)}
if(mylist.childElementCount!=arr.length-1){let x=document.createElement("button");
    let j=document.createElement("i");
j.className="fas fa-arrow-down ";
x.setAttribute("class","btn btn-outline-warning pbtn")
x.setAttribute("align","right")
x.id="down"+i;
x.addEventListener("click",down,false)
x.appendChild(j);
li.appendChild(x)}





mylist.appendChild(li);


          }
         
      }
      

      btndel.onclick=function(){
          check();
          let a=[]
          for(let i=0;i<arr.length;i++){
              if(arr[i].b==false){a.push(arr[i])}
              console.log(arr[i].b)
              console.log(a)
          }
          console.log(a);
          arr=a;
        setTimeout(render("delete")
            , 1000); 
            setTimeout(check(),1500);

      }
btnadd.onclick = function(){
    let todo=todoinput.value;
    
    console.log(todo)
    if(todo===""){
        alert("please enter a todo string")
    }else{
    let obj={label:todo,
        b:false,
        c:arr.length
        
    }
    arr.push(obj)
   
   render("add");
   

    todoinput.value=''
} 

console.log(arr);   }
}
    
    
