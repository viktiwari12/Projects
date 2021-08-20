var inp=document.querySelector("#input-todo");
var btnAdd=document.querySelector("#btn-add");
var btnDel=document.querySelector("#btn-del");
var todo=document.querySelector("#todo-list");




btnAdd.addEventListener("click",function(){
    if(inp.value==="")
    {
        alert("Can't add empty data");
        return;
    }
    var li=document.createElement("li");
    var imgdel=document.createElement("img");
    var imgup=document.createElement("img");
    var imgdn=document.createElement("img");

    imgdel.setAttribute("class","float-right");
    imgdel.setAttribute("src","rubbish-bin.png");
    imgdel.setAttribute("alt","del");

    imgup.setAttribute("class","float-right");
    imgup.setAttribute("src","au.png");
    imgup.setAttribute("alt","up");

    imgdn.setAttribute("class","float-right");
    imgdn.setAttribute("src","ad.png");
    imgdn.setAttribute("alt","down");

    li.setAttribute("class","list-group-item list-group-item-warning");
    li.appendChild(document.createTextNode(inp.value));
    li.appendChild(imgdel);
    li.appendChild(imgdn);
    li.appendChild(imgup);
    
    
    todo.appendChild(li);
    inp.value="";
    imgdel.addEventListener("click", function() {
            this.parentElement.parentElement.removeChild(this.parentElement);          
        });

    imgup.addEventListener("click", function(event) {
            
        
            var parentul=this.parentElement.parentElement;
            var thisli=this.parentElement;
            console.log(parentul);
            console.log(thisli);
            
            var arr;

            var pos=0;

            while((parentul.children[pos]===thisli)=== false)
            {
                console.log("inside the loop"+pos);
                pos++;
            }
            console.log(pos);
            if(pos!=0){
               
                var upper=parentul.children[pos-1];
                var curr=parentul.children[pos];
                //parentul.removeChild(upper);
                parentul.removeChild(curr);
                parentul.insertBefore(curr, parentul.children[pos-1]);
                console.log(curr);
                
            }
    });

    imgdn.addEventListener("click", function(event) {
            
        
        var parentul=this.parentElement.parentElement;
        var thisli=this.parentElement;
        console.log(parentul);
        console.log(thisli);
        
        var arr;

        var pos=0;

        while((parentul.children[pos]===thisli)=== false)
        {
            console.log("inside the loop"+pos);
            pos++;
        }
        console.log(pos);
        if(pos!=parentul.childElementCount){
           
            var upper=parentul.children[pos-1];
            var curr=parentul.children[pos];
            //parentul.removeChild(upper);
            parentul.removeChild(curr);
            parentul.insertBefore(curr, parentul.children[pos+1]);
            console.log(curr);
            
        }
});
   
});

    

btnDel.addEventListener("click",function(){
    todo.removeChild(todo.lastChild);
});
