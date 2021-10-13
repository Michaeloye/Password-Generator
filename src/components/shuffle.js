function shuffle(s) {
  let arr = s.split('');           
  
  arr.sort(function() {
    return 0.5 - Math.random();
  });  
  s = arr.join('');                
  return s;                        
}

export default shuffle;
