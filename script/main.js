const productsContainer = document.querySelector(
  '.home-product-list .grid__row'
);



function renderProducts(listData) {
  if (!productsContainer) return;

   let htmlContent = '';

  listData.forEach(product => { 
    htmlContent += `
        <div class="grid__column-2-4">
                      <a href="" class="home-product__item">
                        <div class="home-product__item--img" style="
                            background-image: url(${product.img});
                          "
                        ></div>
                        <h4 class="home-product__item--name">
                          ${product.name}
                        </h4>
                        <div class="home-product__item-price">
                          <span class="home-product__item--price-old">
                            ${product.old_price}
                          </span>
                          <span class="home-product__item--price-new">
                            ${product.new_price}
                          </span>
                        </div>
                        <div class="home-product__item--rate">
                          <div class="home-product__item--heart">
                            <i class="fa-regular fa-heart"></i>
                          </div>
                          <div class="home-product__item--rate-icon">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half"></i>
                          </div>
                        </div>
                        <div class="home-product__item--place-quantity">
                          <h4 class="home-product__item--quantity-item">
                            ${product.sold}
                          </h4>
                          <h4 class="home-product__item--place-item">
                            ${product.location}
                          </h4>
                        </div>
                      </a>
                    </div>
        `;
  });

  productsContainer.innerHTML = htmlContent;
}

renderProducts(products);


const categorysContainer = document.querySelector('.category__list');


function categorysRender() {
    
    if(!categorysContainer) return;

    let htmlContent = '';

    htmlContent += `
        <li class="category__list-item">
        <a href="" class="category__list-item--link" onclick="filterByCategory('all', event)" > Tất cả </a>
        </li>
        `;


    categorys.forEach(category => {
        htmlContent += `
        <li class="category__list-item">
            <!-- Truyền ID của danh mục vào hàm lọc -->
            <a href="#" class="category__list-item--link" onclick="filterByCategory(${category.categoryId}, event)"> 
                ${category.name} 
            </a>
        </li>
        `;
        
    });
    categorysContainer.innerHTML = htmlContent;
}

categorysRender();

//Lọc sản phẩm theo Danh Mục

function filterByCategory(categoryClicked, event) {
    event.preventDefault();

    // 1. In ra xem fen bấm vào cái gì?
    console.log("📢 Fen vừa bấm vào ID:", categoryClicked);

    if (categoryClicked === 'all') {
        console.log("✅ Đang hiển thị tất cả sản phẩm");
        renderProducts(products);
    } 
    else {
        // 2. In ra danh sách gốc để kiểm tra data
        console.log("🔍 Kiểm tra data gốc:", products);

        // Lọc
        const listFiltered = products.filter(product => {
            // In ra từng sản phẩm để soi
            // console.log(`So sánh: Sản phẩm ${product.categoryId} == ID bấm ${categoryClicked}`);
            
            // Dùng dấu == (2 dấu bằng) để so sánh cho chắc (tránh lỗi chuỗi vs số)
            return product.categoryId == categoryClicked;
        });

        // 3. In ra kết quả sau khi lọc
        console.log("🎉 Kết quả lọc được:", listFiltered);

        renderProducts(listFiltered);
    }
}

