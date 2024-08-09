function between(a, b) {
    let arr = []
    for(let i=a; i<=b; i++){
      arr.push(i)
    }
    return arr
  }

  console.log(between(1, 4)); // [1, 2, 3, 4]

  function sixToast(num) {
    return (num >= 6) ? num - 6 : num;
  }
  
  
  function shorter_reverse_longer(a, b) {

    return (a.length >= b.length) ?
      `${b}${a.split('').reverse().join('')}${b}`
      :
      `${a}${b.split('').reverse().join('')}${a}`
  }

  var replaceDots = function(str) {
    let cut = str.split('');
    return cut.map(a => a.replace('.','-')).join('')
  
  }
  replaceDots("one.two.three")

  function findMultiples(int, limit) {

    let arr = [];
    
      for (let i=int; i<=limit; i+=int){
        arr.push(i)
      }
  
    return arr
    
  }

  const quarterOf = (month) => {
    return Math.ceil(month/3)
   }

   function typeOfSum(a, b) {
    return (typeof (a+b))
  }

  function findDifference(a, b) {

    let getA = a.reduce((a,b)=> a*b)
    let getB = b.reduce((a,b)=> a*b)
  
    return Math.abs(getA - getB)
  
  }

  function datingRange(age){
    let over14 = `${Math.floor((age/2)+7) }-${Math.floor((age-7)*2) }`
    let at14under = `${Math.floor(Math.abs( (age*.10)-age))}-${Math.floor((age*.10)+age)}`
    
    return(age<=14)? at14under : over14
  
  }

  function warnTheSheep(queue) {

    let get = queue.indexOf("wolf") 
    let l = queue.length
    let ans = (l-get)-1
    
    
   return (queue.pop() === "wolf") ?"Pls go away and stop eating my sheep" 
    :`Oi! Sheep number ${ans}! You are about to be eaten by a wolf!`
    
  }

  var summation = function (num) {
    let arr = []
  
      while(num >= 1){
        arr.push(num)
        num--
      }
  
    return arr.reduce((a,b)=> a+b)
      
  }
  
  
  function  calculateAge(birth,year) {
  
  
  if(birth-year === 1){
        return `You will be born in 1 year.`
    } else if(birth-year >1){
        return `You will be born in ${Math.abs(year-birth)} years.`
    } else if(year-birth === 1){
        return `You are 1 year old.`
    } else if(year-birth > 1){
        return `You are ${year-birth} years old.`
    } else if(year-birth === 0){
        return`You were born this very year!`
    }
  
  }
  
  
  function whatday(num) { 
    switch(num) {
      case 1: return "Sunday";
      case 2: return "Monday";
      case 3: return "Tuesday";
      case 4: return "Wednesday";
      case 5: return "Thursday";
      case 6: return "Friday";
      case 7: return "Saturday";
      default: return 'Wrong, please enter a number between 1 and 7';
    }
  }
  
  
  function finalGrade (exam, proj) {
  
    return (exam > 90 || proj > 10) ? 100 
      : (exam > 75 && proj >= 5) ? 90 
      : (exam > 50 && proj >= 2) ? 75
      : 0
  
  }
  
  
  function stringClean(s){
    return s.replace(/\d+/g, "")
  }
  
  
  function isOpposite(s1,s2){
  
  if(!s1.length || s1.length !== s2.length){
    return false
  }else{
    
    let lo = s1.split('').map(a => a == a.toLowerCase())
    let up = s2.split('').map(a => a == a.toUpperCase())
  
    return lo.every((a,i)=> a === up[i])
  
  
  }
    
  function unusualFive() {
    return ['a','a','a','a','a'].length
  }
  unusualFive()
  
  
  function getRealFloor(n) {
  
    if(n<=0){
      return n
    } else if(n<13){
      return n-1
    } else if(n>13){
      return n-2
    }
  
  }
  
  getRealFloor(1)
  
  
  
  function powersOfTwo(n){
    var result = [];
    for (var i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }
  
  
  function solution(a, b){
    return (b.length > a.length) ? `${a}${b}${a}` : `${b}${a}${b}`
  }


  function collinearity(x1, y1, x2, y2){
    return x1 * y2 === x2 * y1;
  }

  
  function problem(a){
    return typeof a === "string" ? "Error" : a * 50 + 6;
  }

  
  function expressionMatter(a, b, c) {
    var combinations = [
      a + b + c,
      a * (b + c), 
      a * b * c, 
      (a + b) * c,
      a * b + c,
    ];
    return Math.max.apply(null, combinations);
  }

  
  function doubleChar(str) {
    return str.replace(/./g, '$&$&')
  }


  function DNAtoRNA(dna){
    var rna = {
        "T": "U"
    }
    return dna.replace(/T/g, function(convers){
        return rna[convers];
    });
}

// or

function DNAtoRNA(dna){
    return dna.replaceAll("T", "U");
}


function updateLight(current) {
	switch(current){
		case ('green'): return ('yellow');
		case ('yellow') : return ('red');
		case ('red') : return ('green');
	}
}


function getAge(age){
	return parseInt(age[0]);
}


function isToday(date) {
	var answer = new Date().toDateString() == date.toDateString();
	return answer;
}


function arr2bin(arr){
	return arr.reduce((a, b) => typeof(b) == "number" ? a + b : a, 0)
		.toString(2);
}

// or

function arr2bin(arr){
	return arr.filter(a => typeof(a) == "number")
		.reduce((b, c) => b + c, 0)
		.toString(2);
}


function combat(health, damage) {
	if (health < damage){return 0};
	return health - damage;
}

// or

function combat(health, damage) {
	return health < damage ? 0 : health - damage;
}

// or

function combat(health, damage) {
	return Math.max(health - damage, 0);
}

class Solution{
	static main() {
		console.log("Hello World!");
	}  
}


function strCount(str, letter){  
	return str.split(letter).length - 1;
}


function hoopCount (n) {
	let hope = "Keep at it until you get it";
	let hoop = "Great, now move on to tricks";
	if (n < 10){
		return hope;
	} else {
		return hoop;
	}
}


function symmetricPoint(p, q){
	return [q[0] * 2 - p[0], q[1] * 2 - p[1]];
}



function rentalCarCost(d) {
	if (d < 3){
		return 40 * d;
	} else if (d >= 3 && d < 7){
		return 40 * d - 20;
	} else if (d >= 7){
		return 40 * d - 50;
	}
}


function invert(lst){
	var arr = [];
	if (lst == arr){
		return arr;
	} else {
		lst.forEach(l => {
			arr.push(-l);
		})
		return arr;
	}
}

function differenceInAges(ages){
	let minAge = Math.min(...ages);
	let maxAge = Math.max(...ages);
	let ageGap = maxAge - minAge;
	return [minAge, maxAge, ageGap];
}


function nearestSq(n){
	var sqBefore = parseInt(Math.sqrt(n))**2;
	var sqAfter = (parseInt(Math.sqrt(n)) + 1)**2;
	if (Math.abs(n - sqBefore) < Math.abs(n - sqAfter)){
		return sqBefore;
	} else {
		return sqAfter;
	}
}

// or

function nearestSq(n){
	return Math.round(n**0.5)**2;
}


function mergeArrays(arr1, arr2) {
	let arr3 = arr1.concat(arr2);
	let arr3Sorted = arr3.sort((a, b) => a - b);
	return Array.from(new Set(arr3Sorted));
}



function abbrevName(name){
	var arr = name.split(" ");
	var abbrev = (arr[0][0] + "." + arr[1][0]).toUpperCase();
	return abbrev;
}


function fakeBin(x){
	var binstr = '';
	var fakebin = x.split('');
	fakebin.forEach(f => {
		if (parseInt(f) < 5){
			binstr = binstr + '0';
		} else {
			binstr = binstr + '1';
		}
	})
	return binstr;
}




