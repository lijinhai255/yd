/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let res = 0;
    const directions = [
        [1,0],
        [0,1]
    ];
    const queue = [[0,0]]
    const visited = {
        "0-0":true 
    }
    while(queue.length){
        const [x,y] = queue.shift();
        console.log(x,y,directions)
        if(bitSum(x)+bitSum(y)>k){
            continue ;
        }
        ++res;
        for(const direction of directions){
            const newx = direction[0] +x;
            const newy = direction[1] +y;
            if(!visited[`${newx}-${newy}`]&&
                newx>=0&&
                newy>=0&&
                newx<m&&
                newy<n){
                    queue.push([newx,newy])
                    visited[`${newx}-${newy}`] = true 
                }
        }
    }
    return res


};
function bitSum(n){
    let res = 0;
    while(n){
        res = res + (n%10)
        n = Math.floor(n/10)
    }
    return res
}
movingCount(2,2,1)