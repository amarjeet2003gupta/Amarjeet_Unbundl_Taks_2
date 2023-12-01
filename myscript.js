const chocolates = [
    { id: 1, name: 'Dark Chocolate', price: 10.00, image: 'black.jpg' },
    { id: 2, name: 'Milk Chocolate', price: 20.35, image: 'milk-chocolate.jpg' },
    { id: 3, name: 'White Chocolate', price: 15.65, image: 'white-chocolate.jpg' },
    // Add more chocolate options as needed
];

const selectedItems = [];

function createChocolateOption(chocolate) {
    const option = document.createElement('div');
    option.classList.add('option');
    option.onclick = () => selectOption(chocolate);
    option.innerHTML = `
        <img src="https://media.gettyimages.com/id/157506007/photo/milk-chocolate-chunks.jpg?s=612x612&w=gi&k=20&c=3Dr0yQPFxjLj6-Tp2AUy3M1VpMwJMCH-vz8mNrbYGZ8=" alt="${chocolate.name}" style="height:100px; width:200px">
        <p>${chocolate.name}</p>
        <p>$${chocolate.price.toFixed(2)}</p>
    `;
    return option;
}

function renderChocolateOptions() {
    const chocolateOptions = document.getElementById('chocolateOptions');
    chocolateOptions.innerHTML = '';
    chocolates.forEach(chocolate => {
        const option = createChocolateOption(chocolate);
        chocolateOptions.appendChild(option);
    });
}

function selectOption(chocolate) {
    if (selectedItems.length < 8) {
        selectedItems.push(chocolate);
        updateSelectedItems();
        calculateTotalPrice();
    } else {
        alert('You can only select up to 8 items.');
    }
}

function updateSelectedItems() {
    const selectedItemsContainer = document.getElementById('selectedItems');
    selectedItemsContainer.innerHTML = '<h2 style="color:blueviolet;">Selected Items</h2>';
    selectedItems.forEach(chocolate => {
        const item = document.createElement('div');
        item.innerHTML = `<img src="https://i.pinimg.com/originals/4c/f7/b8/4cf7b8fa13224525d7a0a5480c4cb56d.jpg" alt="${chocolate.name}" style="height:20px; width:20px;"> ${chocolate.name}`;
        selectedItemsContainer.appendChild(item);
    });
}

function calculateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPrice = selectedItems.reduce((total, chocolate) => total + chocolate.price, 0);
    // totalPriceElement.textContent = `Total Price: Rs${totalPrice.toFixed(2)}`;
    totalPriceElement.innerHTML = `<p style="color:red;">Total Price : $ ${totalPrice.toFixed(2)}</p>`
}

// Initial setup
renderChocolateOptions();