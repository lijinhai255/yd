var isIsomorphic = function(s, t) {
    console.log(s,t)
    if(s.length!==t.length) return false
    let sMap = new Map();
    let tMap = new Map();
    for (let i = 0; i < s.length; i++) {
        let sMspVal = sMap.get(s[i])
        let tMspVal = tMap.get(t[i])
        if((sMspVal&&sMspVal!==t[i])||(tMspVal&&tMspVal!==s[i])){
            return false
        }
        sMap.set(s[i],t[i])
        tMap.set(t[i],s[i])
        
    }
    return true
    
};
console.log(isIsomorphic("egg","add"))