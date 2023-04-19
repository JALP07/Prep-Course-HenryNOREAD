function mayorYMenorYPar(Num) {
    if(Num > 5 &&  Num < 10 && Num %2 ===0)console.log (true);
    else console.log (false);
};

mayorYMenorYPar (3);
mayorYMenorYPar (8);


function negacion(permiso){
    if(!permiso) console.log ("tiene permiso");
    
}     ;

negacion(false);
negacion(true)

function operadorOr(str){
if (str ==="henry" || str.length <2)console.log (true);
else console.log(false)

};
operadorOr("Madona");

function condicionCompleja(num){
    if( num>9 && num%2 ===0 || num ===3) console.log (true);
    else console.log(false);

};
condicionCompleja(3);
condicionCompleja(7);
condicionCompleja(12);
condicionCompleja(22);