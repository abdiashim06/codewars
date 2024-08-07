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

