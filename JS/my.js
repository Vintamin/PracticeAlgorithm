var w = require('./module')
console.log(w.name + "我是测试");


module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),//配置项指定了服务器资源的根目录。比如我们打包后的文件放入 dist目录下。
        headers: {
            'X-foo': '112233'
        },//在HTTP响应中注入一些HTTP响应头
        hot: true,//开启热更新
        port: '8081',//指定了开启服务器的端口号
        /* historyApiFallback用来应对返回404页面时定向跳转到特定页面的。一般是应用在 HTML5中History API 的单页应用，比如在访问路由时候，
        访问不到该路由的时候，会跳转到index.html页面。我们现在在dist目录下 新建一个index.html,  */
        historyApiFallback:true,
        //inline在构建变化后的代码会通过代理客户端来控制网页刷新
        inline: true,
        open: true,//自动打开浏览器
        //overlay用来在编译出错的时候，在浏览器页面上显示错误。该属性值默认为false，需要的话，设置该参数为true。
        overlay: true,
        stats: 'errors-only',
        //proxy 实现跨域
        proxy: {
            '/api': {
                target: 'http://news.baidu.com', // 目标接口的域名
                // secure: true,  // https 的时候 使用该参数
                changeOrigin: true,  // 是否跨域
                pathRewrite: {
                    '^/api': ''  // 重写路径
                }
            }
        }
    }
}