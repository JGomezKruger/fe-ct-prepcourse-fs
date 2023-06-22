function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:
    //let resultado=[]
    //let suma=[]
    
    //for (let i=0; i<10; i++){
    //  suma=num+=2;
    //  if (suma===i){
    //        break;
    //    }else{
    //        resultado.push(suma);
    //    }
    //}if(resultado<10){
    //    return 'Se interrumpió la ejecución'
    //}else{
    //    return resultado;   
//}

    let resultado = [];
    //let suma = num;
    for(var i= 0; i<10; i++) {
        suma=num+=2;
        if(suma === i){
            break;
        }else{
            resultado.push(suma);
        }
    }if(i < 10) {
        return 'Se interrumpió la ejecución';
    }else{
        return resultado;
    }
}console.log(breakStatement(-2))