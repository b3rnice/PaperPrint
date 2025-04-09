/*buger menu */

const burger = document.querySelector('.burger-menu')
const nav = document.querySelector('.main-nav')
burger.addEventListener('click', burgerMenu)

 function burgerMenu(){
    burger.classList.toggle('active')
    nav.classList.toggle('active')
}



//cart count

const cartCountElement = document.getElementById("cart-count")
function updateCartCount() {
    let cartCount = localStorage.getItem('cartCount') || 0
    cartCount = parseInt(cartCount) + 1
    localStorage.setItem('cartCount', cartCount)
    cartCountElement.innerText = cartCount
    cartCountElement.style.display = "inline"
}

burger.addEventListener('click', burgerMenu)

if (performance.getEntriesByType("navigation")[0].type === "reload") {
    localStorage.removeItem("cartCount")
}

document.addEventListener("DOMContentLoaded", function () {
    let cartCount = localStorage.getItem('cartCount') || 0
    cartCountElement.innerText = cartCount

    if (cartCount > 0) {
        cartCountElement.style.display = "inline"
    }

    document.querySelectorAll(".add-to-cart").forEach(cartIcon => {
        cartIcon.addEventListener("click", function (event) {
            event.preventDefault()
            updateCartCount()
        })
    })
})
