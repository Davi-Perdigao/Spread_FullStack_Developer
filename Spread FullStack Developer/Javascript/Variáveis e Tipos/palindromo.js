function reverse(str)
  {
    let reverse_str = str.split('').reverse().join('');
    return reverse_str;
  }
 
  function is_palindrome(str)
  {
    if (!str) return;
    reverse_str = reverse(str);

    if( reverse_str === str)
    {
      console.log("A string informada é um palindromo");
    }
    else
    {
      console.log("A string informada não é um palindromo")
    }
  }

  let teste = "hellolleh";
  is_palindrome(teste);