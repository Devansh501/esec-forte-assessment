const m = {
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: 'E',
    f: 'F',
    g: 'G',
    h: 'H',
    i: 'I',
    j: 'J',
    k: 'K',
    l: 'L',
    m: 'M',
    n: 'N',
    o: 'O',
    p: 'P',
    q: 'Q',
    r: 'R',
    s: 'S',
    t: 'T',
    u: 'U',
    v: 'V',
    w: 'W',
    x: 'X',
    y: 'Y',
    z: 'Z'
  }
  
  function first(s,d){
      let ans= "";
      ans+=s[0];
      for(let i=1;i<s.length;i++){
          if((s[i]>='a' && s[i]<='z') && s[i-1]==d){
              
              ans+=m[s[i]];
          }
          else if(s[i]==d){
              continue;
          }
          else{
              ans+=s[i];
          }
      }
      return ans;
  }
  
  console.log(first("the-test-case",'-'));