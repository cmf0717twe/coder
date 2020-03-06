const webpack = require('webpack')

module.exports = {//对默认配置不满意,想修改vuecli4的配置
	configureWebpack: {
	   plugins: [//导入jQuery所必须的配置
	      new webpack.ProvidePlugin({
	        $:"jquery",
	        jQuery:"jquery",
	        "windows.jQuery":"jquery"
	      })
	    ]
	}
}