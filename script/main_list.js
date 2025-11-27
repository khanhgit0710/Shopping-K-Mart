const listProductsContainer = document.querySelector('.category__list');

function listProductsRender() {
    
    if(!listProductsContainer) return;

    let htmlContent = '';

    listProducts.forEach(listproduct => {
        htmlContent += `
        <li class="category__list-item">
        <a href="" class="category__list-item--link"> ${listproduct.name} </a>
        </li>
        `;
    });
    listProductsContainer.innerHTML = htmlContent;
}

listProductsRender();