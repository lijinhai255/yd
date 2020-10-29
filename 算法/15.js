function replaceStr(str){
    //1 遍历 原字符串 统计空格 和非空格  字符的个数  计算替换后的新字符的长度
    let emptyNum = 0;
    let strNum = 0;
    let replaceStrNum = 0;
    let newReplaceStr = ''

    let j = 0;
    for ( let i= 0; i < str.length;i++) {
        if(str[i]===" "){ //是空格
            emptyNum++;
            newReplaceStr += "%20"
            j = j+3

        }else{ //  非空格
            strNum++
            newReplaceStr += str[i]
            j++
        }
    }
    replaceStrNum = emptyNum*3+strNum
    // 怎么提前算好 新的字符串 长度
    newReplaceStr.length = replaceStrNum
    return newReplaceStr
    
}

// console.log(replaceStr("We are haply hahah"))

function replaceStr(str){
    let emptyNum = 0;
    let strNum = 0;
    let replaceStrNum = 0;
    let newReplaceStr = []
    let j = 0;
    //1 遍历 原字符串 统计空格 和非空格  字符的个数  计算替换后的新字符的长度
    for(let i of str){
        // console.log(i)
        i===" "?emptyNum++:strNum++
    } 
    replaceStrNum = emptyNum*3+strNum
    // 怎么提前算好 新的字符串 长度
    // 指针 k 和 i 
    newReplaceStr.length = replaceStrNum
    for ( let i= 0; i < str.length;i++) {
        if(str[i]===" "){ //是空格
            newReplaceStr[j]= "%20"
            j = j+3

        }else{ //  非空格
            newReplaceStr[j]= str[i]
            j++
        }
    }
    return newReplaceStr
}

console.log(replaceStr("We are haply hahah").join(""))