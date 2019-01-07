exports.rotate=function(k){
let arr=[1,2,3,4,5];



    if(k==0)
    {
        return arr;
    }
    if(!k)
    {
        return undefined;
    }

    if(k==-1)
    {
        return arr;
    }
    if(k>0)
    {   
        while(k--)
        {
            var temp=arr.shift();
            arr.push(temp);
        }
        return arr;

    }
    
}
