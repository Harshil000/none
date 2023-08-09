let input = document.getElementsByClassName('input')

for(let inpu of input){
    inpu.addEventListener('input' , ()=>{
        if(input[0].value != "" && input[1].value != "" && input[2].value != ""){

            let phase = (Math.atan((input[2].value - input[1].value) / input[0].value)*180)/3.14;
            phase = Math.round(phase)
            console.log(phase)

            let answer = document.getElementById('answer')
            answer.innerHTML = phase

            if(phase == 0){
                var i = 0;
                var j = 0.02;
            }else if(phase == 90){
                var i = 0;
                var j = 1;
            }else if(phase == -90){
                var i = 1;
                var j = 0;
            }else{
                var i = 0;
                var j;
                j = phase/90
                j = Math.abs(j)
                console.log(j)
            }

            let voltagebox = document.getElementsByClassName("voltage_value")
            // console.log(voltagebox)
            
            let currentbox = document.getElementsByClassName("current_value")
            // console.log(currentbox)
            
            for (let box of voltagebox) {
                box.style.animation = "oscillate 4s ease-in-out infinite"
                box.style.animationDelay = `${i + "s"}`
                i = i + .1
            }
            
            for (let box of currentbox) {
                box.style.animation = "oscillate 4s ease-in-out infinite"
                box.style.animationDelay = `${j + "s"}`
                j = j + .1
            }
            }
    })
}