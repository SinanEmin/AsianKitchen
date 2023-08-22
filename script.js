const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
    "https://www.chilipeppermadness.com/wp-content/uploads/2021/05/Dan-Dan-Noodles-Recipe1.webp",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


//ALL BUTTON
const allBtn = document.createElement("button")
allBtn.classList.add("btn","btn-item","btn-light","rounded")
allBtn.textContent = "All"
allBtn.type = "button"
allBtn.id = "all"
const container1 = document.querySelector(".btn-container")
container1.appendChild(allBtn)


//KOREAN BUTTON
const koreanBtn = document.createElement("button")
koreanBtn.classList.add("btn","btn-item", "btn-light", "rounded")
koreanBtn.textContent = "Korean"
koreanBtn.type = "button"
koreanBtn.id ="korean"
const container2 = document.querySelector(".btn-container")
container2.appendChild(koreanBtn)

//JAPAN BUTTON
const japanBtn = document.createElement("button")
japanBtn.type ="button"
japanBtn.textContent = "Japan"
japanBtn.id = "japan"
japanBtn.classList.add("btn","btn-item", "btn-light", "rounded")
const container3 = document.querySelector(".btn-container")
container3.appendChild(japanBtn)

//CHİNA BUTTON
const chinaBtn = document.createElement("button")
chinaBtn.type = "button"
chinaBtn.id = "china"
chinaBtn.textContent = "China"
chinaBtn.classList.add("btn","btn-item", "btn-light","rounded")
const container4 = document.querySelector(".btn-container")
container4.appendChild(chinaBtn)

let btnAll = document.querySelector("#all")
btnAll.addEventListener("click", menuShow)
let menu1 = document.querySelector(".section-center")
menu1.id = "menu"

function toggleActiveState() {
  this.classList.toggle('btn-active');
}


function menuShow() {
  let menuItems = menu.map(item => {
    return `
    <div class="menu-items col-lg-6 col-sm-12">
      <img src="${item.img}" alt="${item.title} ramen="" class="photo">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${item.title} </h4>
          <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu-text">${item.desc}</div>
      </div>
    </div>
    `
  })
  menuItems = menuItems.join("")
  menu1.innerHTML = menuItems
}
menuShow()

let btnChina = document.querySelector("#china")
btnChina.addEventListener("click", chinaMenu)

function chinaMenu() {
  let menuItems = menu.map(item => {
    if(item.category == "China") {
     return `<div class="menu-items col-lg-6 col-sm-12">
     <img src="${item.img}" alt="${item.title} ramen="" class="photo">
     <div class="menu-info">
       <div class="menu-title">
         <h4>${item.title} </h4>
         <h4 class="price">${item.price}</h4>
       </div>
       <div class="menu-text">${item.desc}</div>
     </div>
   </div>`
    }
  })
  menuItems = menuItems.join("")
  menu1.innerHTML = menuItems;
}


let btnJapan = document.querySelector("#japan")
btnJapan.addEventListener("click", japanMenu)

function japanMenu() {
  let menuItems = menu.map(item => {
    if(item.category == "Japan") {
      return `<div class="menu-items col-lg-6 col-sm-12">
      <img src="${item.img}" alt="${item.title} ramen="" class="photo">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${item.title} </h4>
          <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu-text">${item.desc}</div>
      </div>
    </div>`
    }
  })
  menuItems = menuItems.join("")
  menu1.innerHTML = menuItems
}


let btnKorean = document.querySelector("#korean")
btnKorean.addEventListener("click", koreanMenu)

function koreanMenu() {
  let menuItems = menu.map(item => {
    if(item.category == "Korea") {
      return `<div class="menu-items col-lg-6 col-sm-12">
      <img src="${item.img}" alt="${item.title} ramen="" class="photo">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${item.title} </h4>
          <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu-text">${item.desc}</div>
      </div>
    </div>`
    }
  })
  menuItems = menuItems.join("")
  menu1.innerHTML = menuItems
}
