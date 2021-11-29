

let dados = []

/* Botões */
let btnSalvar = document.querySelector("#btnSave")

let btnApro = document.querySelector("#btnApro")

let btnRepr = document.querySelector("#btnRepr")

let btnHome = document.querySelector("btnHome")



/* Fazer cadastro */
btnSalvar.addEventListener("click",()=> {

    let campos = document.querySelectorAll("#pagCad input")

    let aluno = {

        nome: campos.item(0).value,
        nota: campos.item(1).value, 

    }

    dados.push( aluno )

    campos.item(0).value = ''
    campos.item(1).value = ''

})

/* Aprovados */
btnApro.addEventListener("click",()=>{

    let aprovados = 0

    //Não é um pronome neutro é só pq já tinha usado 

    dados.forEach( (alun)=>{

        if (parseFloat(alun.nota)<= 10 && parseFloat(alun.nota) >= 0){

            if (parseFloat(alun.nota) > 5 && parseFloat(alun.nota) <= 10){

                aprovados += 1
            }

        }
        
    })

    let dvAprovados = document.createElement("div")

    dvAprovados.className = "painel"
    dvAprovados.innerHTML = "Painel (" + aprovados + " aluno(s) aprovado(s)"
    

    let dv = document.getElementsByClassName("painel")

    dv[0].append(dvAprovados)
    dv[0].classList.remove("painel")
    
})

/* Reprovados */
btnRepr.addEventListener("click",()=>{

    let reprovados = 0

    //Não é um pronome neutro é só pq já tinha usado 

    dados.forEach( (alun)=>{

        if (parseFloat(alun.nota)<= 10 && parseFloat(alun.nota) >= 0){

            if (parseFloat(alun.nota) <= 5 && parseFloat(alun.nota) >= 0){

                reprovados += 1
            }

        }
        
    })

    let dvReprovados = document.createElement("div")

    dvReprovados.className = "painel"
    dvReprovados.innerHTML = "Painel (" + reprovados + " aluno(s) reprovado(s)"
    

    let dv = document.getElementsByClassName("painel")

    dv[0].append(dvReprovados)
    dv[0].classList.remove("painel")
    
})

