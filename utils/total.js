export function calcTotal (cart) {
    var t = 0;
    cart.forEach(item => {
       t +=  item.price * item.quantity;
    });
    return t;
}