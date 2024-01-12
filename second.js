function parser(s){
    const arr = [];
    let ctr=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='p'){
            ctr+=1;
        }
        else if(s[i]=='m'){
            ctr-=1;
        }
        else if(s[i]=='s'){
            ctr*=ctr;
        }
        else{
            arr.push(ctr);
        }
    }
    return arr;
}

console.log(parser("ppppsmoso"))