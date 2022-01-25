
function btnclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val
}

function clr(){
    document.getElementById("screen").value=" "
}

function btneq(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}

function btnfact(){
    if( document.getElementById("screen").value=" "){
    document.getElementById("screen").innerText="error"
    }
    else{
    //factorial(n);
    function factorial(n){
        let answer = 1;
        if (document.getElementById("screen").value == 0 || document.getElementById("screen").value == 1){
         // return answer;
         document.getElementById("screen").value=answer
        }else{
          for(var i = document.getElementById("screen").value; i >= 1; i--){
            answer = answer * i;
          }
          //return answer;
          document.getElementById("screen").value=answer
        }  
      }
    }
  }