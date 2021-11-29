
/* Botôes */

let btn1 = document.querySelector("#btnHome")

let btn2 = document.querySelector("#btnCad")

let btn3 = document.querySelector("#btnApro")

let btn4 = document.querySelector("#btnRepr")



/* Páginas */

let form1 = document.querySelector("#pagCad")

let form2 = document.querySelector("#pagApro")

let form3 = document.querySelector("#pagRepr")



/* Eventos */ 
/*Voltar ao home*/

btn1.addEventListener("click",()=>{

    form1.className="hide"
    form2.className="hide"
    form3.className="hide"

})

/*Ir para cadastro*/
btn2.addEventListener("click",()=>{

    form1.className="cadastro"
    form2.className="hide"
    form3.className="hide"

})

/*Ir para aprovados*/
btn3.addEventListener("click",()=>{

    form1.className="hide"
    form2.className="aprovados"
    form3.className="hide"

})

/*Ir para reprovados*/
btn4.addEventListener("click",()=>{

    form1.className="hide"
    form2.className="hide"
    form3.className="reprovados"

})


