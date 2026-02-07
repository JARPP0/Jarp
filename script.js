let flowerList = [
["0b04c75706da1bdc012fbfdae80bf9c0", ['100,50', '2', '240,00'], 'rosa amarela', ['amarelo']],
["download", ['0,99', '10', '1040,99'], 'refri do ben10 gosto cerveja', ['rosa']],
['ece8233c8b0bd76f21e8d60dd4a873b6', ['183,47', '9', '934,43'], 'orquídia amarela', ['buquê']],
['flor', ['20,15', '9'], 'flor preta do bora bill', ['preto']],
['adc67d3e4bc0c51f35c15d1a6e412a6a', ['70,12', '5'], 'cacto roxo', ['azul']],
['2650708295f9ffc442cfa34d8d42fdf8', ['80,50', '2'], 'turquídia azul.', ['laranja']],
]
let startloading = true;
let innerwidth = 0;
let selectpos = 0;
let infosvgstring = `
    <svg class="info-svg" width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M130 0C201.797 0 260 58.203 260 130C260 201.797 201.797 260 130 260C58.203 260 0 201.797 0 130C0 58.203 58.203 0 130 0ZM130 28C73.667 28 28 73.667 28 130C28 186.333 73.667 232 130 232C186.333 232 232 186.333 232 130C232 73.667 186.333 28 130 28Z" fill="#D9D9D9"/>
        <circle cx="129.5" cy="85.5" r="14.5" fill="#D9D9D9"/>
        <rect x="117" y="121" width="25" height="85" rx="12.5" fill="#D9D9D9"/>
    </svg>
`
function leafloop(){
    for(let i = 1; i < 4; i++){
        gsap.to(`.leaf${i}`, {
            rotate: (-30*i),
            ease: "power2.inOut",
            duration: 5,
            delay: (i-1)*.4
        })
    }
    setTimeout(() => {
        for(let i = 1; i < 4; i++){
            gsap.to(`.leaf${i}`, {
                rotate: (-20*(i-1)),
                ease: "power2.inOut",
                duration: 5,
                delay: (i-1)*.4
            })
        }
        setTimeout(() => {
            leafloop()
        }, 4000)
    }, 5000)
}
function flowersloop(){
    gsap.to(`.flower1`, {
        rotate: 360,
        duration: 5,
        ease: "power2.inOut",
        onComplete: () => {
            gsap.set(`.flower1`, {
                rotate: 0,
            })
            flowersloop()
        }
    })
}
function generatecard(i){
    let typepromo = false
    if(flowerList[i % flowerList.length][1].length > 2){
        typepromo = true
    }
    return `
    <div class="card">
        <img loading="lazy" class="imagem" src="./Media/imagens/${flowerList[(i) % flowerList.length][0]}.jpg" alt="" width="300px">
        <div class="info-area">
            <div>
                <div>R$ ${flowerList[i % flowerList.length][1][0]}</div>
                <div>parcela em ${flowerList[i % flowerList.length][1][1]}x</div>
            </div>
            ${typepromo ? `<div style="text-decoration: line-through; color: rgb(172, 221, 195)">R$ ${flowerList[i % flowerList.length][1][2]}</div>` : ''}
        </div>
        <div>
            ${infosvgstring}
        </div>
        <div>
            ${flowerList[i % flowerList.length][2]}
        </div>
    </div>`
}
function verificationloop(){
    let newIW = window.innerWidth
    if((newIW !== innerwidth) || startloading){
        startloading = false
        let htmlText = ``
        if(newIW > 900){
            [term1, term2, term3, term4] = [``, ``, ``, ``]
            for(let i = 1; i < 100; i+=1){
                term1 += generatecard(i); term2 += generatecard(i+1)
                term3 += generatecard(i+2); term4 += generatecard(i+3)
            }
            htmlText = `
            <div class="card-column">${term1}</div>
            <div class="card-column">${term2}</div>
            <div class="card-column">${term3}</div>
            <div class="card-column">${term4}</div>`
        }
        else if(newIW > 700){
            [term1, term2, term3] = [``, ``, ``]
            for(let i = 1; i < 100; i+=1){
                term1 += generatecard(i); term2 += generatecard(i+1)
                term3 += generatecard(i+2)
            }
            htmlText = `
            <div class="card-column">${term1}</div>
            <div class="card-column">${term2}</div>
            <div class="card-column">${term3}</div>`
        }
        else{
            [term1, term2] = [``, ``]
            for(let i = 1; i < 100; i+=1){
                term1 += generatecard(i); term2 += generatecard(i+1)
            }
            htmlText = `
            <div class="card-column">${term1}</div>
            <div class="card-column">${term2}</div>
            `
        }
        document.querySelector(`.card-list`).innerHTML = htmlText
    }
    innerwidth = newIW
    requestAnimationFrame(() => {
        verificationloop()
    })
}
function navline(selection){
    gsap.to(`.nav-line-triangle`, {
        left: `calc(${selection * 25 + 12.5}% - 98px)`,
        duration: 0.4
    })
    Array.from(document.querySelector(`.cont`).children).forEach((ele, ind) => {
        if(ind == selection) ele.className = "selected"
        else ele.className = "unselected"
    })
}
document.querySelector(`.cont`).addEventListener('click', (e) => e.preventDefault())
verificationloop()
leafloop()
flowersloop()

// CONSERTAR LÓGICA DE APARIÇÃO    ()
// CAIXA DE SELEÇÃO                ()
// FIGMA ICONS                     ()
// SISTEMA DE MOVER PÁGINA         ()
// OTIMIZAR PÁGINA, OBSERVER       ()
// CONSERTAR TRAINGULO DE SELEÇÃO  ( check )
// CONSERTAR FLOWER                ( check )
// FAZER GALERIA DE FLORES         ( check )