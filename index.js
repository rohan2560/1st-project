let result = document.querySelector('.result')
function clearA(){
    result.value = ""
}
function del(){
    result.value = result.value.toString().slice(0,-1)
}
 function calculator(valueA){
    result.value += valueA 
 }
 function resultA(){
    result.value = eval(result.value)
 }