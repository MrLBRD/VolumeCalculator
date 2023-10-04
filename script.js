window.onload = () => {
    let widgetContainer = document.createElement('div')
    widgetContainer.id = 'CVOL_widgetContainer'

    let objectsContainer = document.createElement('div')
    objectsContainer.id = 'CVOL_objectsContainer'
    generateObjectCard(objectsContainer)

    widgetContainer.appendChild(objectsContainer)

    let recapContainer = document.createElement('div')
    recapContainer.id = 'CVOL_recapContainer'
    recapContainer.innerHTML = '<div><div id="CVOL_listTitle">Votre liste est vide</div><div><span id="CVOL_totalObject">0</span> <span id="CVOL_textObjectCount">Objet</span></div><ul id="CVOL_listOfObjects"></ul></div><div><div>Avec un total de</div><div>~ <span id="CVOL_totalVol">0</span> m³</div></div>'
    widgetContainer.appendChild(recapContainer)

    let preCode = document.createElement("pre")
    let codeZone = document.createElement("code")
    codeZone.innerText = widgetContainer.outerHTML.replace(/&quot;/g, "'")
    preCode.appendChild(codeZone)

    let textNode = document.createTextNode('\n' + '<style>:root {--principal_color: #6dab3c;--secondary_color: #e2e6df;--nbElementPerCol: 6;--fontFamily: Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;}#CVOL_widgetContainer {display: flex;width: 100%;gap: 16px;}#CVOL_recapContainer {width: 20%;min-width: 240px;max-width: 380px;background-color: var(--secondary_color);}#CVOL_objectsContainer {display: grid;grid-template-columns: repeat(var(--nbElementPerCol), 1fr);gap: 4px;flex-grow: 1;}.CVOL_element {display: flex;flex-direction: column;background-color: var(--secondary_color);align-items: center;justify-content: flex-end;font-family: var(--fontFamily);padding: 88px 8px 8px;background-position: top 12px center;background-repeat: no-repeat;background-size: 64px;gap: 8px;}.CVOL_textElement {font-family: var(--fontFamily);text-align: center;flex-grow: 1;display: flex;justify-content: center;align-items: center;}.CVOL_actionsContainer {width: 100%;display: flex;justify-content: center;align-items: center;}.CVOL_actionsContainer .CVOL_quantity {flex-grow: 1;width: 100%;text-align: center;height: 26px;display: flex;justify-content: center;align-items: center;line-height: 26px;background-color: transparent;border-color: var(--btn-text-color);border-width: 1px;color: var(--btn-text-color);}.CVOL_actionsContainer .CVOL_actionBtn {background-color: var(--btn-bg-color);border-color: var(--btn-border-t-color) var(--btn-border-r-color) var(--btn-border-b-color) var(--btn-border-l-color);border-radius: var(--btn-border-radius);border-bottom-left-radius: var(--btn-border-bl-radius);border-bottom-right-radius: var(--btn-border-br-radius);border-top-left-radius: var(--btn-border-tl-radius);border-top-right-radius: var(--btn-border-tr-radius);border-width: var(--btn-border-t-width) var(--btn-border-r-width) var(--btn-border-b-width) var(--btn-border-l-width);display: flex;justify-content: center;align-items: center;width: 32px;height: 26px;padding: 6px;cursor: pointer;}.CVOL_actionsContainer .CVOL_actionBtn:hover {background-color: var(--btn-hover-bg);}.CVOL_actionsContainer .CVOL_actionBtn :is(svg, svg path) {fill: var(--btn-text-color);}.CVOL_actionsContainer .CVOL_actionBtn:hover :is(svg, svg path) {fill: var(--btn-hover-text-color);}</style>' + '\n');
    preCode.appendChild(textNode);

    document.body.appendChild(preCode)

    
    document.getElementById('copyButton').addEventListener('click', function() {
        copyToClipboard(document.querySelector('pre code').innerText)
    })
}

const objects = [
    {
        name: 'Réfrégirateur américain',
        id: 'frigo-am',
        vol: 2,
        image: 'https://i.imgur.com/tN1oJp5.png'
    }, {
        name: 'Réfrigérateur top',
        id: 'frigo-top',
        vol: 3,
        image: 'https://i.imgur.com/9tBTPHH.png'
    }, {
        name: 'Four',
        id: 'four',
        vol: 0.5,
        image: 'https://i.imgur.com/Gu6Fchw.png'
    }, {
        name: 'Micro-ondes',
        id: 'microonde',
        vol: 0.3,
        image: 'https://i.imgur.com/TKRqohv.png'
    }, {
        name: 'Gazinière',
        id: 'gaziniere',
        vol: 0.5,
        image: 'https://i.imgur.com/toQSlyA.png'
    }, {
        name: 'Plaque cuisson',
        id: 'plaque-cuisson',
        vol: 0.3,
        image: 'https://i.imgur.com/A8VVR11.png'
    }, {
        name: 'Meuble haut ou bas cuisine (1 porte)',
        id: 'meuble-haut-1',
        vol: 0.5,
        image: 'https://i.imgur.com/4bGhqt9.png'
    }, {
        name: 'Meuble haut ou bas cuisine (2 portes)',
        id: 'meuble-haut-2',
        vol: 1,
        image: 'https://i.imgur.com/BZkKVGZ.png'
    }, {
        name: 'Meuble haut ou bas cuisine (3 portes)',
        id: 'meuble-haut-3',
        vol: 1.5,
        image: 'https://i.imgur.com/MN9qFCk.png'
    }, {
        name: 'Meuble haut ou bas cuisine (4 portes)',
        id: 'meuble-haut-4',
        vol: 2,
        image: 'https://i.imgur.com/mp31Hxl.png'
    }, {
        name: 'Sous-lavabo',
        id: 's-lavabo',
        vol: 0.8,
        image: 'https://i.imgur.com/94NqMSm.png'
    }, {
        name: 'Vaisselier (1 porte)',
        id: 'vaisselier-1',
        vol: 1,
        image: 'https://i.imgur.com/EoJIKhm.png'
    }, {
        name: 'Vaisselier (2 portes)',
        id: 'vaisselier-2',
        vol: 1.5,
        image: 'https://i.imgur.com/EoJIKhm.png'
    }, {
        name: 'Vaisselier (3 portes)',
        id: 'vaisselier-3',
        vol: 2,
        image: 'https://i.imgur.com/EoJIKhm.png'
    }, {
        name: 'Vaisselier (4 portes)',
        id: 'vaisselier-4',
        vol: 2.5,
        image: 'https://i.imgur.com/EoJIKhm.png'
    }, {
        name: 'Petite lampe',
        id: 'petite-lampe',
        vol: 0.2,
        image: 'https://i.imgur.com/uYoGk3M.png'
    }, {
        name: 'Halogène',
        id: 'halogene',
        vol: 0.25,
        image: 'https://i.imgur.com/nzMvXsY.png'
    }, {
        name: 'Placard',
        id: 'placard',
        vol: 1,
        image: 'https://i.imgur.com/ZUyzhYV.png'
    }, {
        name: 'Etagère',
        id: 'etagere',
        vol: 0.3,
        image: 'https://i.imgur.com/29hxr6l.png'
    }, {
        name: 'Table',
        id: 'table',
        vol: 1,
        image: 'https://i.imgur.com/jBZhJDj.png'
    }, {
        name: 'Chaise',
        id: 'chaise',
        vol: 1,
        image: 'https://i.imgur.com/lKfKZGO.png'
    }, {
        name: 'Lave-linge',
        id: 'lave-linge',
        vol: 0.5,
        image: 'https://i.imgur.com/W7P2eSG.png'
    }, {
        name: 'Lave-vaisselle',
        id: 'lave-vaisselle',
        vol: 0.5,
        image: 'https://i.imgur.com/SlceUjo.png'
    }, {
        name: 'Congélateur coffre(petit)',
        id: 'congelateur-p',
        vol: 0.5,
        image: 'https://i.imgur.com/ypda0Te.png'
    }, {
        name: 'Congélateur coffre(moyen)',
        id: 'congelateur-m',
        vol: 0.75,
        image: 'https://i.imgur.com/EON4NHl.png'
    }, {
        name: 'Congélateur coffre(grand)',
        id: 'congelateur-g',
        vol: 1,
        image: 'https://i.imgur.com/IQ2lXLj.png'
    }, {
        name: 'Sèche-linge',
        id: 'seche-linge',
        vol: 0.5,
        image: 'https://i.imgur.com/cPhWqxX.png'
    }, {
        name: 'Sèche-linge',
        id: 'seche-linge',
        vol: 0.5,
        image: 'https://i.imgur.com/cPhWqxX.png'
    }, {
        name: 'Sèche-linge',
        id: 'seche-linge',
        vol: 0.5,
        image: 'https://i.imgur.com/cPhWqxX.png'
    },
]

function generateObjectCard(parentContainer) {
    objects.forEach(el => {
        let element = document.createElement('div')
        element.className = "CVOL_element"
        element.style.backgroundImage = `url(${el.image})`
        element.innerHTML = `<div class="CVOL_textElement">${el.name}</div><div class="CVOL_actionsContainer"><div class="CVOL_actionBtn CVOL_minusBtn" onclick='removeQtt("${el.id}", ${el.vol}, "${el.name}")'><svg viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg"><path d="M416 182H32C14.33 182 0 194.539 0 210V238C0 253.461 14.33 266 32 266H416C433.67 266 448 253.461 448 238V210C448 194.539 433.67 182 416 182Z" fill="black"/></svg></div><div class="CVOL_quantity" id="quantity__${el.id}">0</div><div class="CVOL_actionBtn CVOL_plusBtn" onclick='addQtt("${el.id}", ${el.vol}, "${el.name}")'><svg viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg"><path d="M416 182H272V56C272 40.5387 257.67 28 240 28H208C190.33 28 176 40.5387 176 56V182H32C14.33 182 0 194.539 0 210V238C0 253.461 14.33 266 32 266H176V392C176 407.461 190.33 420 208 420H240C257.67 420 272 407.461 272 392V266H416C433.67 266 448 253.461 448 238V210C448 194.539 433.67 182 416 182Z" fill="black"/></svg></div></div>`

        parentContainer.appendChild(element)
    })
}

function escapeHtml(text) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Code copié dans le presse-papiers!');
}


function syntaxChecking(qtt) {
    console.log(qtt)
    if (qtt <= 2) {
        switch (qtt) {
            case 0:
                listTitle.innerText = 'Votre liste est vide'
                break;
            case 1:
                listTitle.innerText = 'Votre liste contient :'
                textObjectCount.innerText = 'Objet'
                break;
            case 2:
                textObjectCount.innerText = 'Objets'
                break;
        }
    }
}

function addQtt(id, vol, name) {
    let qtt = document.getElementById('quantity__' + id)
    let newQtt = parseFloat(qtt.textContent) + 1
    qtt.innerText = newQtt

    totalObjectsDisplay.innerText = parseFloat(totalObjectsDisplay.textContent) + 1
    totalVolDisplay.innerText = parseFloat(totalVolDisplay.textContent) + vol

    syntaxChecking(parseFloat(totalObjectsDisplay.textContent))

    let liElement = listOfObjects.querySelector(`li[id="li_${id}"]`)
    if (liElement) {
        liElement.innerText = newQtt + ' ' + name
    } else {
        liElement = document.createElement('li')
        liElement.id = "li_" + id
        liElement.innerText = newQtt + ' ' + name
        listOfObjects.appendChild(liElement)
    }
}

function removeQtt(id, vol, name) {
    let qtt = document.getElementById('quantity__' + id)
    let newQtt = parseFloat(qtt.textContent) - 1
    if (newQtt >= 0) {
        qtt.innerText = newQtt

        totalObjectsDisplay.innerText = parseFloat(totalObjectsDisplay.textContent) - 1
        totalVolDisplay.innerText = parseFloat(totalVolDisplay.textContent) - vol

        let liElement = listOfObjects.querySelector(`li[id="li_${id}"]`)
        if (liElement) {
            if (newQtt === 0) {
                listOfObjects.removeChild(liElement)
            } else {
                liElement.innerText = newQtt + ' ' + name
            }
        } else if (newQtt > 0) {
            liElement = document.createElement('li')
            liElement.id = "li_" + id
            liElement.innerText = newQtt + ' ' + name
            listOfObjects.appendChild(liElement)
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    totalObjectsDisplay = document.getElementById('CVOL_totalObject')
    totalVolDisplay = document.getElementById('CVOL_totalVol')
    textObjectCount = document.getElementById('CVOL_textObjectCount')
    listTitle = document.getElementById('CVOL_listTitle')
    listOfObjects = document.getElementById('CVOL_listOfObjects')
})

function Add(name, quantity, volume, id) {
    var currentVolume = $("#total").html(),
        currentTotal = $("#totalQuantity").html();
    currentVolume = parseFloat(currentVolume) + (quantity * volume);
    currentTotal = parseFloat(currentTotal) + quantity;

    //Ajoute dans la quantité si existe
    var currentQuantity = parseFloat($("#categoryQuantity_" + id).html());
    currentQuantity = currentQuantity + 1;
    $("#categoryQuantity_" + id).html(currentQuantity);


    //Ajoute dans la liste de droite
    if ($("#listFurnitureItem_" + id).length) {
        $("#listFurnitureItem_" + id).find("#hiddenVolumeTotal_" + id).val(currentQuantity * volume);
        $("#listFurnitureItem_" + id).find("span").html(currentQuantity + " <span class='nameObjectList'>" + name + ", </span>");
        $("#listFurnitureItem_" + id + " input:first-child").attr('data-quantity', currentQuantity);
    } else {

        var currentItemVolume = currentQuantity * volume;
        $("#listFurniture").append("<li id='listFurnitureItem_" + id + "'><input type='hidden' id='hiddenVolumeTotal_" + id + "' data-quantity='" + currentQuantity + "' value='" + currentItemVolume + "'/><span>" + currentQuantity + " <span class='nameObjectList'>" + name + ", </span></span><input type='button' class='delett " + id + "' value='x' /></li>");
    }

    $("#total").html(currentVolume.toFixed(2));
    $("#totalQuantity").html(currentTotal);
}


document.addEventListener('DOMContentLoaded', function () {
    var otherId = 99;

    document.querySelectorAll('.more').forEach(function (button) {
        button.addEventListener('click', function () {
            var elem = button.closest('.element');
            var te = elem.getAttribute('data-volume');
            var ti = button.getAttribute('data-i');
            var ss = elem.querySelector(".texte-objet").textContent;
            Add(ss, 1, te, ti);
        });
    });

    document.querySelectorAll('.less').forEach(function (button) {
        button.addEventListener('click', function () {
            var elem = button.closest('.element');
            var te = elem.getAttribute('data-volume');
            var ti = button.getAttribute('data-i');
            var ss = elem.querySelector(".texte-objet").textContent;
            Remove(ss, 1, te, ti);
        });
    });

    document.addEventListener('click', function (event) {
        if (event.target.matches('.delett')) {
            var dd = event.target.classList[event.target.classList.length - 1];
            RemoveAll(dd);
        }
    });

});