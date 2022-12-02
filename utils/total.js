export function calcTotal (cart) {
    const t = 0;
    cart.forEach(item => {
       t +=  item.price * item.quantity;
    });
    return t;
}