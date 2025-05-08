/**
 * This function calculates total prices of a new order
 * @param {Array} products cart products:Array of objects
 * @returns {number} Total price
 */
export const totalPrice = (products) =>{
    return parseFloat(products.reduce((sum, product) => sum + product.price, 0).toFixed(1));
}