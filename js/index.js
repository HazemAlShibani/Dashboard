let sideMenu = document.querySelector("aside");
let menuBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#close-btn");
let themeToggler = document.querySelector(".change-mode");

closeBtn.onclick = function() {
    sideMenu.style.display = "none";
}

menuBtn.onclick = function() {
    sideMenu.style.display = "block";
}

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('changing-mode');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('mode');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('mode');
})

orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumder}</td>
    <td>${order.PaymentStatus}</td>
    <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
    <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;

    document.body.querySelector('table tbody').appendChild(tr);

} )