const map=(array,x)=>{
    const array1=array;
    if(array[0]==null){
        return [];
    }
    else if(x='identity'){
        return array;
    }
    else if(x='cube'){
        for(var i=0;i<array.length;i++){
            array1[i]=array[i]*array[i]*array[i];
        }
        return array1;
    }
}
module.exports=map;
