// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (x) => {

    let euro = x/oneEuroIs["USD"];
    let yen = euro*oneEuroIs["JPY"];

    return yen
}

const fromEuroToDollar = (x) => {

    let dollar = x*oneEuroIs["USD"];

    return dollar
}

const fromYenToPound = (x) => {

    let yen = x/oneEuroIs["JPY"];
    let pound = yen*oneEuroIs["GBP"];

    return pound
}

//console.log(fromYenToPound(350))

module.exports = { fromDollarToYen,fromEuroToDollar,fromYenToPound };