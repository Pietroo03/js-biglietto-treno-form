
const formEl = document.querySelector('form')

formEl.addEventListener('submit', function (e) {
    e.preventDefault()

    const kms = e.target.kms.value
    console.log(kms);
})








/* price = kms * 0.21;
finalPrice = price.toFixed(2);
if (age < 18) {
    price = price - (price / 100 * 20) 
    message = `Il costo del tuo biglietto è di ${finalPrice} sconto applicato del 20%`
} else if (age > 65) {
    price = price - (price / 100 * 40)
    message = `Il costo del tuo biglietto è di ${finalPrice} sconto applicato del 40%`
} else {
    price = kms * 0.21
    message = `Il costo del tuo biglietto è di ${finalPrice}`
}

console.log(finalPrice, message) */