function Solve(val){ //FOR SOlVING THE INPUT NUM1 AND NUM2, COMPARE THE TWO NUMBER
    var v = document.getElementById('result');
    v.value += val;
}
function Result(){
  var num1 = document.getElementById("result").value;
  try{
    var num2 = eval(num1);
    if (!isNaN(num2)){
        document.getElementById('result').value = num2;
    } else {
        document.getElementById('result').value = 'Error';
    }
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
function Clear(){ // FOR ALL CLEAR INPUT TYPE
 document.getElementById('result').value = '';   
}
function Back(){ //FOR DELETE THE FIRST INPUT
    var ev = document.getElementById('result');
    ev.value = ev.value.slice(0,-1);
}