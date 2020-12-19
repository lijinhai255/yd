const arr = [0, 1, 2, 4, 5, 7, 13, 15, 16, 17, 20, 21];

const find = (arr) => {
    let i = 0;
    const res = [];

    while (i <= arr.length - 1) {
        let j = i; // 记录起始点

        while (arr[i] + 1 === arr[i + 1]) {
            i++;
        }

        // 一旦不等 则说明进入了上面的 while 循环。则用 slice 进行截取
        if(i !== j) res.push(arr.slice(j, i + 1));

        i++;
    }

    console.log(res);
    return res;
};
find(arr);