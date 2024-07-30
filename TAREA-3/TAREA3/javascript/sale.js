// Función para mostrar el popup
function showPopup(message) {
    console.log("showPopup called with message:", message);
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `<div class="popup-content">${message}<button onclick="closePopup()">Cerrar</button></div>`;
    document.body.appendChild(popup);
}

// Función para cerrar el popup
function closePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.remove();
    }
}

// Función para calcular la tarifa de envío
function calculateShippingFee(totalAmount) {
    console.log("calculateShippingFee called with totalAmount:", totalAmount);
    if (totalAmount < 2000) {
        return 500;
    } else if (totalAmount < 3000) {
        return 250;
    } else {
        return 0;
    }
}

// Función para calcular el monto total
function calc() {
    console.log("calc function called");
    const productSelect = document.getElementById("product");
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const productName = selectedOption.textContent.trim().split(' - ')[0];
    const productPrice = parseFloat(selectedOption.value);
    const productNumber = parseInt(document.getElementById("number").value);

    if (!isNaN(productPrice) && !isNaN(productNumber) && productPrice >= 0 && productNumber >= 0) {
        const subtotal = productPrice * productNumber;
        const shippingFee = calculateShippingFee(subtotal);
        const total = subtotal + shippingFee;
        showPopup(`Producto: ${productName}<br>Precio por unidad: ${productPrice} yenes<br>Cantidad: ${productNumber}<br>Subtotal: ${subtotal} yenes<br>Tarifa de envío: ${shippingFee} yenes<br>Monto total: ${total} yenes`);
    } else {
        showPopup("Por favor selecciona un producto y una cantidad válida.");
    }
}

// Función para agregar el producto seleccionado
function addSelectedProduct() {
    console.log("addSelectedProduct called");
    const productSelect = document.getElementById("product");
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const productName = selectedOption.textContent.trim().split(' - ')[0];
    const productPrice = parseFloat(selectedOption.value);
    const productNumber = parseInt(document.getElementById("number").value);

    if (!isNaN(productPrice) && !isNaN(productNumber) && productPrice >= 0 && productNumber >= 0) {
        const subtotal = productPrice * productNumber;
        showPopup(`Agregar al carrito:<br>Producto: ${productName}<br>Costo por unidad: ${productPrice} yenes<br>Cantidad: ${productNumber}<br>Subtotal: ${subtotal} yenes`);
    } else {
        showPopup("Por favor selecciona una cantidad válida.");
    }
}

// Asignar eventos a los botones
document.getElementById('calcButton').addEventListener('click', calc);
document.getElementById('addButton').addEventListener('click', addSelectedProduct);
