const HtmlWebpackPlugin =require('html-webpack-plugin');
const path =require('path');

module.export ={
    mode:'development',
    entry:'./app.js',//入口文件
    output:{
        path:path.join(__dirname,'./dist'),//指定打包后在哪个文件夹
        filename:'bundle.js'//打包后生成的文件名
    },
    plugins:[
        new HtmlWebpackPlugin({//作用1、是创建一个在内存中的html
                               //作用2、自动把打包好的bundle.js追加到页面中
            template:path.join(__dirname,'./src/index.html'),//指定模板页面
            filename:'index.html'//指定生成页面的名称
        })
    ],
    //配置publicPath目的是使得打包的资源根据当前的文件夹去拿对应的库的文件，如果不添加就可能会报错
    publicPath:'./',
    externalsType:'script',
    externals:{
        Vue:'Vue', //第一种方式：声明需要外部CDN引入的库名，
                    //然后在index.html中添加script标签引入外部cdn路径
                    //这里key值是你入口js文件from 后面的值，而value是你 import后面的值
        jQuery:[//第二种方式，直接在这里引入这个cdn地址但是要在上面添加一个externalsType属性，
                    //告诉浏览器下面这个链接是以script标签方式引入
            'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js',
            '$'
        ]
    }
}