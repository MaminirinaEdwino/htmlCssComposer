const htmlInput= document.getElementById('htmlInput')
const renderZone = document.getElementById('renderZone')
const targetName = document.getElementById('targetName')

let elementSelectionne = null

htmlInput.addEventListener('input', ()=>{
    renderZone.innerHTML = htmlInput.value
    const tousLesElements = renderZone.querySelectorAll('*')

    tousLesElements.forEach(el =>{
        console.log(el)
        el.addEventListener('click', (e)=>{
            e.stopPropagation();
            elementSelectionne = el
            targetName.innerText = "Cible : <"+el.tagName.toLocaleLowerCase()+">"
            tousLesElements.forEach(item=>{
                if (el != item) {
                    item.style.outline = none
                }
            })
            el.style.outline = "2px solid blue"
        })
    })

})

document.getElementById('textColor').addEventListener('input', (e)=>{
    if (elementSelectionne) {
        elementSelectionne.style.color = e.target.value
        synchroniser()
    }
})

document.getElementById('fontSize').addEventListener('input', (e)=>{
    if (elementSelectionne) {
        elementSelectionne.style.fontSize = e.target.value + "px"
        synchroniser()
    }
})

document.getElementById('bgColor').addEventListener('input', (e)=>{
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.backgroundColor
        elementSelectionne.style.backgroundColor = e.target.value 
        synchroniser()
    }
})


document.getElementById('width').addEventListener('input', (e)=>{
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.backgroundColor
        elementSelectionne.style.width = e.target.value + document.getElementById('widthunit').value
        synchroniser()
    }
})


document.getElementById('height').addEventListener('input', (e)=>{
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.height
        elementSelectionne.style.height = e.target.value + "px"
        synchroniser()
    }
})
document.getElementById('display').addEventListener('input', (e)=>{
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.display
        elementSelectionne.style.display = e.target.value 
        synchroniser()
    }
})

document.getElementById('flexdirection').addEventListener('input', (e)=>{
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.flexDirection
        elementSelectionne.style.flexDirection = e.target.value 
        synchroniser()
    }
})
document.getElementById('gap').addEventListener('input', (e)=>{
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.flexDirection
        elementSelectionne.style.gap = e.target.value +"px"
        synchroniser()
    }
})
document.getElementById('margin').addEventListener('input', (e)=>{
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.flexDirection
        elementSelectionne.style.margin = e.target.value 
        synchroniser()
    }
})
document.getElementById('padding').addEventListener('input', (e)=>{
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.boxSizing
        elementSelectionne.style.padding = e.target.value 
        synchroniser()
    }
})

document.getElementById('boxsizing').addEventListener('input', (e)=>{
    if (elementSelectionne){
        elementSelectionne.style.boxSizing = e.target.value
        synchroniser()
    }
})


document.getElementById('borderRadius').addEventListener('input', (e)=>{
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.borderRadius
        elementSelectionne.style.borderRadius = e.target.value +"px"
        synchroniser()
    }
})
document.getElementById('position').addEventListener('input', (e)=>{
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.position
        elementSelectionne.style.position = e.target.value +"px"
        synchroniser()
    }
})
document.getElementById('getparent').addEventListener('click', (e)=>{
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.position
        if (elementSelectionne && elementSelectionne.parentElement !== renderZone) {
           alert("parent")
           let parent = elementSelectionne.parentElement
           elementSelectionne = parent
        }
        synchroniser()
    }
})


function synchroniser(){
    targetName.innerText = "Cible : <"+elementSelectionne.tagName.toLocaleLowerCase()+">"
    htmlInput.value = renderZone.innerHTML
}
let pressepapier = null
// let clone = null
function copyStyle(){
    pressepapier = elementSelectionne.getAttribute('style')
    console.log(pressepapier)
    console.log("cp")
}
function pasteStyle() {
    elementSelectionne.setAttribute('style', pressepapier)
    console.log(pressepapier)
    synchroniser()
}

document.getElementById('exportCss').addEventListener('click',(e)=>{
    const tousLesElements = renderZone.querySelectorAll('*')
    let fichierCssFinal = "/*CSS Finale*/"
    let compteur = 1

    tousLesElements.forEach((el)=>{
        if (el.style.length >0) {
            if (!el.id) {
                el.id = "style-id-"+compteur
                compteur++
            }

            fichierCssFinal+=`#${el.id} {\n`
            for (let index = 0; index < el.style.length; index++) {
                const prop = el.style[index];
                const valeur = el.style.getPropertyValue(prop)
                fichierCssFinal+= `${prop}: ${valeur};\n`
            }

            fichierCssFinal += "}\n\n"
        }
    })

    synchroniser()
    telechargerFichier("style.css", fichierCssFinal)
})

function telechargerFichier(nom, content){
    const blob = new Blob([content], {type: "text/css"})
    const lien = document.createElement('a')
    lien.href = URL.createObjectURL(blob)
    lien.download = nom
    lien.click()
}