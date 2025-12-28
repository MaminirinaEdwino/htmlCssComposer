const htmlInput = document.getElementById('htmlInput')
const renderZone = document.getElementById('renderZone')
const targetName = document.getElementById('targetName')
let pressepapier = null
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
                item.style.outline = "2px solid transparent"
            })
            el.style.outline = "1px solid black"
        })
        
    })
    
})


// changement de valuer sans unité comme px ou rem
function set_style_no_unit(id) {
    if (elementSelectionne) {
        // text section
        id == "textColor" ? elementSelectionne.style.color = document.getElementById(id).value : "";
        id == "bgColor" ? elementSelectionne.style.backgroundColor = document.getElementById(id).value : "";
        id == "fontSize" ? elementSelectionne.style.fontSize = document.getElementById(id).value + "px" : "";
        id == "textAlign" ? elementSelectionne.style.textAlign = document.getElementById(id).value : ""
        id == "font-weight" ? elementSelectionne.style.fontWeight = document.getElementById(id).value : ""
        id == "font-family" ? elementSelectionne.style.fontFamily = document.getElementById(id).value : ""
        // width & height section
        id == "width" ? elementSelectionne.style.width = document.getElementById(id).value + document.getElementById('widthunit').value : ""
        id == "spec_width" && document.getElementById(id).value != "" ? elementSelectionne.style.width = document.getElementById(id).value : ""
        id == "height" ? elementSelectionne.style.height = document.getElementById(id).value + document.getElementById('heightunit').value : ""
        id == "minw" ? elementSelectionne.style.minWidth = document.getElementById(id).value + document.getElementById('widthunit').value : "";
        id == "maxw" ? elementSelectionne.style.maxWidth = document.getElementById(id).value + document.getElementById('widthunit').value : "";
        id == "minh" ? elementSelectionne.style.minHeight = document.getElementById(id).value + document.getElementById('heightunit').value : "";
        id == "maxh" ? elementSelectionne.style.maxHeight = document.getElementById(id).value + document.getElementById('heightunit').value : "";
        // Display section
        id == "display" ? elementSelectionne.style.display = document.getElementById(id).value : "";
        // flex section
        id == "flexdirection" ? elementSelectionne.style.flexDirection = document.getElementById(id).value : "";
        id == "justify-content" ? elementSelectionne.style.justifyContent = document.getElementById(id).value : "";
        id == "align-items" ? elementSelectionne.style.alignItems = document.getElementById(id).value : "";
        id == "gap" ? elementSelectionne.style.gap = document.getElementById(id).value + "px" : "";
        id == "flexwrap" ? elementSelectionne.style.flexWrap = document.getElementById(id).value : "";
        // margin section
        id == "margin" ? elementSelectionne.style.margin = document.getElementById(id).value + document.getElementById('marginUnit').value : "";
        id == "marginl" ? elementSelectionne.style.marginLeft = document.getElementById(id).value + document.getElementById('marginUnit').value : "";
        id == "margint" ? elementSelectionne.style.marginTop = document.getElementById(id).value + document.getElementById('marginUnit').value : "";
        id == "marginr" ? elementSelectionne.style.marginRight = document.getElementById(id).value + document.getElementById('marginUnit').value : "";
        id == "marginb" ? elementSelectionne.style.marginBottom = document.getElementById(id).value + document.getElementById('marginUnit').value : "";
        // padding section
        id == "padding" ? elementSelectionne.style.padding = document.getElementById(id).value + document.getElementById('paddingUnit').value : "";
        id == "paddingl" ? elementSelectionne.style.paddingLeft = document.getElementById(id).value + document.getElementById('paddingUnit').value : "";
        id == "paddingt" ? elementSelectionne.style.paddingTop = document.getElementById(id).value + document.getElementById('paddingUnit').value : "";
        id == "paddingr" ? elementSelectionne.style.paddingRight = document.getElementById(id).value + document.getElementById('paddingUnit').value : "";
        id == "paddingb" ? elementSelectionne.style.paddingBottom = document.getElementById(id).value + document.getElementById('paddingUnit').value : "";
        // box sizing section
        id == "boxsizing" ? elementSelectionne.style.boxSizing = document.getElementById(id).value : "";
        // border section
        id == "borderRadius" ? elementSelectionne.style.borderRadius = document.getElementById(id).value + document.getElementById('borderUnit').value : "";
        id == "bordersize" ? elementSelectionne.style.borderWidth = document.getElementById(id).value + document.getElementById('borderUnit').value : "";
        id == "bordertype" ? elementSelectionne.style.borderStyle = document.getElementById(id).value : "";
        id == "bordercolor" ? elementSelectionne.style.borderColor = document.getElementById(id).value : "";
        // document.getElementById(id).style.flexWrap
        // position section
        id == "position" ? elementSelectionne.style.position = document.getElementById(id).value + document.getElementById('posUnit').value : "";
        id == "posLeft" ? elementSelectionne.style.left = document.getElementById(id).value + document.getElementById('posUnit').value : "";
        id == "posTop" ? elementSelectionne.style.top = document.getElementById(id).value + document.getElementById('posUnit').value : "";
        id == "posRight" ? elementSelectionne.style.right = document.getElementById(id).value + document.getElementById('posUnit').value : "";
        id == "posBottom" ? elementSelectionne.style.bottom = document.getElementById(id).value + document.getElementById('posUnit').value : "";
        // overflow section
        id == "overflowx" ? elementSelectionne.style.overflowX = document.getElementById(id).value : "";
        id == "overflowy" ? elementSelectionne.style.overflowY = document.getElementById(id).value : "";
        // console.log(document.getElementById(id));
    }
    synchroniser();
}



function getparent() {
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
    if (targetName.innerText) {
        targetName.innerText = "Cible : <" + elementSelectionne.tagName.toLocaleLowerCase() + ">"
        htmlInput.value = renderZone.innerHTML
    }else{
        document.getElementById('css-style').innerText = ""
        for (let index = 0; index < stylesheet.cssRules.length; index++) {
            document.getElementById('css-style').innerText +="\n"
            document.getElementById('css-style').innerText += stylesheet.cssRules[index].cssText
        }
    }
}

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

function handleCSS(params) {
    let extern = document.getElementById('external-css-panel')
    let inline = document.getElementById('inline-css-panel')

    if (params == "inline") {
        extern.style.display = "none"
        inline.style.display = "flex"
    }
    if (params == "extern") {
        extern.style.display = "block"
        inline.style.display = "none"
    }
}

let stylesheet = document.styleSheets[2]
let selectedRule = null

// stylesheet.insertRule("div{background-color: red}", stylesheet.cssRules.length)
// alert(stylesheet.cssRules.length)
// stylesheet.cssRules[0].color = 'blue'

// alert(stylesheet.cssRules[0].selectorText)
// stylesheet.cssRules[0].style.backgroundColor = "green"
// document.getElementById('style-content').innerText = stylesheet.cssRules[0].cssText
// stylesheet.cssRules[0].style.color = "red"
// stylesheet.cssRules[0].style.padding = "10px"
// document.getElementById('style-content').innerText = stylesheet.cssRules[0].cssText

function synchroniserSelector() {
    document.getElementById('selectorList').innerHTML = ""
    for (let index = 0; index < stylesheet.cssRules.length; index++) {
        document.getElementById('selectorList').innerHTML += `<option value="${index}" onclick="selectSelector('${index}')">${stylesheet.cssRules[index].selectorText}</option>`
        console.log(stylesheet.cssRules[index].selectorText)
    }
}

function add_new_selector() {
    for (let index = 0; index < stylesheet.cssRules.length; index++) {
        if (stylesheet.cssRules[index].selectorText == document.getElementById('new-selector-input').value) {
            return
        }
    }
    stylesheet.insertRule(`${document.getElementById('new-selector-input').value}{  }`, stylesheet.cssRules.length)
    synchroniserSelector()
}

function selectSelector(index) {
    elementSelectionne = stylesheet.cssRules[index]
    // console.log('qsdf')
}

function setChangeExtern(id) {
    if (selectedRule) {
        id == "extern-border" ? selectedRule.style.border = `${document.getElementById(id).value}` : ""
        id == "extern-bg" ? selectedRule.style.backgroundColor = document.getElementById(id).value : "tay"
    }
    console.log(selectedRule.cssText)

    for (let index = 0; index < stylesheet.cssRules.length; index++) {
        console.log(stylesheet.cssRules[index].cssText)

    }
    synchroniser()
}