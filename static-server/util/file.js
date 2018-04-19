const fs=require('fs')
/**
 * 读取文件
 * @param {string} filePath 文件本地绝对路径
 */
function file(filePath){
    let content= fs.readFileSync(filePath,'binary')
    return content
}
module.exports=file