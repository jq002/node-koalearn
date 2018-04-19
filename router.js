const Koa=require('koa');
const fs=require('fs');
const Router=require('koa-router');
 const app=new Koa();

 let home=new Router();
 home.get('/',async(ctx)=>{
     let html=`
                <ul>
                    <li><a href='/page/helloworld'>to helloword</a></li>
                    <li><a href='/page/404'>to 404</a><li>
                </ul>`;
     ctx.body=html;
 });

 let page=new Router();
 page.get('/404',async(ctx)=>{
     ctx.body='404 page';
 }).get('/helloworld',async(ctx)=>{
     ctx.body='helloworld page';
 });

 let router=new Router();
 router.use('/',home.routes(),home.allowedMethods());
 router.use('/page',page.routes(),page.allowedMethods());

 app.use(router.routes()).use(router.allowedMethods());

 app.listen(3333,()=>{
     console.log('starting at port 3333')
 })
