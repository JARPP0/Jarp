class Pessoa {
    
}
let set = [
["Rodobelo", 2, "Gato mascote da escola"]
, ["Rodobelo : CATciquismo KATkos-(Líder TriMAW)", 2468, "Dono de uma tribo indígena"]

, ["Marcella", 3, "Mina da sala que gosta de ler"]
, ["Marcella : Branca de Neve", 960, "Nínguem sabe se tá morta, ou dormindo"]
, ["Marcella : Babel", 130500, ""]

, ["Bia", 4, "'Sobrecarga de Mídias'"]
, ["Bia : Rica de Truco", 144, "A única que perdi, foi para doar dindin"]

, ["Paulo", 5, "Metade humano, metade rato"]
, ["Paulo : Gari", 700, "Trabaia nas ruas, na vivência do salário mínimo"]
, ["Paulo : Chesse Gem", 2000, "Um cristal que Paulo jones procurava"]
, ["Paulo : Gostosão", 550000, ""]

, ["Arthur", 8, "Obsessão por Cartas"]
, ["Arthur : MetalBat-I", 80, "I-Armadura, PROVIDENCIADO DE (garrafa de metal)"]
, ["Arthur : MB.Cheatin'Balatro-II", 1480, "II-Armadura, PROVIDENCIADO DE (cheats maliciosos)"]
, ["Arthur : MBChB-III.deck", 32960, "III-Armadura, PROVIDENCIADO DE (mutação de maconheiro)"]

, ["Pedro", 10, "Pleno, Pequeno, Não ocupa terreno, e fala: posto e torto que dá desconforto"]
, ["Pedro : EmpresárioCLT", 1010, "..."]
, ["Pedro : onu.inss.₱€Đ₹Ø.brl.ibge", 101010, "'Me dá dinheiro'"]

, ["Sabrina", 12, "..."]
, ["Sabrina : Fofíris", 150000, "..."]

, ["ArthurCorreia", 15, "Rei do gel"]
, ["ArthurCorreia : Gomu Gomu No Mi", 2400, ""]
, ["ArthurCorreia : 0⁰2² Shuckle ¹1³3", 75000, ""]

, ["Kauany", 20, "..."]
, ["Kauany : Funkin", 260, "..."]

, ["Vinícius", 25, "Gosta de Strôgonobòlónofóff"]
, ["Vinícius : Gnose", 386100, "Consente-me avistá-la-lho, se m’o desejares expor-lha além deste cosmo, pois conferi-mo-la-iam, caso to-lo consintissem."]

, ["Lucas", 45, "Assistindo rolar a bola, tomando coca-cola vindo da sacola"]
, ["Lucas : CR7", 3600, "LuCR7 atira no gol, do outro gol"]

, ["Nathan", 45, "Ouh, ALEXA, ouh, ouh, ALEXA!"]
, ["Nathan : Camisa10", 5400, "Jogador Profissa"]

, ["Pietro", 45, ""]
, ["Pietro : Synthesis", 202500, ""]

, ["Wallison", 50, "amigo do Titíco"]

, ["Titíco", 50, "Risadinha, amigo do Walisson"]
, ["Titíco : Coringa", 500, "Risadinha marota, Risadinha falsa"]

, ["Alexandre", 55, "Funkeiro redimido"]
, ["Alexandre : LÍDER", 825, "Mandando, Devendo, Pão de queijo"]
, ["Alexandre : O GRANDE", 412500, "..."]

, ["Hiarles", 55, "Gordinho"]

, ["Miguel", 65, ""]

, ["Guilherme", 69, "'Arco de vilão da torre de cartas destruída'"]
, ["Guilherme : NegãoMan", 552, "Despertada a sua braveza, pronto para aniquilar"]

, ["Bigode", 75, "'Reconheço esta curvatura desta pelagem facial de longe"]

, ["Luís", 75, "..."]

, ["Matheus", 80, "Demolindo sorrindo"]
, ["Matheus : Boiadero", 1280, "'É U É'"]

, ["Yuri", 90, ""]
, ["Yuri : FreefiRe p/Vp", 41850, ""]

, ["Alison", 100, "De fé, ele é"]
, ["Alison : BoxGoat", 8000, "ÍDOLOdoBOX"]

, ["Yago", 191, "Enforca hermano"]
, ["Yago : Yb/ eliteHacker /bY", 13370, "Na elite invadindo onlyfans de presidentes"]

, ["Maria", 400, "Ser de potência subestimada, mas gosta de um chocolate"]
, ["Maria : CROOCS", 7600, "CROOCS mortal, seu arremesso exala moral"]

, ["Thales", 685, "Ainda bem que sabem que é mentira -2025"]
, ["Thales : Mileto", 13700, "Beira Omniconciência"]

, ["PedroGRANDE", 1275, "Ônibus é um lego"]
, ["PedroGRANDE : Galaxy", 1083700, "Fuma meteoro e sai nebulosas"]

, ["T A R Z A N", 1400, "'êêêêêêêêê!!'"]

, ["Arlan", 1500, "..."]
, ["Arlan : MoniDOR", 52500, "..."]

, ["Rafael", 1665, "Estou vendo gente morta!!"]
, ["Rafael : Necromância", 66600, "'Meu segundO empRego, enTeudEu'"]

, ["Gigante", 4000, "..."]

, ["Pombo gordo", 27500, ""]

]
set = set.sort((a, b) => a[1] - b[1])
let bioming = [
    ['Sala', '200/200']
  , ['Pátio', '300/25']
  , ['Refeitório', '500/20']
  , ['Quadra', '750/40']
  , ['Jardim', '1000/20']
  , ['Coworking', '1200/35']
]
let activebiome = true
let button = document.querySelector(`#btn`);
let grow = false;
let r = 1;
button.addEventListener(`mouseenter`, () => {grow = true;});
button.addEventListener(`mouseleave`, () => {grow = false});
setInterval(() => {
    if(grow){r = r > 50 ? r: r+3}
    else{r = r < 2 ? r: r-3}
    document.getElementById(`circlin`).setAttribute(`r`, r)
    if(r < 2){
        document.getElementById(`circle`).style.opacity = 0;
    }
    else{
        document.getElementById(`circle`).style.opacity = 1;
    }
})
bioming = bioming.map((ele) => [ele[0], (ele[1]).split('/')[0], (ele[1]).split('/')[1]])

setInterval(() => {
    if(activebiome){
        biome = roll(bioming, 1)
        if(biome[2] !== 'Sala'){
            activebiome = false
            document.getElementById(`biome`).innerHTML = `Bioma: ${biome[2]}`
            setTimeout(() => {
                activebiome = true
            }, biome[1] * 100)
        }
    }
}, 1000)

let acr = []
for(let i of set){
    let veri = i[0].replaceAll(`(`, `u`)
    veri = i[0].replaceAll(`)`, `u`)
    veri = i[0].replaceAll(` `, `s`)
    acr.push(`${(veri.slice(0, 1)).toLowerCase()}${(veri.slice(-2)).toLowerCase()}`)
}
let indexSet = [];
for(let i of acr){
    indexs = acr.reduce((acc, ele, ind) => {
    if(ele === i){acc.push(ind)}
    return acc
    }, [])
    if(indexSet.findIndex((ele) => {return ele[0] === indexs[0] && ele[1] === indexs[1]}) === -1){
        indexSet.push(indexs)
    }
}
indexSet.map((ele) => ele.shift());
for(let i of indexSet){
    let numb = 0;
    for(let j of i){
        numb++;
        acr[j] = `${acr[j]}${numb}`
    }
}

let restlist = []
let disp = []
set.forEach((ele, ind) => {
    disp.push([ele[0], ind])
})
let run = true;
let countNumb = 0;
let LuckAcc = 1
let listing = set.reduce((acc, ele, ind) => {
    acc.push([ele[0], ele[1], 60, ind])
    return acc
}, []);
listing = []
let transition = false;
let shopitemvar = [false, false]
let shopvarE = [false, false]
let static = false;
let rotate = 20;
let bounce = 10;
var velocity = 0;   
var position = 0;   
let gravity = 0.5;
let tl = gsap.timeline()
let shining = document.querySelectorAll(`.shine`)
let iteration = 0;
let stoping = false;


document.getElementById(`luck`).onclick = function (){
    LuckAcc += 55.5;
    document.getElementById(`luck`).textContent = LuckAcc;
}
document.getElementById(`btn`).addEventListener(`click`, ()=>{
    if (run) {
        // DECLARAÇÃO
        LuckAcc = 1
        speed = 1
        LuckAcc += (shopvarE[0]) ? 1: 0;
        speed += (shopvarE[1]) ? 1.5: 0;
        let luck = LuckAcc;
        let Deflist = roll(set, luck)
        const desc = document.getElementById(`desc`);
        const nome = document.getElementById(`nome`);
        const chance = document.getElementById(`chance`);
        const index = document.getElementById(`index`);
        const bar = document.getElementById(`cooldown-bar`);
        const count = document.getElementById(`count`);
        const gotlist = document.getElementById(`list`);
        transition = (Deflist[1] > 1000);
        time = (transition) ? [4, 20, 3000, 3.5, 1500] : [3.5, 1000, 1000, 3.5, 1500];
        time[0] /= speed; time[2] /= speed; time[3] /= speed; time[4] /= speed
        if(!transition){time[1] /= speed}
        // COOLDOWN
        run = false;
        bar.style.animation = `none`;
        setTimeout(() => {
            bar.style.animation = `exit ${time[3]}s ease-in forwards`;
        }, 10);

        //TRANSIÇÃO
        for (let i = 1; i < 10; i++) {
            let delay = time[4] / i;
            setTimeout(() => {
                list = roll(set, luck);
                nome.innerHTML = `<div id="${acr[list[0]]}" class="transition">${list[2]}</div>`;
                chance.innerHTML = `<div id="${acr[list[0]]}" class="transition chancing">1 em ???</div>`;
                nome.style.animation = ``;
                chance.style.animation = ``;
                void nome.offsetWidth;
                void chance.offsetWidth;
                setTimeout(() => {
                    nome.style.animation = `jump .4s`;
                }, 10);
                setTimeout(() => {
                    chance.style.animation = `jump .4s`;
                }, 80);
            }, delay);
        }
        // DEFINITIVO
        setTimeout(() => {
            if(transition){
                box()
                }
            setTimeout(() => {
                if(transition){
                    setTimeout(() => {
                        jump(acr[Deflist[0]], Deflist[2])
                    }, 6000)
                }
                if(!transition){nome.innerHTML = `<div id="${acr[Deflist[0]]}">${Deflist[2]}</div>`
                chance.innerHTML = `<div id="${acr[Deflist[0]]}" class="chancing">1 em ${Deflist[1]}</div>`;
                desc.innerHTML = `${set[set.findIndex((ele) => ele[0] === Deflist[2])][2]}`}
                else{nome.innerHTML = `???`
                chance.innerHTML = `1 em ???`
                desc.innerHTML = `???`}
                setTimeout(() => {
                    nome.innerHTML = `<div id="${acr[Deflist[0]]}">${Deflist[2]}</div>`
                    chance.innerHTML = `<div id="${acr[Deflist[0]]}" class="chancing">1 em ${Deflist[1]}</div>`;
                    desc.innerHTML = `${set[set.findIndex((ele) => ele[0] === Deflist[2])][2]}`
                }, 500)
                nome.style.animation = `none`;
                chance.style.animation = `none`;
                desc.style.animation = `none`;
                void nome.offsetWidth;
                void chance.offsetWidth;
                void desc.offsetWidth;
                count.innerHTML = countNumb;
                if (!(listing.some(item => item[0] === Deflist[2] && item[1] === Deflist[1]))) {
                    listing.push([Deflist[2], Deflist[1], 1, Deflist[0]]);
                    listing.sort((a, b) => a[1] - b[1]);
                }
                else {
                    found = listing.findIndex(item => item[0] === Deflist[2] && item[1] === Deflist[1])
                    listing[found][2] = listing[found][2] + 1
                }
                gotlist.innerHTML = ``
                for (let i of listing) {
                    gotlist.innerHTML += `
                    <div id="sellArea"><span class="sellName" id="${acr[i[3]]}"> ${i[0]} - 1 em ${i[1]}</span><span id="sellDropdown"><span id="sellInfo">Quantia: ${i[2]} <br>Cada: ${Math.ceil(Math.log(i[1]) / Math.log(1.2))} <br>Total: ${Math.ceil(Math.log(i[1]) / Math.log(1.2)) * i[2]}</span><span class="sellButton infoSellButton"><span class="sellText infoText">Info</span></span></span><button class="sellButton"><span class="sellText">Sell</span></button></div><br>`
                }
                console.log(gotlist.textContent)
                setTimeout(() => {
                    if(!transition){
                        nome.style.animation = `pulse .6s, jump .4s`;
                    }
                }, 10);
                setTimeout(() => {
                    chance.style.animation = `pulse .6s, jump .4s`;
                    desc.style.animation = `pulse .6s, jump .4s`;
                }, 80);
                setTimeout(() => {
                    run = true;
                }, time[2]);
            }, time[1])
        }, time[4])
    }
})

// BUG QUEBRA DE LINHA :3
// ANIMAÇÃO ENTRADA, SAÍDA
// SISTEMA FUNCIONAL
// BOTÃO DE QUANTIA

document.getElementById(`shop1`).onclick = function (){enable(1)}
document.getElementById(`shop2`).onclick = function (){enable(2)}
function box(){
    // FÍSICA
    iteration += 1;
    if(iteration === 1){
        animate();
        setInterval(() => {
            if(colide(`box`, `floor`)){
                if(bounce > 1){
                    rotate = -rotate * .7
                    gsap.to(`#box`, {
                        rotation: rotate,
                        duration: 1.5
                    })
                    if(bounce < 6){gsap.from(`#box`, {scaleY: .97})}
                    else if(bounce < 10){gsap.from(`#box`, {scaleY: .8})}
                
                    bounce-=1;
                }
                else{
                    gsap.to(`#box`, {
                        scaleY: 1,
                        rotation: 0,
                        duration: .1
                    })
                    static = true;
                    stoping = true;
                }
                velocity = -bounce;
            }
        }, 10)
    }

    // RESET BOX / STAR
    stoping = false;
    let content = document.querySelectorAll(`.content`)
    content.forEach((ele) => {
        gsap.to(ele, {opacity: 0, duration: 0.3})
    })
    document.getElementById(`svg-cont`).style.opacity = 1
    let openingLock = gsap.to(`#locker`, {
        height: '30',
        y: '-130',
        duration: '.01'
    })
    let openingRect = gsap.to(`#upperRect`, {
        y: '-60',
        height: '100',
        duration: '.01'
    })

    gsap.set(`#upperRect`, {
        y: '0',
        height: '50',
    })
    gsap.set(`#locker`, {
        y: '0',
        height: '40',
    })

    openingRect.restart().pause()
    openingLock.restart().pause()

    static = false;
    rotate = 20;
    bounce = 10;
    velocity = 0;  
    position = 0;
    rotation = 0;
    
    gsap.set(`#svg-star-cont`, {
        opacity: 0,
        rotation: 0
    })

    shining.forEach((ele) => {
        ele.style.opacity = 0
    })
    document.body.style.background = `white`
    document.body.style.transition = `2s ease-out`
    setTimeout(() => {
        shining.forEach((ele) => {
            gsap.to(ele, {opacity: 1})
            document.body.style.backgroundRepeat = `no-repeat`
            document.body.style.backgroundSize = `cover`
            document.body.style.backgroundAttachment = `fixed`
            document.body.style.backgroundColor = `rgb(53, 46, 70)`
            document.body.style.transition = `none`
        })
    }, 2000)
    setTimeout(() => {
        openingLock.restart()
        openingRect.restart()
        tl.set(`#svg-star-cont`, {opacity: 1})
            .to(`#svg-star-cont`, {rotation: 120})
            .to(`#svg-star-cont`, {opacity: 0}, '-=.5')
    }, 4500)
    setTimeout(() => {
        document.getElementById(`svg-cont`).style.opacity = 0
            content.forEach((ele) => {
            gsap.to(ele, {opacity: 1, duration: 0.8})
            })
        document.body.style.background = `white`
    }, 6000)
}
function jump(id, styleContent){
    let text = document.getElementById(`${id}`).textContent;
    if(text.includes(`-`)){text = text.slice(0, text.lastIndexOf("-")).trim()}else{text.trim()}
    text = [...text]
    let charlgt = text.length
    text = text.map((ele, ind) => {
        let rndHeight = Math.trunc(Math.random() * 25) + 5
        let rndMove = Math.trunc(Math.random() * 60) - 30;
        let ver = ele;
        if(ele === " "){ver = `&nbsp`}
        return `<span id="${id}"><span style="
        transition: .3s ease-out;
        --height: ${rndHeight};
        --move: ${rndMove};
        opacity: 0;
        display: inline-block;
        "id="rareJump${ind}"><span style=
        "display: inline-block;" id="move${ind}">${ver}</span></span></span>`
    }).join("");
    document.getElementById(`nome`).innerHTML = text;
    for(let i = 0; i < charlgt; i++){
        let rndTime = Math.trunc(Math.random() * 1) + .7;
        setTimeout(() => {
            document.getElementById(`rareJump${i}`).style.animation = `none`
            document.getElementById(`move${i}`).style.animation = `none`
        }, i*10);
        setTimeout(() => {
            document.getElementById(`rareJump${i}`).style.opacity = 1
            document.getElementById(`move${i}`).style.opacity = 1
            document.getElementById(`rareJump${i}`).style.animation = `rareJump ${rndTime}s forwards, paint .6s forwards`
            document.getElementById(`move${i}`).style.animation = `move ${rndTime}s forwards`
        }, i*10 + 10)
    }
    setTimeout(() => {
        document.querySelector(`#nome`).innerHTML = `<div id="${id}">${styleContent}</div>`;
        console.log(`kaboom`)
    }, charlgt * 100 + 2000)
}
function roll(set, luck) {
    let original = set.map(ele => ele[1])
    let names = set.map(ele => ele[0])
    set = set.map((ele, index) => [ele[0], index, ele[1] / luck])
    set = set.filter((ele) => ele[2] > 1)
    let ind = (set[0])[1]
    set.forEach((ele) => {
        if (random(ele[2])) {
            ind = ele[1];
        }
    });
    return [ind, original[ind], names[ind]]
}
function random(numb) {
    let rnd = Math.random()
    if (rnd < (1 / numb)) {
        return true;
    }
    else {
        return false;
    }
}
function buy(numb){
    let req = []; let nam = []; let sequence = 0
    let list = document.querySelectorAll(`.shop #shopdropdown > .place:nth-of-type(${numb}) > div`)
    list = [...list]
    mut = listing.map(ele => {
        if(ele[0].includes(":")){
            return (ele[0].slice(ele[0].indexOf(":") + 1)).trim()
        }
        else{
            return ele[0];
        }
    })
    list.forEach((ele) => {
        ele = ele.textContent
        req.push(Number((ele.split("-"))[0])); nam.push(((ele.split("-"))[1]).trim())
    })
    for(let i = 0; i < nam.length; i++){
        if(!(mut.findIndex(ele => (ele) === nam[i]) === -1)){
            sequence = (listing[mut.findIndex((ele) => ele === nam[i])][2] >= req[i]) ? sequence+1: sequence
        }
    }
    if(sequence === list.length){
        for(let i = 0; i < nam.length; i++){
            listing[mut.findIndex((ele) => ele === nam[i])][2] -= req[i]
            document.getElementById(`list`).innerHTML = ``
            for (let i of listing) {
                document.getElementById(`list`).innerHTML += `<span id="outside">${i[2]} ~ </span><span id="${acr[i[3]]}"> ${i[0]} - 1 em ${i[1]}</span><br>`
            }
        }
        shopitemvar[numb-1] = true;
        document.getElementById(`shop${numb}`).innerHTML = `Equipar`
    }
}
function enable(numb){
    restlist = shopvarE.filter((_, ind) => {
        return ind !== numb-1
    })
    if(shopitemvar[numb-1]){
        if(!(restlist.some((ele) => ele === true))){
            if(shopvarE[numb-1]){
                shopvarE[numb-1] = false;
                document.getElementById(`shop${numb}`).innerHTML = `Equipar`
                document.getElementById(`place${numb}`).style.backgroundColor = '#f9f9f9'
                document.getElementById(`place${numb}`).style.border = `2px dashed rgb(221, 255, 223)`
            }
            else{
                shopvarE[numb-1] = true;
                document.getElementById(`shop${numb}`).innerHTML = `Desequipar`
                document.getElementById(`place${numb}`).style.backgroundColor = 'rgb(205, 255, 221)'
                document.getElementById(`place${numb}`).style.border = `2px dashed rgb(215, 255, 218)`
            }
        }
    }
    else{
        buy(numb)
    }
}
function colide(el1, el2) {
    el1 = document.getElementById(el1);
    el2 = document.getElementById(el2);

    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();

    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}
function animate() {
    if(static && velocity > 0){
        rotate = 20;
        bounce = 10;
        static = false;
    }
    velocity += gravity; 
    position += velocity;
    if(!stoping){
        gsap.set('#box', { y: position});
    }
    requestAnimationFrame(animate);
}
/* Escola:
sala / pátio / refeitório / jardim / quadra / coworking /// PJ macumba 
Fora:
xique xique bahia / Inepresente /// espaço sideral


, ["Rodobelo", 2, "Gato mascote da escola"]  - patio
, ["Rodobelo : CATciquismo KATkos-(Líder TriMAW)", 2468, "Dono de uma tribo indígena"] - jardim

, ["Marcella", 3, "Mina da sala que gosta de ler"]
, ["Marcella : Branca de Neve", 960, "Nínguem sabe se tá morta, ou dormindo"]
, ["Marcella : Babel", 130500, ""]

, ["Bia", 4, "'Sobrecarga de Mídias'"]
, ["Bia : Rica de Truco", 144, "A única que perdi, foi para doar dindin"]

, ["Paulo", 5, "Metade humano, metade rato"] - refeitório
, ["Paulo : Gari", 700, "Trabaia nas ruas, na vivência do salário mínimo"] - xique xique bahia
, ["Paulo : Chesse Gem", 2000, "Um cristal que Paulo jones procurava"] - natureza
, ["Paulo : Gostosão", 550000, ""]

, ["Arthur", 8, "Obsessão por Cartas"]
, ["Arthur : MetalBat-I", 80, "I-Armadura, PROVIDENCIADO DE (garrafa de metal)"]
, ["Arthur : MB.Cheatin'Balatro-II", 1480, "II-Armadura, PROVIDENCIADO DE (cheats maliciosos)"]
, ["Arthur : MBChB-III.deck", 32960, "III-Armadura, PROVIDENCIADO DE (mutação de maconheiro)"] - pj macumba

, ["Pedro", 10, "Pleno, Pequeno, Não ocupa terreno, e fala: posto e torto que dá desconforto"] - cowork
, ["Pedro : EmpresárioCLT", 1010, "..."]  - xique xique bahia
, ["Pedro : onu.inss.₱€Đ₹Ø.brl.ibge", 101010, "'Me dá dinheiro'"] - Inepresente

, ["Sabrina", 12, "..."]
, ["Sabrina : Fofíris", 150000, "..."] - inepresente

, ["ArthurCorreia", 15, "Rei do gel"]
, ["ArthurCorreia : Gomu Gomu No Mi", 2400, ""]
, ["ArthurCorreia : 0⁰2² Shuckle ¹1³3", 75000, ""]

, ["Kauany", 20, "..."]
, ["Kauany : Funkin", 260, "..."]

, ["Vinícius", 25, "Gosta de Strôgonobòlónofóff"] - refeitório
, ["Vinícius : Gnose", 386100, "Consente-me avistá-la-lho, se m’o desejares expor-lha além deste cosmo, pois conferi-mo-la-iam, caso to-lo consintissem."] - jardim

, ["Lucas", 45, "Assistindo rolar a bola, tomando coca-cola vindo da sacola"]
, ["Lucas : CR7", 3600, "LuCR7 atira no gol, do outro gol"] - quadra

, ["Nathan", 45, "Ouh, ALEXA, ouh, ouh, ALEXA!"]
, ["Nathan : Camisa10", 5400, "Jogador Profissa"] - quadra

, ["Pietro", 45, ""]
, ["Pietro : Synthesis", 202500, ""] - pj macumba

, ["Wallison", 50, "amigo do Titíco"] - patio

, ["Titíco", 50, "Risadinha, amigo do Walisson"]
, ["Titíco : Coringa", 500, "Risadinha marota, Risadinha falsa"]

, ["Alexandre", 55, "Funkeiro redimido"] - patio
, ["Alexandre : LÍDER", 825, "Mandando, Devendo, Pão de queijo"] - quadra
, ["Alexandre : O GRANDE", 412500, "..."] - inepresente

, ["Hiarles", 55, "Gordinho"] - patio

, ["Miguel", 65, ""]

, ["Guilherme", 69, "'Arco de vilão da torre de cartas destruída'"]
, ["Guilherme : NegãoMan", 552, "Despertada a sua braveza, pronto para aniquilar"]

, ["Bigode", 75, "'Reconheço esta curvatura desta pelagem facial de longe"] - cowork

, ["Luís", 75, "..."] - patio

, ["Matheus", 80, "Demolindo sorrindo"]
, ["Matheus : Boiadero", 1280, "'É U É'"]

, ["Yuri", 90, ""]
, ["Yuri : FreefiRe p/Vp", 41850, ""] - xxb

, ["Alison", 100, "De fé, ele é"]
, ["Alison : BoxGoat", 8000, "ÍDOLOdoBOX"] - xxb

, ["Yago", 191, "Enforca hermano"] - cowork
, ["Yago : Yb/ eliteHacker /bY", 13370, "Na elite invadindo onlyfans de presidentes"] - cowork

, ["Maria", 400, "Ser de potência subestimada, mas gosta de um chocolate"]
, ["Maria : CROOCS", 7600, "CROOCS mortal, seu arremesso exala moral"]

, ["Thales", 685, "Ainda bem que sabem que é mentira -2025"]
, ["Thales : Mileto", 13700, "Beira Omniconciência"]

, ["PedroGRANDE", 1275, "Ônibus é um lego"]
, ["PedroGRANDE : Galaxy", 1083700, "Fuma meteoro e sai nebulosas"] - espaço sideral

, ["T A R Z A N", 1400, "'êêêêêêêêê!!'"] - jardim

, ["Arlan", 1500, "..."]
, ["Arlan : MoniDOR", 52500, "..."]

, ["Rafael", 1665, "Estou vendo gente morta!!"]
, ["Rafael : Necromância", 66600, "'Meu segundO empRego, enTeudEu'"] - jardim

, ["Gigante", 4000, "..."]

, ["Pombo gordo", 27500, ""] - jardim
=======
class Pessoa {
    
}
let set = [
["Rodobelo", 2, "Gato mascote da escola"]
, ["Rodobelo : CATciquismo KATkos-(Líder TriMAW)", 2468, "Dono de uma tribo indígena"]

, ["Marcella", 3, "Mina da sala que gosta de ler"]
, ["Marcella : Branca de Neve", 960, "Nínguem sabe se tá morta, ou dormindo"]
, ["Marcella : Babel", 130500, ""]

, ["Bia", 4, "'Sobrecarga de Mídias'"]
, ["Bia : Rica de Truco", 144, "A única que perdi, foi para doar dindin"]

, ["Paulo", 5, "Metade humano, metade rato"]
, ["Paulo : Gari", 700, "Trabaia nas ruas, na vivência do salário mínimo"]
, ["Paulo : Chesse Gem", 2000, "Um cristal que Paulo jones procurava"]
, ["Paulo : Gostosão", 550000, ""]

, ["Arthur", 8, "Obsessão por Cartas"]
, ["Arthur : MetalBat-I", 80, "I-Armadura, PROVIDENCIADO DE (garrafa de metal)"]
, ["Arthur : MB.Cheatin'Balatro-II", 1480, "II-Armadura, PROVIDENCIADO DE (cheats maliciosos)"]
, ["Arthur : MBChB-III.deck", 32960, "III-Armadura, PROVIDENCIADO DE (mutação de maconheiro)"]

, ["Pedro", 10, "Pleno, Pequeno, Não ocupa terreno, e fala: posto e torto que dá desconforto"]
, ["Pedro : EmpresárioCLT", 1010, "..."]
, ["Pedro : onu.inss.₱€Đ₹Ø.brl.ibge", 101010, "'Me dá dinheiro'"]

, ["Sabrina", 12, "..."]
, ["Sabrina : Fofíris", 150000, "..."]

, ["ArthurCorreia", 15, "Rei do gel"]
, ["ArthurCorreia : Gomu Gomu No Mi", 2400, ""]
, ["ArthurCorreia : 0⁰2² Shuckle ¹1³3", 75000, ""]

, ["Kauany", 20, "..."]
, ["Kauany : Funkin", 260, "..."]

, ["Vinícius", 25, "Gosta de Strôgonobòlónofóff"]
, ["Vinícius : Gnose", 386100, "Consente-me avistá-la-lho, se m’o desejares expor-lha além deste cosmo, pois conferi-mo-la-iam, caso to-lo consintissem."]

, ["Lucas", 45, "Assistindo rolar a bola, tomando coca-cola vindo da sacola"]
, ["Lucas : CR7", 3600, "LuCR7 atira no gol, do outro gol"]

, ["Nathan", 45, "Ouh, ALEXA, ouh, ouh, ALEXA!"]
, ["Nathan : Camisa10", 5400, "Jogador Profissa"]

, ["Pietro", 45, ""]
, ["Pietro : Synthesis", 202500, ""]

, ["Wallison", 50, "amigo do Titíco"]

, ["Titíco", 50, "Risadinha, amigo do Walisson"]
, ["Titíco : Coringa", 500, "Risadinha marota, Risadinha falsa"]

, ["Alexandre", 55, "Funkeiro redimido"]
, ["Alexandre : LÍDER", 825, "Mandando, Devendo, Pão de queijo"]
, ["Alexandre : O GRANDE", 412500, "..."]

, ["Hiarles", 55, "Gordinho"]

, ["Miguel", 65, ""]

, ["Guilherme", 69, "'Arco de vilão da torre de cartas destruída'"]
, ["Guilherme : NegãoMan", 552, "Despertada a sua braveza, pronto para aniquilar"]

, ["Bigode", 75, "'Reconheço esta curvatura desta pelagem facial de longe"]

, ["Luís", 75, "..."]

, ["Matheus", 80, "Demolindo sorrindo"]
, ["Matheus : Boiadero", 1280, "'É U É'"]

, ["Yuri", 90, ""]
, ["Yuri : FreefiRe p/Vp", 41850, ""]

, ["Alison", 100, "De fé, ele é"]
, ["Alison : BoxGoat", 8000, "ÍDOLOdoBOX"]

, ["Yago", 191, "Enforca hermano"]
, ["Yago : Yb/ eliteHacker /bY", 13370, "Na elite invadindo onlyfans de presidentes"]

, ["Maria", 400, "Ser de potência subestimada, mas gosta de um chocolate"]
, ["Maria : CROOCS", 7600, "CROOCS mortal, seu arremesso exala moral"]

, ["Thales", 685, "Ainda bem que sabem que é mentira -2025"]
, ["Thales : Mileto", 13700, "Beira Omniconciência"]

, ["PedroGRANDE", 1275, "Ônibus é um lego"]
, ["PedroGRANDE : Galaxy", 1083700, "Fuma meteoro e sai nebulosas"]

, ["T A R Z A N", 1400, "'êêêêêêêêê!!'"]

, ["Arlan", 1500, "..."]
, ["Arlan : MoniDOR", 52500, "..."]

, ["Rafael", 1665, "Estou vendo gente morta!!"]
, ["Rafael : Necromância", 66600, "'Meu segundO empRego, enTeudEu'"]

, ["Gigante", 4000, "..."]

, ["Pombo gordo", 27500, ""]

]
set = set.sort((a, b) => a[1] - b[1])
let bioming = [
    ['Sala', '200/200']
  , ['Pátio', '300/25']
  , ['Refeitório', '500/20']
  , ['Quadra', '750/40']
  , ['Jardim', '1000/20']
  , ['Coworking', '1200/35']
]
let activebiome = true
let button = document.querySelector(`#btn`);
let grow = false;
let r = 1;
button.addEventListener(`mouseenter`, () => {grow = true;});
button.addEventListener(`mouseleave`, () => {grow = false});
setInterval(() => {
    if(grow){r = r > 50 ? r: r+3}
    else{r = r < 2 ? r: r-3}
    document.getElementById(`circlin`).setAttribute(`r`, r)
    if(r < 2){
        document.getElementById(`circle`).style.opacity = 0;
    }
    else{
        document.getElementById(`circle`).style.opacity = 1;
    }
})
bioming = bioming.map((ele) => [ele[0], (ele[1]).split('/')[0], (ele[1]).split('/')[1]])

setInterval(() => {
    if(activebiome){
        biome = roll(bioming, 1)
        if(biome[2] !== 'Sala'){
            activebiome = false
            document.getElementById(`biome`).innerHTML = `Bioma: ${biome[2]}`
            setTimeout(() => {
                activebiome = true
            }, biome[1] * 100)
        }
    }
}, 1000)

let acr = []
for(let i of set){
    let veri = i[0].replaceAll(`(`, `u`)
    veri = i[0].replaceAll(`)`, `u`)
    veri = i[0].replaceAll(` `, `s`)
    acr.push(`${(veri.slice(0, 1)).toLowerCase()}${(veri.slice(-2)).toLowerCase()}`)
}
let indexSet = [];
for(let i of acr){
    indexs = acr.reduce((acc, ele, ind) => {
    if(ele === i){acc.push(ind)}
    return acc
    }, [])
    if(indexSet.findIndex((ele) => {return ele[0] === indexs[0] && ele[1] === indexs[1]}) === -1){
        indexSet.push(indexs)
    }
}
indexSet.map((ele) => ele.shift());
for(let i of indexSet){
    let numb = 0;
    for(let j of i){
        numb++;
        acr[j] = `${acr[j]}${numb}`
    }
}

let restlist = []
let disp = []
set.forEach((ele, ind) => {
    disp.push([ele[0], ind])
})
let run = true;
let countNumb = 0;
let LuckAcc = 1
let listing = set.reduce((acc, ele, ind) => {
    acc.push([ele[0], ele[1], 60, ind])
    return acc
}, []);
listing = []
let transition = false;
let shopitemvar = [false, false]
let shopvarE = [false, false]
let static = false;
let rotate = 20;
let bounce = 10;
var velocity = 0;   
var position = 0;   
let gravity = 0.5;
let tl = gsap.timeline()
let shining = document.querySelectorAll(`.shine`)
let iteration = 0;
let stoping = false;


document.getElementById(`luck`).onclick = function (){
    LuckAcc += 55.5;
    document.getElementById(`luck`).textContent = LuckAcc;
}
document.getElementById(`btn`).addEventListener(`click`, ()=>{
    if (run) {
        // DECLARAÇÃO
        LuckAcc = 1
        speed = 1
        LuckAcc += (shopvarE[0]) ? 1: 10;
        speed += (shopvarE[1]) ? 1.5: 0;
        let luck = LuckAcc;
        let Deflist = roll(set, luck)
        const desc = document.getElementById(`desc`);
        const nome = document.getElementById(`nome`);
        const chance = document.getElementById(`chance`);
        const index = document.getElementById(`index`);
        const bar = document.getElementById(`cooldown-bar`);
        const count = document.getElementById(`count`);
        const gotlist = document.getElementById(`list`);
        transition = (Deflist[1] > 1000);
        time = (transition) ? [4, 20, 3000, 3.5, 1500] : [3.5, 1000, 1000, 3.5, 1500];
        time[0] /= speed; time[2] /= speed; time[3] /= speed; time[4] /= speed
        if(!transition){time[1] /= speed}
        // COOLDOWN
        run = false;
        bar.style.animation = `none`;
        setTimeout(() => {
            bar.style.animation = `exit ${time[3]}s ease-in forwards`;
        }, 10);

        //TRANSIÇÃO
        for (let i = 1; i < 10; i++) {
            let delay = time[4] / i;
            setTimeout(() => {
                list = roll(set, luck);
                nome.innerHTML = `<div id="${acr[list[0]]}" class="transition">${list[2]}</div>`;
                chance.innerHTML = `<div id="${acr[list[0]]}" class="transition chancing">1 em ???</div>`;
                nome.style.animation = ``;
                chance.style.animation = ``;
                void nome.offsetWidth;
                void chance.offsetWidth;
                setTimeout(() => {
                    nome.style.animation = `jump .4s`;
                }, 10);
                setTimeout(() => {
                    chance.style.animation = `jump .4s`;
                }, 80);
            }, delay);
        }
        // DEFINITIVO
        setTimeout(() => {
            if(transition){
                box()
                }
            setTimeout(() => {
                if(transition){
                    setTimeout(() => {
                        jump(acr[Deflist[0]], Deflist[2])
                    }, 6000)
                }
                if(!transition){nome.innerHTML = `<div id="${acr[Deflist[0]]}">${Deflist[2]}</div>`
                chance.innerHTML = `<div id="${acr[Deflist[0]]}" class="chancing">1 em ${Deflist[1]}</div>`;
                desc.innerHTML = `${set[set.findIndex((ele) => ele[0] === Deflist[2])][2]}`}
                else{nome.innerHTML = `???`
                chance.innerHTML = `1 em ???`
                desc.innerHTML = `???`}
                setTimeout(() => {
                    nome.innerHTML = `<div id="${acr[Deflist[0]]}">${Deflist[2]}</div>`
                    chance.innerHTML = `<div id="${acr[Deflist[0]]}" class="chancing">1 em ${Deflist[1]}</div>`;
                    desc.innerHTML = `${set[set.findIndex((ele) => ele[0] === Deflist[2])][2]}`
                }, 500)
                nome.style.animation = `none`;
                chance.style.animation = `none`;
                desc.style.animation = `none`;
                void nome.offsetWidth;
                void chance.offsetWidth;
                void desc.offsetWidth;
                count.innerHTML = countNumb;
                if (!(listing.some(item => item[0] === Deflist[2] && item[1] === Deflist[1]))) {
                    listing.push([Deflist[2], Deflist[1], 1, Deflist[0]]);
                    listing.sort((a, b) => a[1] - b[1]);
                }
                else {
                    found = listing.findIndex(item => item[0] === Deflist[2] && item[1] === Deflist[1])
                    listing[found][2] = listing[found][2] + 1
                }
                gotlist.innerHTML = ``
                for (let i of listing) {
                    gotlist.innerHTML += `
                    <div id="sellArea"><span class="sellName" id="${acr[i[3]]}"> ${i[0]} - 1 em ${i[1]}</span><span id="sellDropdown"><span id="sellInfo">Quantia: ${i[2]} <br>Cada: ${Math.ceil(Math.log(i[1]) / Math.log(1.2))} <br>Total: ${Math.ceil(Math.log(i[1]) / Math.log(1.2)) * i[2]}</span><span class="sellButton infoSellButton"><span class="sellText infoText">Info</span></span></span><button class="sellButton"><span class="sellText">Sell</span></button></div><br>`
                }
                console.log(gotlist.textContent)
                setTimeout(() => {
                    if(!transition){
                        nome.style.animation = `pulse .6s, jump .4s`;
                    }
                }, 10);
                setTimeout(() => {
                    chance.style.animation = `pulse .6s, jump .4s`;
                    desc.style.animation = `pulse .6s, jump .4s`;
                }, 80);
                setTimeout(() => {
                    run = true;
                }, time[2]);
            }, time[1])
        }, time[4])
    }
})

// BUG QUEBRA DE LINHA :3
// ANIMAÇÃO ENTRADA, SAÍDA
// SISTEMA FUNCIONAL
// BOTÃO DE QUANTIA

document.getElementById(`shop1`).onclick = function (){enable(1)}
document.getElementById(`shop2`).onclick = function (){enable(2)}
function box(){
    // FÍSICA
    iteration += 1;
    if(iteration === 1){
        animate();
        setInterval(() => {
            if(colide(`box`, `floor`)){
                if(bounce > 1){
                    rotate = -rotate * .7
                    gsap.to(`#box`, {
                        rotation: rotate,
                        duration: 1.5
                    })
                    if(bounce < 6){gsap.from(`#box`, {scaleY: .97})}
                    else if(bounce < 10){gsap.from(`#box`, {scaleY: .8})}
                
                    bounce-=1;
                }
                else{
                    gsap.to(`#box`, {
                        scaleY: 1,
                        rotation: 0,
                        duration: .1
                    })
                    static = true;
                    stoping = true;
                }
                velocity = -bounce;
            }
        }, 10)
    }

    // RESET BOX / STAR
    stoping = false;
    let content = document.querySelectorAll(`.content`)
    content.forEach((ele) => {
        gsap.to(ele, {opacity: 0, duration: 0.3})
    })
    document.getElementById(`svg-cont`).style.opacity = 1
    let openingLock = gsap.to(`#locker`, {
        height: '30',
        y: '-130',
        duration: '.01'
    })
    let openingRect = gsap.to(`#upperRect`, {
        y: '-60',
        height: '100',
        duration: '.01'
    })

    gsap.set(`#upperRect`, {
        y: '0',
        height: '50',
    })
    gsap.set(`#locker`, {
        y: '0',
        height: '40',
    })

    openingRect.restart().pause()
    openingLock.restart().pause()

    static = false;
    rotate = 20;
    bounce = 10;
    velocity = 0;  
    position = 0;
    rotation = 0;
    
    gsap.set(`#svg-star-cont`, {
        opacity: 0,
        rotation: 0
    })

    shining.forEach((ele) => {
        ele.style.opacity = 0
    })
    document.body.style.background = `white`
    document.body.style.transition = `2s ease-out`
    setTimeout(() => {
        shining.forEach((ele) => {
            gsap.to(ele, {opacity: 1})
            document.body.style.backgroundRepeat = `no-repeat`
            document.body.style.backgroundSize = `cover`
            document.body.style.backgroundAttachment = `fixed`
            document.body.style.backgroundColor = `rgb(53, 46, 70)`
            document.body.style.transition = `none`
        })
    }, 2000)
    setTimeout(() => {
        openingLock.restart()
        openingRect.restart()
        tl.set(`#svg-star-cont`, {opacity: 1})
            .to(`#svg-star-cont`, {rotation: 120})
            .to(`#svg-star-cont`, {opacity: 0}, '-=.5')
    }, 4500)
    setTimeout(() => {
        document.getElementById(`svg-cont`).style.opacity = 0
            content.forEach((ele) => {
            gsap.to(ele, {opacity: 1, duration: 0.8})
            })
        document.body.style.background = `white`
    }, 6000)
}
function jump(id, styleContent){
    let text = document.getElementById(`${id}`).textContent;
    if(text.includes(`-`)){text = text.slice(0, text.lastIndexOf("-")).trim()}else{text.trim()}
    text = [...text]
    let charlgt = text.length
    text = text.map((ele, ind) => {
        let rndHeight = Math.trunc(Math.random() * 25) + 5
        let rndMove = Math.trunc(Math.random() * 60) - 30;
        let ver = ele;
        if(ele === " "){ver = `&nbsp`}
        return `<span id="${id}"><span style="
        transition: .3s ease-out;
        --height: ${rndHeight};
        --move: ${rndMove};
        opacity: 0;
        display: inline-block;
        "id="rareJump${ind}"><span style=
        "display: inline-block;" id="move${ind}">${ver}</span></span></span>`
    }).join("");
    document.getElementById(`nome`).innerHTML = text;
    for(let i = 0; i < charlgt; i++){
        let rndTime = Math.trunc(Math.random() * 1) + .7;
        setTimeout(() => {
            document.getElementById(`rareJump${i}`).style.animation = `none`
            document.getElementById(`move${i}`).style.animation = `none`
        }, i*10);
        setTimeout(() => {
            document.getElementById(`rareJump${i}`).style.opacity = 1
            document.getElementById(`move${i}`).style.opacity = 1
            document.getElementById(`rareJump${i}`).style.animation = `rareJump ${rndTime}s forwards, paint .6s forwards`
            document.getElementById(`move${i}`).style.animation = `move ${rndTime}s forwards`
        }, i*10 + 10)
    }
    setTimeout(() => {
        document.querySelector(`#nome`).innerHTML = `<div id="${id}">${styleContent}</div>`;
        console.log(`kaboom`)
    }, charlgt * 100 + 2000)
}
function roll(set, luck) {
    let original = set.map(ele => ele[1])
    let names = set.map(ele => ele[0])
    set = set.map((ele, index) => [ele[0], index, ele[1] / luck])
    set = set.filter((ele) => ele[2] > 1)
    let ind = (set[0])[1]
    set.forEach((ele) => {
        if (random(ele[2])) {
            ind = ele[1];
        }
    });
    return [ind, original[ind], names[ind]]
}
function random(numb) {
    let rnd = Math.random()
    if (rnd < (1 / numb)) {
        return true;
    }
    else {
        return false;
    }
}
function buy(numb){
    let req = []; let nam = []; let sequence = 0
    let list = document.querySelectorAll(`.shop #shopdropdown > .place:nth-of-type(${numb}) > div`)
    list = [...list]
    mut = listing.map(ele => {
        if(ele[0].includes(":")){
            return (ele[0].slice(ele[0].indexOf(":") + 1)).trim()
        }
        else{
            return ele[0];
        }
    })
    list.forEach((ele) => {
        ele = ele.textContent
        req.push(Number((ele.split("-"))[0])); nam.push(((ele.split("-"))[1]).trim())
    })
    for(let i = 0; i < nam.length; i++){
        if(!(mut.findIndex(ele => (ele) === nam[i]) === -1)){
            sequence = (listing[mut.findIndex((ele) => ele === nam[i])][2] >= req[i]) ? sequence+1: sequence
        }
    }
    if(sequence === list.length){
        for(let i = 0; i < nam.length; i++){
            listing[mut.findIndex((ele) => ele === nam[i])][2] -= req[i]
            document.getElementById(`list`).innerHTML = ``
            for (let i of listing) {
                document.getElementById(`list`).innerHTML += `<span id="outside">${i[2]} ~ </span><span id="${acr[i[3]]}"> ${i[0]} - 1 em ${i[1]}</span><br>`
            }
        }
        shopitemvar[numb-1] = true;
        document.getElementById(`shop${numb}`).innerHTML = `Equipar`
    }
}
function enable(numb){
    restlist = shopvarE.filter((_, ind) => {
        return ind !== numb-1
    })
    if(shopitemvar[numb-1]){
        if(!(restlist.some((ele) => ele === true))){
            if(shopvarE[numb-1]){
                shopvarE[numb-1] = false;
                document.getElementById(`shop${numb}`).innerHTML = `Equipar`
                document.getElementById(`place${numb}`).style.backgroundColor = '#f9f9f9'
                document.getElementById(`place${numb}`).style.border = `2px dashed rgb(221, 255, 223)`
            }
            else{
                shopvarE[numb-1] = true;
                document.getElementById(`shop${numb}`).innerHTML = `Desequipar`
                document.getElementById(`place${numb}`).style.backgroundColor = 'rgb(205, 255, 221)'
                document.getElementById(`place${numb}`).style.border = `2px dashed rgb(215, 255, 218)`
            }
        }
    }
    else{
        buy(numb)
    }
}
function colide(el1, el2) {
    el1 = document.getElementById(el1);
    el2 = document.getElementById(el2);

    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();

    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}
function animate() {
    if(static && velocity > 0){
        rotate = 20;
        bounce = 10;
        static = false;
    }
    velocity += gravity; 
    position += velocity;
    if(!stoping){
        gsap.set('#box', { y: position});
    }
    requestAnimationFrame(animate);
}
/* Escola:
sala / pátio / refeitório / jardim / quadra / coworking /// PJ macumba 
Fora:
xique xique bahia / Inepresente /// espaço sideral


, ["Rodobelo", 2, "Gato mascote da escola"]  - patio
, ["Rodobelo : CATciquismo KATkos-(Líder TriMAW)", 2468, "Dono de uma tribo indígena"] - jardim

, ["Marcella", 3, "Mina da sala que gosta de ler"]
, ["Marcella : Branca de Neve", 960, "Nínguem sabe se tá morta, ou dormindo"]
, ["Marcella : Babel", 130500, ""]

, ["Bia", 4, "'Sobrecarga de Mídias'"]
, ["Bia : Rica de Truco", 144, "A única que perdi, foi para doar dindin"]

, ["Paulo", 5, "Metade humano, metade rato"] - refeitório
, ["Paulo : Gari", 700, "Trabaia nas ruas, na vivência do salário mínimo"] - xique xique bahia
, ["Paulo : Chesse Gem", 2000, "Um cristal que Paulo jones procurava"] - natureza
, ["Paulo : Gostosão", 550000, ""]

, ["Arthur", 8, "Obsessão por Cartas"]
, ["Arthur : MetalBat-I", 80, "I-Armadura, PROVIDENCIADO DE (garrafa de metal)"]
, ["Arthur : MB.Cheatin'Balatro-II", 1480, "II-Armadura, PROVIDENCIADO DE (cheats maliciosos)"]
, ["Arthur : MBChB-III.deck", 32960, "III-Armadura, PROVIDENCIADO DE (mutação de maconheiro)"] - pj macumba

, ["Pedro", 10, "Pleno, Pequeno, Não ocupa terreno, e fala: posto e torto que dá desconforto"] - cowork
, ["Pedro : EmpresárioCLT", 1010, "..."]  - xique xique bahia
, ["Pedro : onu.inss.₱€Đ₹Ø.brl.ibge", 101010, "'Me dá dinheiro'"] - Inepresente

, ["Sabrina", 12, "..."]
, ["Sabrina : Fofíris", 150000, "..."] - inepresente

, ["ArthurCorreia", 15, "Rei do gel"]
, ["ArthurCorreia : Gomu Gomu No Mi", 2400, ""]
, ["ArthurCorreia : 0⁰2² Shuckle ¹1³3", 75000, ""]

, ["Kauany", 20, "..."]
, ["Kauany : Funkin", 260, "..."]

, ["Vinícius", 25, "Gosta de Strôgonobòlónofóff"] - refeitório
, ["Vinícius : Gnose", 386100, "Consente-me avistá-la-lho, se m’o desejares expor-lha além deste cosmo, pois conferi-mo-la-iam, caso to-lo consintissem."] - jardim

, ["Lucas", 45, "Assistindo rolar a bola, tomando coca-cola vindo da sacola"]
, ["Lucas : CR7", 3600, "LuCR7 atira no gol, do outro gol"] - quadra

, ["Nathan", 45, "Ouh, ALEXA, ouh, ouh, ALEXA!"]
, ["Nathan : Camisa10", 5400, "Jogador Profissa"] - quadra

, ["Pietro", 45, ""]
, ["Pietro : Synthesis", 202500, ""] - pj macumba

, ["Wallison", 50, "amigo do Titíco"] - patio

, ["Titíco", 50, "Risadinha, amigo do Walisson"]
, ["Titíco : Coringa", 500, "Risadinha marota, Risadinha falsa"]

, ["Alexandre", 55, "Funkeiro redimido"] - patio
, ["Alexandre : LÍDER", 825, "Mandando, Devendo, Pão de queijo"] - quadra
, ["Alexandre : O GRANDE", 412500, "..."] - inepresente

, ["Hiarles", 55, "Gordinho"] - patio

, ["Miguel", 65, ""]

, ["Guilherme", 69, "'Arco de vilão da torre de cartas destruída'"]
, ["Guilherme : NegãoMan", 552, "Despertada a sua braveza, pronto para aniquilar"]

, ["Bigode", 75, "'Reconheço esta curvatura desta pelagem facial de longe"] - cowork

, ["Luís", 75, "..."] - patio

, ["Matheus", 80, "Demolindo sorrindo"]
, ["Matheus : Boiadero", 1280, "'É U É'"]

, ["Yuri", 90, ""]
, ["Yuri : FreefiRe p/Vp", 41850, ""] - xxb

, ["Alison", 100, "De fé, ele é"]
, ["Alison : BoxGoat", 8000, "ÍDOLOdoBOX"] - xxb

, ["Yago", 191, "Enforca hermano"] - cowork
, ["Yago : Yb/ eliteHacker /bY", 13370, "Na elite invadindo onlyfans de presidentes"] - cowork

, ["Maria", 400, "Ser de potência subestimada, mas gosta de um chocolate"]
, ["Maria : CROOCS", 7600, "CROOCS mortal, seu arremesso exala moral"]

, ["Thales", 685, "Ainda bem que sabem que é mentira -2025"]
, ["Thales : Mileto", 13700, "Beira Omniconciência"]

, ["PedroGRANDE", 1275, "Ônibus é um lego"]
, ["PedroGRANDE : Galaxy", 1083700, "Fuma meteoro e sai nebulosas"] - espaço sideral

, ["T A R Z A N", 1400, "'êêêêêêêêê!!'"] - jardim

, ["Arlan", 1500, "..."]
, ["Arlan : MoniDOR", 52500, "..."]

, ["Rafael", 1665, "Estou vendo gente morta!!"]
, ["Rafael : Necromância", 66600, "'Meu segundO empRego, enTeudEu'"] - jardim

, ["Gigante", 4000, "..."]

, ["Pombo gordo", 27500, ""] - jardim
>>>>>>> c6f5685ca64b16e844f3b896944debed3f45090f
 */