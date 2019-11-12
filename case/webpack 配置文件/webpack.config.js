let Path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
let htmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require("webpack");


module.exports={
	mode:"development",  //开发模式
	entry:Path.resolve(__dirname,"./src/entry.js"),
	output:{
		path:Path.resolve(__dirname,"bundle"),
	},
	devServer:{
		contentBase:'./bundle',
		open:true,
		port:9527,
		hot:true,
		hotOnly:true
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			 // 它会应用到普通的 `.js` 文件
     		 // 以及 `.vue` 文件中的 `<script>` 块
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:{
					loader:'babel-loader',
					options:{
						presets:[
							[
								"@babel/preset-env",
								{
									useBuiltIns:'usage'
								}
							]
						]
					}
				}
			},
			// 它会应用到普通的 `.css` 文件
      		// 以及 `.vue` 文件中的 `<style>` 块
			{
				test:/\.css$/,
				use:[
					'vue-style-loader',
					'css-loader',
					'postcss-loader'
				]
			},
			// 其他文件 
			{
				test:/\.(jpg|pan|gif|jpeg)$/,
				use:[
					{
						loader:'file-loader',
						options:{
							outputPath:'./images',
							name:"[name].[ext]"
						}
					}
				]
			},
			// 字体文件 
			{
				test:/\.(eot|svg|ttf|woff|woff2)$/,
				use:[
					{
						loader:'file-loader',
						options:{
							outputPath:'./fonts',
							name:"[name].[ext]"
						}
					}
				]
			}
		]
	},
	plugins:[
		
		new htmlWebpackPlugin({
			template:"./public/template.html"
		}),
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
}
