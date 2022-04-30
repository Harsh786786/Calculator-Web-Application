function valueButton(a){
    calculatorForm.screen.value += a.value; // calculator k screen me e.value add hojaye
 }
 
 function Clear(){
     calculatorForm.screen.value = null;
 }
 
 function calculate(){
     calculatorForm.screen.value = eval(calculatorForm.screen.value); /// eval automativ evaluate 
 }