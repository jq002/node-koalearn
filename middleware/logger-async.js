function log(ctx){
    console.log('loggerAsync')
    console.log(ctx.method,ctx.header.host+ctx.url)
}

module.exports=function(){
    return async function(ctx,next){
        log(ctx);
        await next();
        console.log('logger end')
    }
}