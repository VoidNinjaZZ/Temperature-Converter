const input = document.getElementById("input");
const cf = document.getElementById("cf");
const fc = document.getElementById("fc");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.onclick= function hello(){
    let val= parseFloat(input.value);
    if(isNaN(val)){
        result.textContent="Please enter a valid number."
   return;
    }
 if(cf.checked){
        let ans= (val*9/5)+32;
        result.textContent=`Ans: ${ans.toFixed(2)}°F`;
        //toFixed(2) used for-has exactly 2 digits after the decimal point.
    }
else if(fc.checked){
    let ans = (val - 32) * 5/9;
        result.textContent=`Ans: ${ans.toFixed(2)}°C`;
}
}
// why type="button" in html ---in form if not set---then---page refreshes

