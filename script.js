function calculateBMI() {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid height and weight');
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    document.getElementById('bmi-output').value=bmi;
    if(bmi>25){
        document.getElementById('hlt-output').value="Over-Weight";
    }else if(bmi<18){
        document.getElementById('hlt-output').value="Under-Weight";
    }else{
        document.getElementById('hlt-output').value="Normal";
    }

   
}