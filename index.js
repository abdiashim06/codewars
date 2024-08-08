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
