function isIsomorphic(s: string, t: string): boolean {
    const hash = {};

    for(let i = 0; i < s.length; i++){
        if(!hash['s' + s[i]]) hash['s' + s[i]] = t[i];
        if(!hash['t' + t[i]]) hash['t' + t[i]] = s[i];
        if(t[i] != hash['s' + s[i]] || s[i] != hash['t' + t[i]]) return false;
    }
    return true;
};