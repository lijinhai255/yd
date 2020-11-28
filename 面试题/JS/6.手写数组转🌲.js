/**
 * 将input 转成output
 * **/
let input = [
    {
        id:1,
        val:"学校",
        parentId:null,
    },
    {
        id:2,
        val:"班级1",
        parentId:1,
    },
    {
        id:3,
        val:"班级2",
        parentId:1,
    },
    {
        id:4,
        val:"学生1",
        parentId:2,
    },
    {
        id:5,
        val:"学生1",
        parentId:2,
    }, {
        id:6,
        val:"学生2",
        parentId:3,
    }, {
        id:7,
        val:"学生3",
        parentId:3,
    }
]
let outPut = {
    id:1,
    val:"学校",
    children:[
        {
            id:2,
            val:"班级1",
            children:[
                {
                    id:4,
                    val:"学生1",
                    children:[]
                },
                {
                    id:5,
                    val:"学生2",
                    children:[]
                }
            ]
        },
        {
            id:3,
            val:"班级2",
            children:[
                {
                    id:6,
                    val:"学生6",
                    children:[]
                }
            ] 
        }
    ]
}
function arrayToTree(array){
    let root = array[0]
    let tree = {
        id:root.id,
        val:root.val,
        children:array.length>0?ToTree(root.id,array):[]
    }
    return tree
}
function ToTree(parentId,array){
    console.log(parentId,array)
    let children = []
    let len = array.length
    for (let i = 0; i < array.length; i++) {
        // const element = array[i];
        let node = array[i]
        console.log(node.parentId,parentId)
        if(node.parentId===parentId){
            children.push({
                id:node.id,
                val:node.val,
                children:ToTree(node.id,array)
            })
        }
        
    }
    return children

}
console.log(arrayToTree(input))