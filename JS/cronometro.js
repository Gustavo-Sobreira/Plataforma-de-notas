
var mil = 0
var sec = 0
var min = 0
var hr  = 0



var cro

function iniciar(){
    
    cro = setInterval(watch, 10)

}

function pausar(){

    clearInterval(cro)

    document.getElementById("watch").innerText="⏸️ " + (hr < 10 ? '0'+ hr : hr) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + mil
    
}

function parar(){

    clearInterval(cro)
    sec = 0
    min = 0

    document.getElementById("watch").innerText="🛑 00:00:000"

}

function zerar(){

    mil = 0
    sec = 0
    min = 0
    hr  = 0

    

}

function watch(){

    mil++
    if(mil == 100){
        sec++
        mil = 0
        if (sec == 60){
            min++
            sec = 0
            if (min == 60){
                hr++
                min = 0
                if (hr == 60){
                    mil = 0
                    sec = 0
                    min = 0
                    hour = 0
                }

               
            }
        }

    }
    document.getElementById("watch").innerText="⏳ " + (hr < 10 ? '0'+ hr : hr) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + mil

}

