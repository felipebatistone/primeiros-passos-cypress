function compararNumeros(num1,num2){
    if(num1 < num2){
        return "numero dois é maior "
    } else if(num1 == num2){
      return "eles sao iguais"
    }else{
        return "numero um é maior"
    }
}
console.log(compararNumeros(5,5))