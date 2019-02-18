
function deleteProduct(item){
    return {
        type: "DELETE",
        productData: {
            name: item.name,
            price: item.price,
            description: item.description
        }
    }
}

export default deleteProduct