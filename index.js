function writeCards(name, event) {
    const gifts = [];
    for (let i = 0; i < name.length; i++) {
        gifts.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return gifts;
}
writeCards();

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}