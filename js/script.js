

const en = document.getElementById("en");
const uzunluq = document.getElementById("uzunluq");

const btnPerimetr = document.getElementById("btnPerimetr");
const btnSahe = document.getElementById("btnSahe");

const netice = document.getElementById("netice");

btnPerimetr.addEventListener("click" , function(){
    let hesabla = 2 * (Number(en.value) + Number(uzunluq.value));
    netice.innerHTML = hesabla

    en.value = " "
    uzunluq.value = " "
})

btnSahe.addEventListener("click", function(){
    let hesabla = Number(en.value) * Number(uzunluq.value);
    netice.innerHTML = hesabla

    en.value = " "
    uzunluq.value = " "
})


    
    
