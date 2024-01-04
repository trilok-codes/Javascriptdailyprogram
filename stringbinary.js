 function isBinary(str){
    //code here
    for(let i=0;i<str.length;i++){
        if(str[i] !=="1" && str[i] !=="0"){
            return false;
            
        }
    }
    return true;
}
const a = "4100";
console.log(isBinary(a));