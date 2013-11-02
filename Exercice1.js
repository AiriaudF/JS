function adder(l, r) {
       return function (v) {
            return l(v) + r(v);
       }        
}

function mult(v) {
        return function (e) {
            return v*e;
        }
}

//Function foo 
function foo (l) {
        return function (v) {
                return l - v;
        }        
}


//adder function 
function adder () {
        var tab = Array.prototype.slice.call(arguments);
        var res = 0;
          return function(v) {
            tab.forEach(function(foo) {                                
                res += foo(v);
            });                        
            return res;              
        };
}
