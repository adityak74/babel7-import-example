module.exports = function (api) {
	api.cache(false);

	const presets =  [
		[
			"@babel/preset-env",
			{
				loose: true,
				'useBuiltIns': 'entry'
			},
			"@babel/preset-react"
		]
	];
	const plugins = [
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-proposal-object-rest-spread",
		"@babel/plugin-transform-runtime"
	];
	return {
		presets,
		plugins,
	}
}
