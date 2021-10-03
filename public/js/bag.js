function addToBag(product) {
       
    //console.log(name,price)
    let name = product.product_name;
    let image = product.product_image[0];
    let price = product.price;
    let description = product.brand.brand_name
    const itemData = { name, image, price, description };
       //console.log(itemData)
   // fetch local storage data 
    let cartData = localStorage.getItem("items");

    if (cartData) {
        cartData = JSON.parse(cartData);
    } else {
        cartData = [];
    }



    // push the itemData object in parsedData
    cartData.push(itemData);


    const itemData_json = JSON.stringify(cartData);
    localStorage.setItem("items", itemData_json)
    // console.log(itemData)
}
