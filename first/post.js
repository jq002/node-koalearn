
const Koa=require('koa')
const app=new Koa();

app.use(async(ctx)=>{
    // console.log(ctx);

    console.log(ctx.url);
    if(ctx.url==='/'&&ctx.method==='GET'){
        let html=`    <h1>koa2 request post demo</h1>
        <form action="/" method="post">
            <input type="text" name="username" id="">
            <input type="text" name="nickname" id="">
            <button type="submit">sumbit</button>
        </form>`
        ctx.body=html
    }else if(ctx.url==='/'&&ctx.method==='POST'){
        let postData=await parsePostData(ctx)
        ctx.body=postData;

    }else{
        ctx.body='<h1>404 not found</h1>'
    }
})

// 解析上下文里node原生请求的POST参数
function parsePostData( ctx ) {
    return new Promise((resolve, reject) => {
      try {
        let postdata = "";
        ctx.req.addListener('data', (data) => {
          postdata += data
        })
        ctx.req.addListener("end",function(){
          let parseData = parseQueryStr( postdata )
          resolve( parseData )
        })
      } catch ( err ) {
        reject(err)
      }
    })
  }
  
  // 将POST请求参数字符串解析成JSON
  function parseQueryStr( queryStr ) {
    let queryData = {}
    let queryStrList = queryStr.split('&')
    console.log( queryStrList )
    for (  let [ index, queryStr ] of queryStrList.entries()  ) {
      let itemList = queryStr.split('=')
      queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
    }
    return queryData
  }
  
  app.listen(3333, () => {
    console.log('[demo] request post is starting at port 3333')
  })