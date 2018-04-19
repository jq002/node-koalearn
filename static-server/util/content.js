const path=require('path')
const fs=require('fs')
//读取目录内容
const dir=require('./dir')
//读取文件内容
const file=require('./file')

async function content(ctx,fullStaticPath) {
    let reqPath=path.join(fullStaticPath,ctx.url);
    let exist=fs.existsSync(reqPath);//如果路径存在返回true
    let content='';
    if(!exist){
        content='404 Not Found';
    }else{
        let stat=fs.statSync(reqPath);//返回一个fs.Stats实例（文件信息）
        if(stat.isDirectory()){
            //如果为目录,读取目录内容渲染
            content=dir(ctx.url,reqPath);
        }else{
            //请求为文件，读取文件内容
            content=file(reqPath)
        }
    }
    return content
    
}

module.exports=content