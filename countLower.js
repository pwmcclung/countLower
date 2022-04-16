function lowercaseCount(str){
    let strLower = 0;
  for (let i =0; i < str.length; i++){
    if (str[i] >= "a" && str[i] <= "z"){
      strLower++
    }
  }
  return strLower;
}
