const maximum= (array) =>{
    var max= -Infinity;
    for(item of array)
    {
        if(item>max){
            max=item;
        }
    }
    return max;
}
module.exports=maximum;