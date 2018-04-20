const Koa=require('koa')
const path=require('path')
const static=require('koa-static')

const app=new Koa()
const staticPath='./static'
app.use(static(path.join(__dirname,staticPath)))

app.use(async(ctx)=>{
    if(ctx.method==='GET'&&ctx.url.split('?')[0]==='/getData.jsonp'){
        let callbackName=ctx.query.callback||'callback';
        let returnData={
            success:true,
            data:{

                text:'this is a jsopn api',
                time:new Date().getTime,
                timeText:Date()
            }
        };
        let jsonpStr=`;${callbackName}(${JSON.stringify(returnData)})`//json格式传递数据
        ctx.type='text/javascript';
        ctx.body=jsonpStr;
    }
})

app.listen(3333,()=>{
    console.log('starting at port 3333')
})