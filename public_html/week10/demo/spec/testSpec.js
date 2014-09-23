describe("my test case", function(){
    
    var helloValue;
    
    
    beforeEach(function(){
       helloValue = hello(); 
    });
    
    it("should be equal to hello", function(){
       expect(helloValue).toEqual("hello");
    });
});

describe("Add Ten", function(){
    var val;
    
    beforeEach(function(){
       val = addTen(20);
        
    });
    it("should be a equal to 30", function(){
        
        
    });
    
    
});

