describe('calculator tests', ()=> {
  
it('should calculate the monthly rate correctly', ()=> {
  const values = {
    rate: 1,
    years: 5,
    amount: 10000 

  }
  expect(calculateMonthlyPayment(values)).toEqual(`170.94`);
});


it("should return a result with 2 decimal places", ()=> {
  const values = {
    rate:4,
    years:200,
    amount: 1000,
  }
  // expect(parseFloat(calculateMonthlyPayment(values))).toEqual(calculateMonthlyPayment(values)*100/100)
  expect(calculateMonthlyPayment(values)).toEqual(`3.33`);
});

it(`should return a string`, ()=> {
  const values = {
    rate:30,
    years:1,
    amount: 20000,
  }
  expect(typeof(calculateMonthlyPayment(values))).toBe(`string`);
})


})
