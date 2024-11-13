let display= document.getElementById('display');
//create function name appebdcharacter
function appendCharacter(charactor){
    display.value+=charactor;
}

//create function clear display
function clearDisplay(){
    display.value="";
}

//create function delete Characte
function deleteCharacter(){
    display.value=display.value.slice(0,-1);
}

//create function calculatorResult
function calculatorResult(){
    /*try{
        display.value=eval(display.value);
    }catch(error){
        alert("Invalid expression");
        clearDisplay();
    }*/
    display.value="I LOVE YOU BABE❤️";
    
}