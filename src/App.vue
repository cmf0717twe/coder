<template>
	<div id="app">
		<keep-alive exclude="Publicity">
			<!-- 将最开始的宣传页面排除在keep-alive之外,如果要排除两个以上的组件,用逗号隔开即可(警告:此次逗号后不可加空格) -->
			<router-view />
		</keep-alive>
	</div>
</template>

<style>
	body,
	div,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	table,
	tr,
	td,
	th,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	span,
	html,
	textarea,
	select,
	option,
	button,
	strong,
	em {
		margin: 0;
		padding: 0;
	}

	a,
	a:link,
	a:active,
	a:hover,
	a:visited {
		text-decoration: none;
		color: #3c3c3c;
	}

	textarea,
	button,
	select,
	option {
		border: 0px;
		background-color: transparent;
		outline: none;
	}

	ul,
	ol,
	li {
		list-style: none;
		padding: 0px;
		margin: 0px;
	}

	img {
		width: 100%;
		display: block;
	}

	.clearFloat::after {
		display: block;
		content: "";
		height: 0px;
		visibility: hidden;
		clear: both;
		*zoom: 1;
		/*IE的过滤器*/
	}

	.fl {
		float: left;
	}

	.fr {
		float: right;
	}

	.ab {
		position: absolute;
	}

	.re {
		position: relative;
	}

	.c {
		text-align: center;
	}
</style>
