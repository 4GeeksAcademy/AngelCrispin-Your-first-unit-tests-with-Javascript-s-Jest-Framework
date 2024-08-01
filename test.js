
test("One euro should be 1.07 dollars", function() {

    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(dollars).toBe(expected);
    
})

test("One dollar should be 511.91 yen", function() {
    
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(3.5);
    const expected = 3.5/1.07 * 156.5; 
    expect(yens).toBe(expected);

})

test("One yen should be 1.945 pound", function() {
    
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(350);
    const expected = 350/156.5 * 0.87; 
    expect(pounds).toBe(expected);

})