function replaceSpace(s,repalceValue){
    let res ="";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            res+="repalceValue"
        }else{
            res+=s[i]
        }
    }
    return res;
}