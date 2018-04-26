const Koa=require('koa');

const loggerAsync=require("./logger-async");
const app=new Koa();
app.use(loggerAsync());
app.use((ctx)=>{
    ctx.body="hello world";
    console.log('hello world');
});
app.listen(3333);
console.log('the server starting at 3333');