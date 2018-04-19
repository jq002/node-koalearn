
const url=require('url')
const fs=require('fs')
const path=require('path')

const walk=require('./walk')
/**
 * 封装目录内容
 * @param {string} url 当前请求的上下文中的url，即ctx.url
 * @param {string} reqPath 请求静态资源的完整本地路径
 */
function dir(url,reqPath){

    let contentList=walk(reqPath)
    let html=`<ul>`
    for(let [index,item] of contentList.entries() ){
        html=`${html}<li><a href="${url==='/'?'':url}/${item}">${item}</a></li>`
    }
    html=`${html}</ul>`
    return html
}
module.exports=dir