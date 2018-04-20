const Koa=require('koa')
const app=new Koa()
app.use(async(ctx)=>{
    if(ctx.url==='/index'){
        ctx.cookies.set('cid','helloworld',{
            domain:'localhost',
            path:'/index',
            maxAge:10*60*1000,
            expires:new Date('2018-10-01'),
            httpOnly:false,
            overwrite:false

        })
        ctx.body='cookie is ok'
    }else{
        ctx.body='hello world'
    }

})

app.listen(3333,()=>{
    console.log('starting at port 3333')
})