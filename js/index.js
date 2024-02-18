const $body = document.querySelector(`body`)
const $header = document.querySelector(`header`)
const $main = document.querySelector(`main`)
const $footer = document.querySelector(`footer`)


/* Button */

const htmlButton = document.querySelector(`.header-button`);
const handlecolor = ()=>{
    if($body.classList.contains(`dark-mode`)){
        $body.classList.remove(`dark-mode`);
    }
    else{
        $body.classList.add(`dark-mode`);
    }
}

htmlButton.addEventListener(`click`, handlecolor);


/* Cards */

const $cardTemplate = document.querySelector(`.card-template`)

const arrProducts = [
    {
        name:`Torta de chocolate`,
        img:`https://luciapaula.com/wp-content/uploads/2023/01/Blog-1970-01-20-125839033.jpg`,
        price: 13900,
        id: 1,
    },

    {
        name:`Torta multicolor` ,
        img:`https://dcdn.mitiendanube.com/stores/002/197/435/products/1x1-multi1-c5718a29a890da32fc16537692328425-1024-1024.jpg`,
        price: 14500,
        id: 2,
    },

    {
        name:`Torta Pavlova`,
        img:`https://www.coques.com.ar/wp-content/uploads/2023/05/Torta-Pavlova2.jpg`,
        price: 19500,
        id: 3,
    },

    {
        name:`Torta Hummingbird`,
        img:`https://annaspasteleria.com/images/_imageBlock/DSC_3586web.jpg`,
        price: 25000,
        id: 4,
    },

    {
        name:`Torta de golosinas`,
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaqxpW9zsxBV2Vx7G4aAXMDOkQrol93MYSQ&usqp=CAU`,
        price: 16800 ,
        id: 5,
    },

    {
        name:`Torta de coco`,
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiv9Geg7ygjtRzpx_VS2sU7EtmFbFhkgnMsA&usqp=CAU`,
        price: 15900,
        id: 6,
    },
];


const createCards = (arr)=>{
    return arr.map(prod=>{
        return`
        <div class="card" id"${prod.id}">
                <p class="card-tittle">${prod.name}</p>
                <img src="${prod.img}" alt="${prod.name}">
                <div>
                    <b>$${prod.price}</b>
                    <button class="buy-btn">Comprar</button>
                </div>
            </div>
`
    })
};

const renderCards =()=>{
    $cardTemplate.innerHTML = (createCards(arrProducts)).join(``);
};

const init = ()=>{
    renderCards()
};

init()