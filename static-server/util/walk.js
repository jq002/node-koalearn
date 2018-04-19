const fs=require('fs')
const mimes=require('./mimes')
/**
 * 遍历读取目录内容（子目录，文件名）
 * @param {string} reqPath 请求资源的绝对路径
 */
function walk(reqPath){
    let files= fs.readdirSync(reqPath);//read a directory
    let dirList=[],fileList=[];
    for(let i=0,len=files.length;i<len;i++){
        let item = files[i];
        let itemArr=item.split("\.");
        let itemMime=(itemArr.length>1)?itemArr[itemArr.length-1]:'undefined';
        if(typeof mimes[itemMime]==='undefined'){
            dirList.push(files[i]);
        }else{
            fileList.push(files[i]);
        }
    }
    let result=dirList.concat(fileList);//目录-文件顺序
    return result;
}

module.exports=walk;