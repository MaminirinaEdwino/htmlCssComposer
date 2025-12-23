const htmlInput = document.getElementById('htmlInput')
const renderZone = document.getElementById('renderZone')
const targetName = document.getElementById('targetName')

let elementSelectionne = null

htmlInput.addEventListener('input', () => {
    renderZone.innerHTML = htmlInput.value
    const tousLesElements = renderZone.querySelectorAll('*')

    tousLesElements.forEach(el => {
        console.log(el)
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            elementSelectionne = el
            targetName.innerText = "Cible : <" + el.tagName.toLocaleLowerCase() + ">"
            tousLesElements.forEach(item => {
                if (el != item) {
                    item.style.outline = "2px solid none"
                }
            })
            // el.style.outline = "2px solid blue"
        })
    })

})

document.getElementById('textColor').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.color = e.target.value
        synchroniser()
    }
})

document.getElementById('fontSize').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.fontSize = e.target.value + "px"
        synchroniser()
    }
})

document.getElementById('bgColor').addEventListener('input', (e) => {
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.backgroundColor
        elementSelectionne.style.backgroundColor = e.target.value
        synchroniser()
    }
})

// sizing
document.getElementById('widthunit').addEventListener('input', (e) => { if (elementSelectionne) { synchroniser(); console.log(e.target.value);
 } })
document.getElementById('heightunit').addEventListener('input', (e) => { if (elementSelectionne) { synchroniser(); console.log("teste");
 } })


document.getElementById('width').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.width = e.target.value + document.getElementById('widthunit').value
        synchroniser()
    }
})


document.getElementById('height').addEventListener('input', (e) => {
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.height
        elementSelectionne.style.height = e.target.value + document.getElementById('heightunit').value
        synchroniser()
    }
})

document.getElementById('minw').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.minWidth = e.target.value + document.getElementById('widthunit').value
        synchroniser()
    }
})
document.getElementById('maxw').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.maxWidth = e.target.value + document.getElementById('widthunit').value
        synchroniser()
    }
})
document.getElementById('minh').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.minHeight = e.target.value + document.getElementById('heightunit').value
        synchroniser()
    }
})
document.getElementById('maxh').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.maxHeight = e.target.value + document.getElementById('heightunit').value
        synchroniser()
    }
})

//display
document.getElementById('display').addEventListener('input', (e) => {
    if (elementSelectionne) {
        document.getElementById('bgColor').style.maxHeight
        elementSelectionne.style.display = e.target.value
        synchroniser()
    }
})
// flex
document.getElementById('flexdirection').addEventListener('input', (e) => {
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.flexDirection
        elementSelectionne.style.flexDirection = e.target.value
        synchroniser()
    }
})
document.getElementById('justify-content').addEventListener('input', (e) => {
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.justifyContent
        elementSelectionne.style.justifyContent = e.target.value
        synchroniser()
    }
})
document.getElementById('align-items').addEventListener('input', (e) => {
    if (elementSelectionne) {
        document.getElementById('bgColor').style.alignItems
        elementSelectionne.style.alignItems = e.target.value
        synchroniser()
    }
})



document.getElementById('gap').addEventListener('input', (e) => {
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.flexDirection
        elementSelectionne.style.gap = e.target.value + "px"
        synchroniser()
    }
})
//margin section
function setmargin(){
    console.log("lgo");
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.flexDirection
        elementSelectionne.style.margin = document.getElementById('margin').value + document.getElementById('marginUnit').value
        console.log("lgo");
        
        synchroniser()
    }
}

document.getElementById('marginUnit').addEventListener('input', (e) => { elementSelectionne && synchroniser(); });
document.getElementById('marginl').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.marginLeft = e.target.value + document.getElementById('marginUnit').value
        synchroniser()
    }
})
document.getElementById('margint').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.marginTop = e.target.value + document.getElementById('marginUnit').value
        synchroniser()
    }
})
document.getElementById('marginr').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.marginRight = e.target.value + document.getElementById('marginUnit').value
        synchroniser()
    }
})
document.getElementById('marginb').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.marginBottom = e.target.value + document.getElementById('marginUnit').value
        synchroniser()
    }
})


// padding section
document.getElementById('padding').addEventListener('input', (e) => {
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.boxSizing
        elementSelectionne.style.padding = e.target.value + document.getElementById('paddingUnit').value
        synchroniser()
    }
})
document.getElementById('paddingl').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.paddingLeft = e.target.value + document.getElementById('paddingUnit').value
        synchroniser()
    }
})
document.getElementById('paddingt').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.paddingTop = e.target.value + document.getElementById('paddingUnit').value
        synchroniser()
    }
})
document.getElementById('paddingr').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.paddingRight = e.target.value + document.getElementById('paddingUnit').value
        synchroniser()
    }
})
document.getElementById('paddingb').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.paddingBottom = e.target.value + document.getElementById('paddingUnit').value
        synchroniser()
    }
})

document.getElementById('paddingUnit').addEventListener('input', (e) => { elementSelectionne && synchroniser(); });

document.getElementById('boxsizing').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.boxSizing = e.target.value
        synchroniser()
    }
})

// border part
document.getElementById('borderUnit').addEventListener('input', (e) => { elementSelectionne && synchroniser(); });
document.getElementById('borderRadius').addEventListener('input', (e) => {
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.borderRadius
        elementSelectionne.style.borderRadius = e.target.value + document.getElementById('borderUnit').value
        synchroniser()
    }
})
document.getElementById('bordersize').addEventListener('input', (e) => {
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.borderRadius
        elementSelectionne.style.borderWidth = e.target.value + document.getElementById('borderUnit').value
        synchroniser()
    }
})
document.getElementById('bordercolor').addEventListener('input', (e) => {
    if (elementSelectionne) {
        document.getElementById('bgColor').style.borderColor
        elementSelectionne.style.borderColor = e.target.value
        document.getElementById('colorcode').innerText = document.getElementById('bordercolor').value
        synchroniser()
    }
})
document.getElementById('bordertype').addEventListener('input', (e) => {
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.borderStyle
        elementSelectionne.style.borderStyle = e.target.value
        console.log('tt')
        synchroniser()
    }
})


document.getElementById('position').addEventListener('input', (e) => {
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.position
        elementSelectionne.style.position = e.target.value
        synchroniser()
    }
})
document.getElementById('posLeft').addEventListener('input', (e) => {
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.position
        elementSelectionne.style.left = e.target.value + document.getElementById('posUnit').value
        synchroniser()
    }
})
document.getElementById('posTop').addEventListener('input', (e) => {
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.
        elementSelectionne.style.top = e.target.value + document.getElementById('posUnit').value
        synchroniser()
    }
})
document.getElementById('posRight').addEventListener('input', (e) => {
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.righ
        elementSelectionne.style.right = e.target.value + document.getElementById('posUnit').value
        synchroniser()
    }
})
document.getElementById('posBottom').addEventListener('input', (e) => {
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.overflowX
        elementSelectionne.style.bottom = e.target.value + document.getElementById('posUnit').value
        synchroniser()
    }
})

document.getElementById('posUnit').addEventListener('input', (e) => { elementSelectionne && synchroniser() })

// Overflow

document.getElementById('overflowx').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.overflowX = e.target.value
    }
})
document.getElementById('overflowy').addEventListener('input', (e) => {
    if (elementSelectionne) {
        elementSelectionne.style.overflowY = e.target.value
    }
})


// document.getElementById('getparent').addEventListener('click', (e) => {
//     console.log("parent");
    
// })
function getparent(){
    console.log("parent");
    if (elementSelectionne) {
        // document.getElementById('bgColor').style.position
               
        if (elementSelectionne && elementSelectionne.parent != renderZone) {
            let parent = elementSelectionne.parentElement
            elementSelectionne = parent
        }
        synchroniser()
    }
}



function synchroniser() {
    targetName.innerText = "Cible : <" + elementSelectionne.tagName.toLocaleLowerCase() + ">"
    htmlInput.value = renderZone.innerHTML
}
let pressepapier = null
// let clone = null
function copyStyle() {
    pressepapier = elementSelectionne.getAttribute('style')
    console.log(pressepapier)
    console.log("cp")
}
function pasteStyle() {
    elementSelectionne.setAttribute('style', pressepapier)
    console.log(pressepapier)
    synchroniser()
}

document.getElementById('exportCss').addEventListener('click', (e) => {
    const tousLesElements = renderZone.querySelectorAll('*')
    let fichierCssFinal = "/*CSS Finale*/"
    let compteur = 1

    tousLesElements.forEach((el) => {
        if (el.style.length > 0) {
            if (!el.id) {
                el.id = "style-id-" + compteur
                compteur++
            }

            fichierCssFinal += `#${el.id} {\n`
            for (let index = 0; index < el.style.length; index++) {
                const prop = el.style[index];
                const valeur = el.style.getPropertyValue(prop)
                fichierCssFinal += `${prop}: ${valeur};\n`
            }

            fichierCssFinal += "}\n\n"
        }
    })

    synchroniser()
    telechargerFichier("style.css", fichierCssFinal)
})

function telechargerFichier(nom, content) {
    const blob = new Blob([content], { type: "text/css" })
    const lien = document.createElement('a')
    lien.href = URL.createObjectURL(blob)
    lien.download = nom
    lien.click()
}