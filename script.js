function triangleCalculate(){
    const baseInput = document.getElementById('base');
    const baseValue = baseInput.value;
    const base = parseFloat(baseValue);
    const hightInput = document.getElementById('hight');
    const hightValue = hightInput.value;
    const hight = parseFloat(hightValue);
    const result = 0.5 * base * hight;
    if(result !== 'number'){
        return 'invalid input';
    }else{
        return result;
    }
}