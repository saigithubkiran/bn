const countCharacters = (S) => {
      let countOfA = 0;
      let countOfD = 0;
      for (let character of S) {
          if (character === "A") {
              countOfA++;
          } else if (character === "D") {
              countOfD++;
          }
      }
      let B = [countOfA, countOfD];
      return B;
  };
  
  console.log(countCharacters("AbaDd"))
  
  var Count_Occ = (s) => 
  {
    let count=1;
  let str='';
  let op="";
  for(let i=0;i<s.length;i++){
  for(j=i+1;j<s.length;j++){
  if(s[i]==s[j]){
  count++;
  }
  }
  if(count>1){
  str=s[i];
  op=op+" "+s[i]+count;
  s=s.replace(str,' ');
  s=s.split(str).join('');
  }
  count=1;
  }
  return op.split(' ').sort().join(''); 
  }; 
  
  

  
  var Count_Vowels= (S) => 
  {
    var c=0
      c = S.match(/[aeiou]/gi).length
      return c    
  };



  
  const findLength = (S) => 
  {
     return S.length  
  };
   



  var Game_Winner = (S) => 
  {
    var ca=0,cd=0
    for(let i=0;i<S.length;i++)
    {
      if(S[i]=='A')
      ca++
      else
      cd++
    }
    // console.log(ca)
    // console.log(cd)
    if(ca>cd)
    return 'Aditya'
    else if(ca<cd)
    return 'Danish'
    else
    return 'Draw'
  }



   
  const joinStrings = (S, P) => 
  {
    let result=S.concat(P);
       return result;
  };
   



  
  var Palin_Check = (str) =>
  {
     const len = str.length;
  
      for (let i = 0; i < len / 2; i++) {
  
          if (str[i] !== str[len - 1 - i]) {
              return 'False';
          }
      }
      return 'True'; 
  }
  


  
  var Split_the_string = (S) => 
  {
    const myArray = S.split(" ");
    return myArray;
          
  };
   



  var String_Match = (S1,S2) => 
  {
    return ((S1===S2?"YES":"NO"))    
  };


   
  
  var Count_Vowels= (S) => 
  {
       let count = 0;
    
    for(let i = 0; i < S.length; i++){
      if(S.charAt(i) == "a" || S.charAt(i) == "A" || S.charAt(i) == "e" || S.charAt(i) == "E" || 
      S.charAt(i) == "i" || S.charAt(i) == "I" || S.charAt(i) == "o" || S.charAt(i) == "O" ||
      S.charAt(i) == "u" || S.charAt(i) == "U") {
        count++;
      }
    }
    return count;
  };



  var Count_Consonants= (S) => 
  {
     return S.length - Count_Vowels(S);  
  
         
  };
