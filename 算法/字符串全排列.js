/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    const arr = s.split('')
    const isUse = arr.slice().fill(0)
    const result = new Set()
    function dfs(temp) {
        for (let i = 0; i < s.length; i++) {
            if (!isUse[i]) {
                temp += s[i]
                if (temp.length >= s.length) {
                    result.add(temp)
                    return
                }
                isUse[i] = 1
                dfs(temp)
                isUse[i] = 0
                temp = temp.substr(0, temp.length - 1)
            }
        }
    }
    dfs('')
    return [...result]
};
