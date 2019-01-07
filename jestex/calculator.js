exports.add=function(a,b)
{
if(a&&b)
{
    return a+b;
}
if(!b)
{
    return a;
}
if(!a)
{
    return b;
}

if((a && -b) || (-a && b))
{
    return a-b;
}

if(!a && !b)
{
    return undefined;
}

}
exports.sub=function(a,b) 
{
    {
        if(a&&b)
        {
            return a-b;
        }
        if(!b)
        {
        return a;

        }

        if(!a)
        {       
            return b*-1;
        }
        if((a && -b) || (-a && b))
        {
            return a-b;
        }
        if(!a && !b)
        {
            return undefined;
        }
    }

}
exports.mult=function(a,b) 
{
    {
        if(a&&b)
        {
            return a*b;
        }
        if((a && -b) || (-a && b))
        {
            return a*b;
        }
        if(!b)
        {
        return undefined;

        }

        if(!a)
        {       
            return undefined;
        }
        if(!a && !b)
        {
            return undefined;
        }
    }
    }

exports.div=function(a,b)
 {
     if(a&&b)
     {    
         return a/b;
     }
     if((a && -b) || (-a && b))
    {
         return a/b;
    }
    
    if(!b)
    {
        return undefined;

    }

    if(!a)
    {       
        return undefined;
    }
    if(!a && !b)
    {
        return undefined;
    }
}


