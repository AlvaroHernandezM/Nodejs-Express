var expect = require('chai').expect;
describe("Test para usuarios", function(){
     it("se deben retornar tres usuarios", function(){
        var users = ['larry', 'andres', 'alvaro'];
       expect(users.length).to.equal(3);
     })
});