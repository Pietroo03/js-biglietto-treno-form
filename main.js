
const formEl = document.querySelector('form')
const yourTicketEl = document.querySelector('.ticket')

formEl.addEventListener('submit', function (e) {
    e.preventDefault()

    const nameSurname = e.target.nameSurname.value
    const kms = e.target.kms.value
    const age = e.target.age.value
    console.log(nameSurname, kms, age);
    
    let price
    let finalPrice
    price = kms * 0.21;
    if (age === 'under 18') {
        price = price - (price / 100 * 20)
    } else if (age === 'over 65') {
        price = price - (price / 100 * 40)
    } else {
        price = kms * 0.21
    }
    finalPrice = price.toFixed(2);

    const carrozza = Math.floor(Math.random() * 10) + 1;
    const seat = Math.floor(Math.random() * 25) + 1;
    const codeTicket = Math.floor(Math.random() * 90000) + 10000;

    const memberEl = `
        <div class="row d-flex">
            <h5 class="col-4 py-3">NOME PASSEGGERO</h5>
            <h5 class="col-2 py-3">CARROZZA</h5>
            <h5 class="col-2 py-3">POSTO</h5>
            <h5 class="col-2 py-3">CODICE BIGLIETTO</h5>
            <h5 class="col-2 py-3">PREZZO</h5>
        </div>
        <div class="row d-flex">
            <div class="col-4 py-2"> ${nameSurname} </div>
            <div class="col-2 py-2"> ${carrozza} </div>
            <div class="col-2 py-2"> ${seat} </div>
            <div class="col-2 py-2"> ${codeTicket} </div>
            <div class="col-2 py-2"> ${finalPrice} € </div>
        </div>
    `

    yourTicketEl.insertAdjacentHTML('beforeend', memberEl)
})







