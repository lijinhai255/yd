function parseQueryString(url){
    if(typeof url !=="string") throw new Error('invalid url')
    const search = decodeURIComponent(url).split("?")[1];
    if(!search) return {};
    return search.split("&").reduce((pre,cur)=>{
        const [key,value] = cur.split("=")
        pre[key] = value
        return pre
    },{})

}
parseQueryString("https://www.baidu.com/s?wd=Object.create&rsv_spt=1&rsv_iqid=0xc0cca63")