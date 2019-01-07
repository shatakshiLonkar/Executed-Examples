const math=require('mathjs')
let matrixAdditionAB=0 ;


// addition
exports.add=function(a,b)
{
if(!a)
{
    return b;
}
if(!b)
{
    return a;
}

if(!a && !b)
{
    return undefined;
}
else
{
    const matrixAdditionAB = math.add(a,b);
    return matrixAdditionAB.toArray();
}       
//console.log(matrixAdditionAB);
}

 //subtraction
 exports.substract=function(a,b)
{
if(!a)
{
    return b;
}
if(!b)
{
    return a;
}

if(!a && !b)
{
    return undefined;
}
else
{
    const matrixsubAB = math.subtract(a,b);
    return matrixsubAB.toArray();
}       
}
//console.log(matrixsubAB);


// multiplication


exports.multiply=function(a,b)
{
if(!a)
{
    return undefined;
}
if(!b)
{
    return undefined;
}

if(!a && !b)
{
    return undefined;
}
else
{
    
const matrixKL = math.multiply(a,b);
return matrixKL.toArray();
}       
}



//console.log(matrixKL);



/*
inverse

const matrixinv=math.inv(a);
console.log(matrixinv);*/

//transposee
exports.transpose=function (matrix) {

    
    if(!matrix)
    {
        return undefined;
    }

    
    else
    {
        const matrixT = math.transpose(matrix);
        return matrixT.toArray();
    }
    

         
          }
        
      
    



