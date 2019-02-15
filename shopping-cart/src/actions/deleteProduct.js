


var deleteProduct = (id) => {
    return (
       {
           type: "deleteProduct",
           productID: id
       }
    )
}

export default deleteProduct;