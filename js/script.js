//Declare variable
const fruitsList = document.getElementById("fruits-list");
const newFruits = document.getElementById("new-fruits");
const fruitsCart = document.getElementById("fruits-cart");
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");
const storeStock = document.getElementById("store-stock");
const modalOverlay = document.getElementById("modal-overlay");
const modalBox = document.getElementById("modal-box");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

//Display the fruits what we have
let fruitsIcon =
    ["🍎", "🍐", "🍊", "🍋", "🍉", "🍇", "🍌", "🍓", "🍈", "🍒", "🍑", "🍍", "🥝", "🍅", "🥑"];

for (let i = 0; i < fruitsIcon.length; i++) {
    storeStock.innerHTML += `
    <div id="stock">
    ${fruitsIcon[i]}
    </div>
    `
}

//articles of fruits
let fruitsInfo = [
    {
        id: 0,
        name: "apple",
        origin: "New Zealand",
        price: "$0.99/kg",
        image: "🍎",
        alt: "Who don't like apple pie- ah?"
    },
    {
        id: 1,
        name: "pear",
        origin: "Korea",
        price: "$11/kg",
        image: "🍐",
        alt: "God damn deilcious Korean pear!"
    },
    {
        id: 2,
        name: "orange",
        origin: "California-USA",
        price: "$4/kg",
        image: "🍊",
        alt: "Grown in California sunshine"
    },
    {
        id: 3,
        name: "lemon",
        origin: "New Zealand",
        price: "$9.99/kg",
        image: "🍋",
        alt: "Love my granma's lemon pie-!"
    },
    {
        id: 4,
        name: "banana",
        origin: "Philippines",
        price: "$1.89/kg",
        image: "🍌",
        alt: "Have you seen a banana tree?"
    },
    {
        id: 5,
        name: "watermelon",
        origin: "South Africa",
        price: "$11/kg",
        image: "🍉",
        alt: "Don't eat me before sleep-"
    },
    {
        id: 6,
        name: "grape",
        origin: "California-USA",
        price: "$8.99/kg",
        image: "🍇",
        alt: "I have more nutrition in my peels"
    },
    {
        id: 7,
        name: "strawberry",
        origin: "New Zealand",
        price: "$9/kg",
        image: "🍓",
        alt: "Taste is so sour to be honest"
    },
    {
        id: 8,
        name: "melon",
        origin: "Spain",
        price: "$9/ea",
        image: "🍈",
        alt: "Be careful when you cut me"
    },
    {
        id: 9,
        name: "cherry",
        origin: "New Zealand",
        price: "$11/kg",
        image: "🍒",
        alt: "Delicious Summer fruits- me!"
    },
    {
        id: 10,
        name: "peach",
        origin: "New Zealand",
        price: "$5.79/kg",
        image: "🍑",
        alt: "I'm so sad, if you're allergic to me"
    },
    {
        id: 11,
        name: "pineapple",
        origin: "West Africa",
        price: "$10/ea",
        image: "🍍",
        alt: "I'm pine- and you?"
    },
    {
        id: 12,
        name: "kiwi",
        origin: "New Zealand",
        price: "$5.99/kg",
        image: "🥝",
        alt: "Are you Kiwi?"
    },
    {
        id: 13,
        name: "tomato",
        origin: "New Zealand",
        price: "$8.99/kg",
        image: "🍅",
        alt: "I know I'm not a fruit"
    },
    {
        id: 14,
        name: "avocado",
        origin: "Somewhere",
        price: "$1.89/ea",
        image: "🥑",
        alt: "I'm fruits"
    }
]

function findFruits() {
    //if no enter the name, an alert pops up
    if (newFruits.value === "") {
        alert("Please enter a name!");
        return; //function will finish
    }
    for (let i = 0; i < fruitsInfo.length; i++) {
        //If the value is same as the name of article, get all value of matching one
        if (newFruits.value === fruitsInfo[i].name) {
            fruitsList.innerHTML = `
            <div id="fruit-container">
            <h3 id="comment">${fruitsInfo[i].alt}</h3>
            <h1 id="fruit-name">${fruitsInfo[i].name}</h1>
            <h1 id="emoji">${fruitsInfo[i].image}</h1>
            <button data-id="${fruitsInfo[i].id}" 
            class="save-cart">
            Add to Cart
            </button>
            <button class="pass-card">
            Nahhhh
            </button>
            `
            recognizeButtons()
            return;
        }
    }
    //if the value is not same as the id we got, an alert pops up
    alert("Sorry this item is not available");
    newFruits.value = "";
    return; //function will finish

}



// when click submit button show the fruit card
addBtn.addEventListener("click", function () {
    findFruits()
})


// If click DELETE button, a modal pops up first
deleteBtn.addEventListener("click", function () {
    toggleModal();
});

// Ask really delete or not
yesBtn.addEventListener("click", function () {
    toggleModal();
    fruitsList.innerHTML = "";
    fruitsCart.innerHTML = "";
    newFruits.value = "";
})
noBtn.addEventListener("click", toggleModal);


//modal ON OFF
function toggleModal() {
    modalOverlay.classList.toggle("modal-overlay");
    modalBox.classList.toggle("modal-box");
}

function recognizeButtons() {
    const saveCartBtn = document.getElementsByClassName("save-cart");
    const passCard = document.getElementsByClassName("pass-card");
    for (let i = 0; i < saveCartBtn.length; i++) {
        saveCartBtn[i].addEventListener("click", function () {
            let currentFruitId = saveCartBtn[i].dataset.id;
            let fruitValue = fruitsInfo[currentFruitId].image;
            fruitsCart.innerHTML += `
            <div id="chosen-fruit">
            ${fruitValue}
            </div>`
        })
        passCard[i].addEventListener("click", function () {
            fruitsList.innerHTML = "";
        })
    }
}





