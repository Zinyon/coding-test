function solution(msg) {
    let idx=0;
    let dict={};
    let answer = [];
    let dictIdx = 27;
    
    for(let i=1; i<=26; i++){
        const ch = String.fromCharCode(64+i);
        dict[ch]=i;
    }
    
    while(idx<msg.length){
        let w = msg.charAt(idx++);
        
        // 사전에 있을때까지 탐색
        while(idx<msg.length && dict[w+msg.charAt(idx)]){
            w+=msg.charAt(idx++);
        }
        
        answer.push(dict[w]);
        
        let c = msg.charAt(idx);
        
        dict[w+c]=dictIdx++;
    }
    
    return answer;
}
