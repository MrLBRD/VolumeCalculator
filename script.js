window.onload = () => {
    let widgetContainer = document.createElement('div')
    widgetContainer.id = 'CVOL_widgetContainer'

    let objectsTabsContainer = document.createElement('div')
    objectsTabsContainer.id = 'CVOL_objectsTabsContainer'

    generateObjectsTabs(objectsTabsContainer)
    
    widgetContainer.appendChild(objectsTabsContainer)

    let containerRecapCard = document.createElement('div')
    containerRecapCard.id = 'CVOL_containerRecapCard'

    let recapContainer = document.createElement('div')
    recapContainer.id = 'CVOL_recapContainer'
    recapContainer.innerHTML = '<div id="CVOL_allInfoListContainer"><div id="CVOL_infoCountContainer"><div id="CVOL_listTitle">Votre liste est vide</div><div id="CVOL_totalObjectContainer"><span id="CVOL_totalObject">0</span> <span id="CVOL_textObjectCount">Objet</span></div></div><ul id="CVOL_listOfObjects"></ul></div><div id="CVOL_totalVolInfoContainer"><div id="CVOL_totalVolText">Avec un total de</div><div id="CVOL_totalVolContainer"><div id="CVOL_infoTotalVol"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none"><path d="M18.3487 5.92637L11.13 1.97656C10.9371 1.86999 10.7204 1.81409 10.5 1.81409C10.2796 1.81409 10.0629 1.86999 9.87 1.97656L2.65125 5.92801C2.4451 6.0408 2.27301 6.20688 2.15295 6.4089C2.0329 6.61091 1.96928 6.84145 1.96875 7.07645V14.9219C1.96928 15.1569 2.0329 15.3875 2.15295 15.5895C2.27301 15.7915 2.4451 15.9576 2.65125 16.0704L9.87 20.0218C10.0629 20.1284 10.2796 20.1843 10.5 20.1843C10.7204 20.1843 10.9371 20.1284 11.13 20.0218L18.3487 16.0704C18.5549 15.9576 18.727 15.7915 18.847 15.5895C18.9671 15.3875 19.0307 15.1569 19.0312 14.9219V7.07727C19.0312 6.84185 18.9678 6.6108 18.8477 6.40831C18.7276 6.20583 18.5553 6.03936 18.3487 5.92637ZM10.5 3.125L17.0912 6.73438L14.6483 8.07066L8.05711 4.46129L10.5 3.125ZM10.5 10.3438L3.90879 6.73438L6.69047 5.21105L13.2817 8.82043L10.5 10.3438ZM17.7188 14.9252L11.1562 18.5173V11.4782L13.7812 10.0419V12.9688C13.7812 13.1428 13.8504 13.3097 13.9735 13.4328C14.0965 13.5559 14.2635 13.625 14.4375 13.625C14.6115 13.625 14.7785 13.5559 14.9015 13.4328C15.0246 13.3097 15.0938 13.1428 15.0938 12.9688V9.32328L17.7188 7.88691V14.9219V14.9252Z" fill="black"/></svg><div id="CVOL_textVolContainer">~&nbsp;<span id="CVOL_totalVol">0</span></div></div><div id="CVOL_mcubeLabel">m³</div></div></div>'

    containerRecapCard.appendChild(recapContainer)
    widgetContainer.appendChild(containerRecapCard)

    let preCode = document.getElementById("preCode")
    let codeZone = document.createElement("code")
    codeZone.innerText = widgetContainer.outerHTML.replace(/&quot;/g, "'")
    preCode.appendChild(codeZone)

    document.body.appendChild(preCode)

    
    document.body.appendChild(widgetContainer)

    
    document.getElementById('copyButton').addEventListener('click', function() {
        copyToClipboard(document.querySelector('pre code').innerText)
    })
}

const objects = [
    {
        name: 'Cuisine',
        id: 'cuisine',
        objects: [
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
                name: 'Table',
                id: 'table',
                vol: 1,
                image: 'https://i.imgur.com/jBZhJDj.png'
            }, {
                name: 'Chaise',
                id: 'chaise',
                vol: 1,
                image: 'https://i.imgur.com/lKfKZGO.png'
            }
        ]
    }, {
        name: 'Chambre',
        id: 'chambre',
        objects: [
            {
                name: 'Lit Bébé',
                id: 'lit-bebe',
                vol: 1.2,
                image: 'https://i.imgur.com/VvgSAKf.png'
            }, {
                name: 'Lit (1 place)',
                id: 'lit-1',
                vol: 1.2,
                image: 'https://i.imgur.com/cCDqbxx.png'
            }, {
                name: 'Lit (2 places)',
                id: 'lit-2',
                vol: 1.5,
                image: 'https://i.imgur.com/39S1vdZ.png'
            }, {
                name: 'Lit superposé',
                id: 'lit-superpose',
                vol: 2.5,
                image: 'https://i.imgur.com/mPBarva.png'
            }, {
                name: 'Table de chevet',
                id: 'table-chevet',
                vol: 0.3,
                image: 'https://i.imgur.com/HZhtLWi.png'
            }, {
                name: 'Armoire (1 porte)',
                id: 'armoire-1',
                vol: 0.5,
                image: 'https://i.imgur.com/MKeALs0.png'
            }, {
                name: 'Armoire (2 portes)',
                id: 'armoire-2',
                vol: 1,
                image: 'https://i.imgur.com/q4O8q2Z.png'
            }, {
                name: 'Armoire (3 portes)',
                id: 'armoire-3',
                vol: 1.5,
                image: 'https://i.imgur.com/c1ySVP0.png'
            }, {
                name: 'Armoire (4 portes)',
                id: 'armoire-4',
                vol: 2,
                image: 'https://i.imgur.com/DQc0tyZ.png'
            }, {
                name: 'Commode',
                id: 'commode',
                vol: 0.5,
                image: 'https://i.imgur.com/pvfH5bI.png'
            }, {
                name: 'Coiffeuse',
                id: 'coiffeuse',
                vol: 1.5,
                image: 'https://i.imgur.com/EzpaTNS.png'
            }, {
                name: 'Bonnetière',
                id: 'bonnetiere',
                vol: 1,
                image: 'https://i.imgur.com/WY8j0d8.png'
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
            }
        ]
    }, {
        name: 'Salon / Salle à manger',
        id: 'salon',
        objects: [
            {
                name: 'Canapé (2 places)',
                id: 'canape-2',
                vol: 2,
                image: 'https://i.imgur.com/lPG0J2U.png'
            }, {
                name: 'Canapé (3 places)',
                id: 'canape-3',
                vol: 2.5,
                image: 'https://i.imgur.com/61SvZBB.png'
            }, {
                name: 'Canapé d&#8217;angle',
                id: 'canape-angle',
                vol: 3,
                image: 'https://i.imgur.com/JvI0n4G.png'
            }, {
                name: 'Fauteuil',
                id: 'fauteuil',
                vol: 1,
                image: 'https://i.imgur.com/HB8y71q.png'
            }, {
                name: 'Table basse',
                id: 'table-basse',
                vol: 0.5,
                image: 'https://i.imgur.com/v3KFrlD.png'
            }, {
                name: 'Guéridon',
                id: 'gueridon',
                vol: 0.3,
                image: 'https://i.imgur.com/Bs1rEuh.png'
            }, {
                name: 'Meuble Tv',
                id: 'meuble-tv',
                vol: 0.7,
                image: 'https://i.imgur.com/MfRxOCk.png'
            }, {
                name: 'Bibliothèque (1 porte)',
                id: 'bibliotheque-1',
                vol: 0.5,
                image: 'https://i.imgur.com/Mrw7ptz.png'
            }, {
                name: 'Bibliothèque (2 portes)',
                id: 'bibliotheque-2',
                vol: 1,
                image: 'https://i.imgur.com/iRi0Ege.png'
            }, {
                name: 'Bibliothèque (3 portes)',
                id: 'bibliotheque-3',
                vol: 1.5,
                image: 'https://i.imgur.com/qWEHfbF.png'
            }, {
                name: 'Bibliothèque (4 portes)',
                id: 'bibliotheque-4',
                vol: 2,
                image: 'https://i.imgur.com/QeNkKlc.png'
            }, {
                name: 'Meuble living (1 porte)',
                id: 'meuble-living-1',
                vol: 0.5,
                image: 'https://i.imgur.com/35QTCmw.png'
            }, {
                name: 'Meuble living (2 portes)',
                id: 'meuble-living-2',
                vol: 1,
                image: 'https://i.imgur.com/caVkkKg.png'
            }, {
                name: 'Meuble living (3 portes)',
                id: 'meuble-living-3',
                vol: 1.5,
                image: 'https://i.imgur.com/7RL53EG.png'
            }, {
                name: 'Meuble living (4 portes)',
                id: 'meuble-living-4',
                vol: 2,
                image: 'https://i.imgur.com/rUh9b8C.png'
            }, {
                name: 'Télévision',
                id: 'tv',
                vol: 0.25,
                image: 'https://i.imgur.com/23telWx.png'
            }, {
                name: 'Hifi',
                id: 'hifi',
                vol: 0.3,
                image: 'https://i.imgur.com/5DB6OOP.png'
            }, {
                name: 'Piano demi queue',
                id: 'piano-demi',
                vol: 2,
                image: 'https://i.imgur.com/FNdcohl.png'
            }, {
                name: 'Piano à queue',
                id: 'piano-queue',
                vol: 2.5,
                image: 'https://i.imgur.com/LozoleF.png'
            }, {
                name: 'Piano droit',
                id: 'piano-droit',
                vol: 1.5,
                image: 'https://i.imgur.com/kVg0zB8.png'
            }, 
        ]
    }, {
        name: 'Buanderie et Bureau',
        id: 'bureau',
        objects: [
            {
                name: 'Lave-linge',
                id: 'lave-linge',
                vol: 0.5,
                image: 'https://i.imgur.com/W7P2eSG.png'
            }, {
                name: 'Sèche-linge',
                id: 'seche-linge',
                vol: 0.5,
                image: 'https://i.imgur.com/cPhWqxX.png'
            }, {
                name: 'Panière à linge',
                id: 'paniere-linge',
                vol: 0.3,
                image: 'https://i.imgur.com/FEN1eLP.png'
            }, {
                name: 'Table à repasser',
                id: 'table-repasser',
                vol: 0.15,
                image: 'https://i.imgur.com/w4OVIDe.png'
            }, {
                name: 'Aspirateur',
                id: 'aspirateur',
                vol: 0.3,
                image: 'https://i.imgur.com/JW4KZqt.png'
            }, {
                name: 'Petit bureau',
                id: 'petit-bureau',
                vol: 1,
                image: 'https://i.imgur.com/g1zdsE3.png'
            }, {
                name: 'Bureau',
                id: 'bureau',
                vol: 1.5,
                image: 'https://i.imgur.com/kG6OeyZ.png'
            }, {
                name: 'Ordinateur',
                id: 'ordinateur',
                vol: 0.1,
                image: 'https://i.imgur.com/2oVyTHx.png'
            }, {
                name: 'Imprimante',
                id: 'imprimante',
                vol: 0.3,
                image: 'https://i.imgur.com/nLVfKID.png'
            }
        ]
    }, {
        name: 'Décoration et Eclairage',
        id: 'decoration',
        objects: [
            {
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
                name: 'Abat-jour',
                id: 'abat-jour',
                vol: 0.1,
                image: 'https://i.imgur.com/dcdsfjZ.png'
            }, {
                name: 'Plante (petite)',
                id: 'plante-p',
                vol: 0.25,
                image: 'https://i.imgur.com/SqehXjl.png'
            }, {
                name: 'Plante (moyenne)',
                id: 'plante-m',
                vol: 0.5,
                image: 'https://i.imgur.com/oGUq7Af.png'
            }, {
                name: 'Plante (grande)',
                id: 'plante-g',
                vol: 0.75,
                image: 'https://i.imgur.com/HECKyub.png'
            }, {
                name: 'Tableau (petit)',
                id: 'tableau-p',
                vol: 0.1,
                image: 'https://i.imgur.com/tJ1SeZd.png'
            }, {
                name: 'Tableau (moyen)',
                id: 'tableau-m',
                vol: 0.15,
                image: 'https://i.imgur.com/tjeu30u.png'
            }, {
                name: 'Tableau (grand)',
                id: 'tableau-g',
                vol: 0.25,
                image: 'https://i.imgur.com/wyZQs5C.png'
            }, {
                name: 'Tapis (petit)',
                id: 'tapis-p',
                vol: 0.15,
                image: 'https://i.imgur.com/7rWyfyk.png'
            }, {
                name: 'Tapis (moyen)',
                id: 'tapis-m',
                vol: 0.5,
                image: 'https://i.imgur.com/xc74DTT.png'
            }, {
                name: 'Tapis (grand)',
                id: 'tapis-g',
                vol: 0.75,
                image: 'https://i.imgur.com/UgymcqX.png'
            }, {
                name: 'Porte-manteaux',
                id: 'porte-manteau',
                vol: 0.3,
                image: 'https://i.imgur.com/Th5ExHR.png'
            }
        ]
    }, {
        name: 'Rangement',
        id: 'rangement',
        objects: [
            {
                name: 'Carton standard',
                id: 'carton',
                vol: 0.1,
                image: 'https://i.imgur.com/WY5aMXd.png'
            }, {
                name: 'Carton penderie',
                id: 'carton-penderie',
                vol: 0.5,
                image: 'https://i.imgur.com/fIbc3Fs.png'
            }, {
                name: 'Contenu placard (1 porte)',
                id: 'contenu-placard-1',
                vol: 0.5,
                image: 'https://i.imgur.com/KOffPdX.png'
            }, {
                name: 'Contenu placard (2 portes)',
                id: 'contenu-placard-2',
                vol: 1,
                image: 'https://i.imgur.com/rT2OwbG.png'
            }, {
                name: 'Contenu placard (3 portes)',
                id: 'contenu-placard-3',
                vol: 1.5,
                image: 'https://i.imgur.com/RU6eDMD.png'
            }, {
                name: 'Contenu placard (4 portes)',
                id: 'contenu-placard-4',
                vol: 2,
                image: 'https://i.imgur.com/B0KBW5u.png'
            }, {
                name: 'Contenu penderie (1 porte)',
                id: 'contenu-penderie-1',
                vol: 0.5,
                image: 'https://i.imgur.com/CFRo73Z.png'
            }, {
                name: 'Contenu penderie (2 portes)',
                id: 'contenu-penderie-2',
                vol: 1,
                image: 'https://i.imgur.com/SoAtksU.png'
            }, {
                name: 'Contenu penderie (3 portes)',
                id: 'contenu-penderie-3',
                vol: 1.5,
                image: 'https://i.imgur.com/qunUuC8.png'
            }, {
                name: 'Contenu penderie (4 portes)',
                id: 'contenu-penderie-4',
                vol: 2,
                image: 'https://i.imgur.com/pPx0Qey.png'
            }, {
                name: 'Coffre à jouets (petit)',
                id: 'coffre-jouets-p',
                vol: 0.25,
                image: 'https://i.imgur.com/UGSadDq.png'
            }, {
                name: 'Coffre à jouets (moyen)',
                id: 'coffre-jouets-m',
                vol: 0.5,
                image: 'https://i.imgur.com/0pb2qHD.png'
            }, {
                name: 'Coffre à jouets (grand)',
                id: 'coffre-jouets-g',
                vol: 0.75,
                image: 'https://i.imgur.com/quDTJ1x.png'
            }, {
                name: 'Meuble à chaussures (petit)',
                id: 'meuble-chaussures-p',
                vol: 0.25,
                image: 'https://i.imgur.com/2xDe4a3.png'
            }, {
                name: 'Meuble à chaussures (moyen)',
                id: 'meuble-chaussures-m',
                vol: 0.5,
                image: 'https://i.imgur.com/PqB64fx.png'
            }, {
                name: 'Meuble à chaussures (grand)',
                id: 'meuble-chaussures-g',
                vol: 0.75,
                image: 'https://i.imgur.com/oBLjzgC.png'
            }
        ]
    }, {
        name: 'Jardin et Garage',
        id: 'jardin',
        objects: [
            {
                name: 'Etabli',
                id: 'etabli',
                vol: 1,
                image: 'https://i.imgur.com/DBQZNea.png'
            }, {
                name: 'Lot d&#8217;outils (petit)',
                id: 'outils-p',
                vol: 0.25,
                image: 'https://i.imgur.com/xRVWnr4.png'
            }, {
                name: 'Lot d&#8217;outils (moyen)',
                id: 'outils-m',
                vol: 0.75,
                image: 'https://i.imgur.com/CwoqTx7.png'
            }, {
                name: 'Lot d&#8217;outils (grand)',
                id: 'outils-g',
                vol: 1,
                image: 'https://i.imgur.com/G9cCU3Y.png'
            }, {
                name: 'Table de jardin (petite)',
                id: 'table-jardin-p',
                vol: 0.25,
                image: 'https://i.imgur.com/OmNOQij.png'
            }, {
                name: 'Table de jardin (moyen)',
                id: 'table-jardin-m',
                vol: 0.5,
                image: 'https://i.imgur.com/7amtBEH.png'
            }, {
                name: 'Table de jardin (grande)',
                id: 'table-jardin-g',
                vol: 0.75,
                image: 'https://i.imgur.com/qc5IhTn.png'
            }, {
                name: 'Outils de jardin (petit)',
                id: 'outils-jardin-p',
                vol: 0.5,
                image: 'https://i.imgur.com/8Djx1d1.png'
            }, {
                name: 'Outils de jardin (moyen)',
                id: 'outils-jardin-m',
                vol: 0.75,
                image: 'https://i.imgur.com/0o3yZvA.png'
            }, {
                name: 'Outils de jardin (grand)',
                id: 'outils-jardin-g',
                vol: 1,
                image: 'https://i.imgur.com/k0chFDy.png'
            }, {
                name: 'Barbecue (petit)',
                id: 'barbecue-p',
                vol: 0.25,
                image: 'https://i.imgur.com/79bfpCQ.png'
            }, {
                name: 'Barbecue (moyen)',
                id: 'barbecue-m',
                vol: 0.5,
                image: 'https://i.imgur.com/TyhxEOG.png'
            }, {
                name: 'Barbecue (grand)',
                id: 'barbecue-g',
                vol: 0.75,
                image: 'https://i.imgur.com/o3Mx1iE.png'
            }, {
                name: 'Parasol',
                id: 'parasol',
                vol: 0.5,
                image: 'https://i.imgur.com/i9WYy1B.png'
            }, {
                name: 'Poussette',
                id: 'poussette',
                vol: 0.5,
                image: 'https://i.imgur.com/lAjG4Ho.png'
            }, {
                name: 'Scooter',
                id: 'scooter',
                vol: 0.5,
                image: 'https://i.imgur.com/CqJVxID.png'
            }, {
                name: 'Tracteur tondeuse',
                id: 'tracteur-tondeuse',
                vol: 1.5,
                image: 'https://i.imgur.com/rIMAe5C.png'
            }, {
                name: 'Tondeuse',
                id: 'tondeuse',
                vol: 0.5,
                image: 'https://i.imgur.com/rIMAe5C.png'
            }, {
                name: 'Brouette',
                id: 'brouette',
                vol: 0.5,
                image: 'https://i.imgur.com/B8Os4dF.png'
            }, {
                name: 'Transat',
                id: 'transat',
                vol: 0.5,
                image: 'https://i.imgur.com/IeqitB8.png'
            }, {
                name: 'Vélo',
                id: 'velo',
                vol: 0.25,
                image: 'https://i.imgur.com/2G3YfF3.png'
            }
        ]
    }
]






function generateObjectsTabs(parentContainer) {
    let objectsTabsListContainer = document.createElement('div')
    objectsTabsListContainer.id = 'CVOL_objectsTabsListContainer'
    let objectsTabsContentContainer = document.createElement('div')
    objectsTabsContentContainer.id = 'CVOL_objectsTabsContentContainer'

    objects.forEach((el, id) => {
        console.log(id)
        let objectsTabListContainer = document.createElement('div')
        objectsTabListContainer.className = 'CVOL_objectsTabListContainer'
        objectsTabListContainer.dataset.tab = el.id
        objectsTabListContainer.textContent = el.name
        if (id === 0) objectsTabListContainer.classList.add('CVOL_tabActiv')

        objectsTabListContainer.setAttribute('onclick', "switchTabActiv('" + el.id + "')")

        objectsTabsListContainer.appendChild(objectsTabListContainer)

        let objectsContainer = document.createElement('div')
        objectsContainer.className = 'CVOL_objectsContainer'
        if (id !== 0) objectsContainer.style.display = 'none'
        objectsContainer.id = 'CVOL_' + el.id
        generateObjectCard(objectsContainer, el.objects)
    
        objectsTabsContentContainer.appendChild(objectsContainer)
    })
    
    parentContainer.appendChild(objectsTabsListContainer)
    parentContainer.appendChild(objectsTabsContentContainer)
}

function generateObjectCard(parentContainer, arrayObjects) {
    arrayObjects.forEach(el => {
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


function switchTabActiv(tabId) {
    let allTab = document.querySelectorAll('div.CVOL_objectsContainer')
    allTab.forEach(el => {
        el.style.display = 'none'
    })
    let tabToActiv = document.getElementById('CVOL_'+tabId)
    tabToActiv.style.display = ''

    let activTabMenu = document.querySelector('div.CVOL_objectsTabListContainer.CVOL_tabActiv')
    activTabMenu.classList.remove('CVOL_tabActiv')

    let newTabMenu = document.querySelector('div.CVOL_objectsTabListContainer[data-tab="'+ tabId +'"]')
    newTabMenu.classList.add('CVOL_tabActiv')
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
    totalVolDisplay.innerText = (parseFloat(totalVolDisplay.textContent) + vol).toFixed(2)

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
        totalVolDisplay.innerText = (parseFloat(totalVolDisplay.textContent) - vol).toFixed(2)

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
