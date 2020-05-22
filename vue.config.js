module.exports = {
	css: {
		loaderOptions: {
			less: {
				javascriptEnabled: true,
				//定制antd
				modifyVars: {
					// 'primary-color': $color,
					// 'link-color': $color,
					'border-radius-base': '4px',
					'font-size-base': '12px',
					'menu-collapsed-width': '60px',
					'tabs-card-height': '35px',
					'carousel-dot-width': '30px',
					'carousel-dot-height': '6px'
				}
			}
		}
	}
}