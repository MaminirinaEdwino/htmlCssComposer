const htmlInput = document.getElementById('htmlInput')
const renderZone = document.getElementById('renderZone')
const targetName = document.getElementById('targetName')
let pressepapier = null
let elementSelectionne = null

function GetUnit(params) {
    let match = params.match(/^(\d*\.?\d+)([a-zA-Z]+)?$/)
    let value = null
    let unit = ""
    if (match) {
        value = parseFloat(match[1])
        unit = match[2] || "";
    }
    console.log(params, value, unit)
    return { value, unit }
}
console.log(GetUnit("px"))
function syncAllStyleWithControls(element) {
    // text section
    element.style.color ? document.getElementById('textColor').value = element.style.color : ""
    element.style.backgroundColor ? document.getElementById('bgColor').value = element.style.backgroundColor : ""
    element.style.textAlign ? document.getElementById('textAlign').value = element.style.textAlign : ""
    element.style.fontWeight ? document.getElementById('font-weight').value = element.style.fontWeight : ""
    element.style.fontFamily ? document.getElementById('font-family').value = element.style.fontFamily : ""
    let fontSize = null
    fontSize = GetUnit(element.style.fontSize)
    fontSize.value != null ? document.getElementById('fontSize').value = fontSize.value : ""

    // width & height section
    let wunit, maxwunit, minwunit = null

    element.style.width == "inherit" || element.style.width == "auto" || element.style.width == "fit-content" ? document.getElementById('spec_width').value = element.style.width : wunit = GetUnit(element.style.width)
    element.style.maxWidth == "inherit" || element.style.maxWidth == "auto" || element.style.maxWidth == "fit-content" ? document.getElementById('spec_width').value = element.style.maxWidth : maxwunit = GetUnit(element.style.maxWidth)
    element.style.minWidth == "inherit" || element.style.minWidth == "auto" || element.style.minWidth == "fit-content" ? document.getElementById('spec_width').value = element.style.minWidth : minwunit = GetUnit(element.style.minWidth)

    // element.style.height == "inherit" || element.style.height == "auto" || element.style.height == "fit-content" ? document.getElementById('spec_width').value = element.style.height : hunit = GetUnit(element.style.fontSize)
    // element.style.width == "inherit" || element.style.width == "auto" || element.style.width == "fit-content" ? document.getElementById('spec_width').value = element.style.width : maxhunit = GetUnit(element.style.fontSize)
    // element.style.width == "inherit" || element.style.width == "auto" || element.style.width == "fit-content" ? document.getElementById('spec_width').value = element.style.width : minhunit = GetUnit(element.style.fontSize)

    wunit.unit != '' ? document.getElementById('widthunit').value = wunit.unit : ""
    wunit.value != null ? document.getElementById('width').value = wunit.value : ""
    maxwunit.unit != '' ? document.getElementById('minwunit').value = maxwunit.unit : ""
    maxwunit.value != null ? document.getElementById('maxw').value = maxwunit.value : ""
    minwunit.unit != '' ? document.getElementById('minwunit').value = minwunit.unit : ""
    minwunit.value != null ? document.getElementById('minw').value = minwunit.value : ""

    let hunit = GetUnit(element.style.height);
    let maxhunit = GetUnit(element.style.maxHeight);
    let minhunit = GetUnit(element.style.minHeight);

    hunit.unit != "" ? document.getElementById('heightunit').value = hunit.unit : ""
    maxhunit.unit != "" ? document.getElementById('maxhunit').value = maxhunit.unit : ""
    minhunit.unit != "" ? document.getElementById('minhunit').value = minhunit.unit : ""

    hunit.value != null ? document.getElementById('height').value = hunit.value : ""
    maxhunit.value != null ? document.getElementById('maxh').value = maxhunit.value : ""
    minhunit.value != null ? document.getElementById('minh').value = minhunit.value : ""
    // border section
    let bw = GetUnit(element.style.borderWidth)
    let lbw = GetUnit(element.style.borderLeftWidth)
    let rbw = GetUnit(element.style.borderRightWidth)
    let tbw = GetUnit(element.style.borderTopWidth)
    let bbw = GetUnit(element.style.borderBottomWidth)

    bw.unit != "" ? document.getElementById('borderUnit').value = bw.unit : ""
    bw.value != null ? document.getElementById('bordersize').value = bw.value : ""
    element.style.borderStyle ? document.getElementById('bordertype').value = element.style.borderStyle : ""
    element.style.borderColor ? document.getElementById('bordercolor').value = element.style.borderColor : ""

    lbw.unit != "" ? document.getElementById('lbunit').value = lbw.unit : ""
    lbw.value != null ? document.getElementById('lb').value = lbw.value : ""
    element.style.borderLeftStyle ?  document.getElementById('lbstyle').value = element.style.borderLeftStyle : ""
    element.style.borderLeftColor ?  document.getElementById('lbcolor').value = element.style.borderLeftColor : ""

    rbw.unit != "" ? document.getElementById('rbunit').value = rbw.unit : ""
    rbw.value != null ? document.getElementById('rb').value = rbw.value : ""
    element.style.borderRightStyle ?  document.getElementById('rbstyle').value = element.style.borderRightStyle : ""
    element.style.borderRightColor ?  document.getElementById('rbcolor').value = element.style.borderRightColor : ""
    tbw.unit != "" ? document.getElementById('tbunit').value = tbw.unit : ""
    tbw.value != null ? document.getElementById('tb').value = tbw.value : ""
    element.style.borderTopStyle ?  document.getElementById('tbstyle').value = element.style.borderTopStyle : ""
    element.style.borderTopColor ?  document.getElementById('tbcolor').value = element.style.borderTopColor : ""
    bbw.unit != "" ? document.getElementById('bbunit').value = bbw.unit : ""
    bbw.value != null ? document.getElementById('bb').value = bbw.value : ""
    element.style.borderBottomStyle ?  document.getElementById('bbstyle').value = element.style.borderBottomStyle : ""
    element.style.borderBottomColor ?  document.getElementById('bbcolor').value = element.style.borderBottomColor : ""

    // padding section
    let p = GetUnit(element.style.padding), pl = GetUnit(element.style.paddingLeft), pt = GetUnit(element.style.paddingTop), pr = GetUnit(element.style.paddingRight), pb = GetUnit(element.style.paddingBottom)

    p.unit != "" ? document.getElementById('paddingUnit').value = p.unit : ""
    p.value != null ? document.getElementById('padding').value = p.value : ""
    pl.unit != "" ? document.getElementById('plunit').value = pl.unit : ""
    pl.value != null ? document.getElementById('paddingl').value = pl.value : ""
    pt.unit != "" ? document.getElementById('ptunit').value = pt.unit : ""
    pt.value != null ? document.getElementById('paddingt').value = pt.value : ""
    pr.unit != "" ? document.getElementById('prunit').value = pr.unit : ""
    pr.value != null ? document.getElementById('paddingr').value = pr.value : ""
    pb.unit != "" ? document.getElementById('pbunit').value = pb.unit : ""
    pb.value != null ? document.getElementById('paddingb').value = pb.value : ""

    // margin section
    let m = GetUnit(element.style.margin), ml = GetUnit(element.style.marginLeft), mt = GetUnit(element.style.marginTop), mr = GetUnit(element.style.marginRight), mb = GetUnit(element.style.marginBottom)

    m.unit != ""? document.getElementById('marginUnit').value = m.unit : ""
    m.value !=  null ?  document.getElementById('margin').value = m.value :""
    ml.unit != ""? document.getElementById('mlunit').value = ml.unit : ""
    ml.value !=  null ?  document.getElementById('marginl').value = ml.value :""
    mt.unit != ""? document.getElementById('mtunit').value = mt.unit : ""
    mt.value !=  null ?  document.getElementById('margint').value = mt.value :""
    mr.unit != ""? document.getElementById('mrunit').value = mr.unit : ""
    mr.value !=  null ?  document.getElementById('marginr').value = mr.value :""
    mb.unit != ""? document.getElementById('mbunit').value = mb.unit : ""
    mb.value !=  null ?  document.getElementById('marginb').value = mb.value :""
    
    // box sizing 
    element.style.boxSizing ? document.getElementById('boxsizing').value = element.style.boxSizing : ""
    // border radius section
    let brbl = GetUnit(elementSelectionne.style.borderBottomLeftRadius), brbr = GetUnit(elementSelectionne.style.borderBottomRightRadius), brtl = GetUnit(elementSelectionne.style.borderTopLeftRadius), brtr = GetUnit(elementSelectionne.style.borderTopRightRadius)

    console.log(brbl, brbr, brtl, brtr)
    brbl.value != null ? document.getElementById('lbradius').value = brbl.value : ""
    brbr.value != null ? document.getElementById('rbradius').value = brbr.value : ""
    brtl.value != null ? document.getElementById('tbradius').value = brtl.value : ""
    brtr.value != null ? document.getElementById('bbradius').value = brtr.value : ""

    // display section 
    element.style.display ? document.getElementById('display').value = element.style.display : ""
    // flex section
    let gap = GetUnit(element.style.gap)
    element.style.flexDirection ? document.getElementById('flexdirection').value = element.style.flexDirection : ""
    element.style.justifyContent ? document.getElementById('justify-content').value = element.style.justifyContent : ""
    element.style.alignItems ? document.getElementById('align-items').value = element.style.alignItems : ""
    gap.value != null ? document.getElementById('gap').value = gap.value :""
    element.style.flexWrap ? document.getElementById('flexwrap').value = element.style.flexWrap : ""
    // position section
    let posl = GetUnit(element.style.left), post = GetUnit(element.style.top), posr = GetUnit(element.style.right), posb = GetUnit(element.style.bottom)
    element.style.position ? document.getElementById("position").value = element.style.position : ""
    posl.unit != ""? document.getElementById('poslunit').value = posl.unit : ""
    post.unit != ""? document.getElementById('postunit').value = post.unit : ""
    posr.unit != ""? document.getElementById('posrunit').value = posr.unit : ""
    posb.unit != ""? document.getElementById('posbunit').value = posb.unit : ""
    posl.value != null ? document.getElementById('posLeft').value = posl.value : ""
    post.value != null ? document.getElementById('posTop').value = post.value : ""
    posr.value != null ? document.getElementById('posRight').value = posr.value : ""
    posb.value != null ? document.getElementById('posBottom').value  =posb.value : ""

    
}

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
            syncAllStyleWithControls(elementSelectionne)
        })

    })

})


// changement de valuer sans unité comme px ou rem
function set_style(id) {
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
        id == "minw" ? elementSelectionne.style.minWidth = document.getElementById(id).value + document.getElementById('minwunit').value : "";
        id == "maxw" ? elementSelectionne.style.maxWidth = document.getElementById(id).value + document.getElementById('maxwunit').value : "";
        id == "minh" ? elementSelectionne.style.minHeight = document.getElementById(id).value + document.getElementById('minhunit').value : "";
        id == "maxh" ? elementSelectionne.style.maxHeight = document.getElementById(id).value + document.getElementById('maxhunit').value : "";
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
        id == "marginl" ? elementSelectionne.style.marginLeft = document.getElementById(id).value + document.getElementById('mlunit').value : "";
        id == "margint" ? elementSelectionne.style.marginTop = document.getElementById(id).value + document.getElementById('mtunit').value : "";
        id == "marginr" ? elementSelectionne.style.marginRight = document.getElementById(id).value + document.getElementById('mrunit').value : "";
        id == "marginb" ? elementSelectionne.style.marginBottom = document.getElementById(id).value + document.getElementById('mbunit').value : "";
        // padding section
        id == "padding" ? elementSelectionne.style.padding = document.getElementById(id).value + document.getElementById('paddingUnit').value : "";
        id == "paddingl" ? elementSelectionne.style.paddingLeft = document.getElementById(id).value + document.getElementById('plunit').value : "";
        id == "paddingt" ? elementSelectionne.style.paddingTop = document.getElementById(id).value + document.getElementById('ptunit').value : "";
        id == "paddingr" ? elementSelectionne.style.paddingRight = document.getElementById(id).value + document.getElementById('prunit').value : "";
        id == "paddingb" ? elementSelectionne.style.paddingBottom = document.getElementById(id).value + document.getElementById('pbunit').value : "";
        // box sizing section
        id == "boxsizing" ? elementSelectionne.style.boxSizing = document.getElementById(id).value : "";
        // border section
        id == "borderRadius" ? elementSelectionne.style.borderRadius = document.getElementById(id).value + document.getElementById('borderUnit').value : "";
        id == "bordersize" ? elementSelectionne.style.borderWidth = document.getElementById(id).value + document.getElementById('borderUnit').value : "";
        id == "bordertype" ? elementSelectionne.style.borderStyle = document.getElementById(id).value : "";
        id == "bordercolor" ? elementSelectionne.style.borderColor = document.getElementById(id).value : "";
        id == "lb" ? elementSelectionne.style.borderLeftWidth = document.getElementById(id).value + document.getElementById('lbunit').value : ""
        id == "rb" ? elementSelectionne.style.borderRightWidth = document.getElementById(id).value + document.getElementById('rbunit').value : ""
        id == "tb" ? elementSelectionne.style.borderTopWidth = document.getElementById(id).value + document.getElementById('tbunit').value : ""
        id == "bb" ? elementSelectionne.style.borderBottomWidth = document.getElementById(id).value + document.getElementById('bbunit').value : ""
        id == "lbcolor" ? elementSelectionne.style.borderLeftColor = document.getElementById(id).value : ""
        id == "rbcolor" ? elementSelectionne.style.borderRightColor = document.getElementById(id).value : ""
        id == "tbcolor" ? elementSelectionne.style.borderTopColor = document.getElementById(id).value : ""
        id == "bbcolor" ? elementSelectionne.style.borderBottomColor = document.getElementById(id).value : ""
        id == "lbstyle" ? elementSelectionne.style.borderLeftStyle = document.getElementById(id).value : ""
        id == "rbstyle" ? elementSelectionne.style.borderRightStyle = document.getElementById(id).value : ""
        id == "tbstyle" ? elementSelectionne.style.borderTopStyle = document.getElementById(id).value : ""
        id == "bbstyle" ? elementSelectionne.style.borderBottomStyle = document.getElementById(id).value : ""
        id == "lbradius" ? elementSelectionne.style.borderBottomLeftRadius = document.getElementById(id).value + "px" : ""
        id == "rbradius" ? elementSelectionne.style.borderBottomRightRadius = document.getElementById(id).value + "px" : ""
        id == "tbradius" ? elementSelectionne.style.borderTopLeftRadius = document.getElementById(id).value + "px" : ""
        id == "bbradius" ? elementSelectionne.style.borderTopRightRadius = document.getElementById(id).value + "px" : ""

        document.getElementById(id).style.borderTop
        // position section
        id == "position" ? elementSelectionne.style.position = document.getElementById(id).value : "";
        id == "posLeft" ? elementSelectionne.style.left = document.getElementById(id).value + document.getElementById('poslunit').value : "";
        id == "posTop" ? elementSelectionne.style.top = document.getElementById(id).value + document.getElementById('postunit').value : "";
        id == "posRight" ? elementSelectionne.style.right = document.getElementById(id).value + document.getElementById('posrunit').value : "";
        id == "posBottom" ? elementSelectionne.style.bottom = document.getElementById(id).value + document.getElementById('posbunit').value : "";
        if (id == "posUnit") {
            document.getElementById('poslunit').value = document.getElementById(id).value
            document.getElementById('postunit').value = document.getElementById(id).value
            document.getElementById('posrunit').value = document.getElementById(id).value
            document.getElementById('posbunit').value = document.getElementById(id).value
        }
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
    } else {
        document.getElementById('css-style').innerText = ""
        for (let index = 0; index < stylesheet.cssRules.length; index++) {
            document.getElementById('css-style').innerText += "\n"
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
    syncAllStyleWithControls(elementSelectionne)
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