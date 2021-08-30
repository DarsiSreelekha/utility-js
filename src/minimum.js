const minimum= (array) =>{
     var min= Infinity;
    for(item of array)
    {
        if(item<min){
            min=item;
        }
    }
    return min;
}
module.exports=minimum;