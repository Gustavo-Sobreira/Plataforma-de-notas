

let dados = []

/* Botões */
let btnSalvar = document.querySelector("#btnSave")

let btnApro = document.querySelector("#btnApro")


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

/* Direcionar notas */
btnSalvar.addEventListener("click",()=>{

    let aprovados = []

    let reprovados = []

    dados.forEach((alun) => {
        
        if (alun.nota > 5 && alun.nota <= 10){

            let apro ={

                nome: alun.nome,
                nota: alun.nota,

            }

            aprovados.push( apro )
        }

        else if (alun.nota <= 5 && alun.nota >= 0){
            
            let repro ={

                nome: alun.nome,
                nota: alun.nota,

            }

            reprovados.push( repro )
        }

        else{

            campos.item(0).value = ''
            campos.item(1).value = ''

        }
        
    })
    
})




