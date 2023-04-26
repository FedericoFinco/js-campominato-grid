console.log("prova")
const selectionEle = document.getElementById("chooseNumber")
const grid = document.getElementById("grid")
const generator = document.getElementById("generator")



generator.addEventListener("click", function(){
    grid.innerHTML=""
    let desiredNumber=Number(selectionEle.value)
    squaring(desiredNumber)
})


function squaring(boxNumber) {
    for (let i = 0; i < boxNumber; i++) {
        const nuovoDiv = document.createElement("div");
        nuovoDiv.classList.add("square")
        nuovoDiv.classList.add(`box${boxNumber}`)
        nuovoDiv.innerHTML=`${i+1}`
    
        nuovoDiv.addEventListener("click", function(){
            this.classList.toggle("clicked")
            console.log(`hai scelto la casella numero ${this.innerHTML}`)
        })
    
        grid.appendChild(nuovoDiv)
        
    }
}


