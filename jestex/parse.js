//exports.parse=function(number)
//{

   //let arr=[];
   // let sno=number.toString();
   exports.parse=function(n){  

    
   if(!n)
   {
       return undefined;
   }

   if(n)
   {
        var digits = (""+n).split("").map(Number);
        return digits;
   }



}
    
//console.log(digits);


   