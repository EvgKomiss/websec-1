function buttonClickHandler(){
    let selectElem = document.getElementById("select");
    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;
    let resultStr = String(value1) + " " + selectElem.value + " " + String(value2) + " = "; 
    let result = 0;
    let correct = true;
   
    if (isNaN(value1) || isNaN(value2) || value1 ==="" || value2 ==="" || value1.indexOf(' ') >= 0 || value2.indexOf(' ') >= 0)
    {
        correct = false;
        resultStr = "Ошибка, введите корректные числа";
    }
     
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);
    
    if (correct){
        switch(selectElem.value){
            case "+":
                result = value1 + value2;
                break;
            case "-":
                result = value1 - value2;
                break;
            case "*":
                result = value1 * value2;
                break;
            case "/":
                if(value2 !== 0){
                    result = value1 / value2;
                }
                else{
                    resultStr = "На 0 разделить нельзя";
                    result = "";
                }
                break;
        }
        resultStr += result;
    }
    document.getElementById("results").innerText = resultStr;
}