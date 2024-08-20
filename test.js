test("5 euro should be 5.35 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    expect(fromEuroToDollar(5)).toBeCloseTo(5.35,1); 
})

test("5 dollar should be 731 yen", ()=>{
    const {fromDollarToYen} = require("./app.js");

    expect(fromDollarToYen(5)).toBeCloseTo(731.30,1)
})

test("1300 yen should be 7.23 pound", ()=>{
    const {fromYenToPound} = require("./app.js");

    expect(fromYenToPound(1300)).toBeCloseTo(7.23,1)
})