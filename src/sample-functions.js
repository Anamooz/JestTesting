function div (a, b){
    return a / b;
  }

  function containsNumbers(text){
    for (let i = 0; i < text.length; i++) {
     if (!isNaN(text.charAt(i)))
      return true;
    }
    return false;
  }

  function sum(a,b) {
    if(!typeIsNumber(a) || !typeIsNumber(b)){
      throw new TypeError('Must be a number', "sample-functions.js");
    } else {
      return a + b;
    }
  }

  
  function typeIsNumber(a){
    if (isNaN(a)){
      return false;
    }
    return(typeof(a) === 'number');
  }
  

exports.div = div;
exports.containsNumbers = containsNumbers;
exports.sum = sum;
exports.typeIsNumber = typeIsNumber;