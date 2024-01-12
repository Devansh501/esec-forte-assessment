function legal(s){
    let ctr=0;
    for(let i=0;i<s.length;i++){
        if((s[i]<='z' && s[i]>'n') || (s[i]>='A' && s[i]<='Z')){
            ctr+=1;
        }
    }
    return ctr;
}

console.log(legal("abaxbdbbyyhwawiwjjjwem"));

//input case is given wrong in the assessment, answer is 7 but 8 is given;