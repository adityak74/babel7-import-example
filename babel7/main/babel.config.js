module.exports = function (api) {
		api.cache(false);
		const presets =  [
			[
				"@babel/preset-env",
				{
					loose: true,
					targets: {
						node: "current"
					},
					'useBuiltIns': 'entry'
				}
			]
		];
		const plugins = [
			[
				'module-resolver', {
					alias: {
						External: '../external'
					}
				}
			],
			['@babel/plugin-proposal-decorators', { legacy: true }],
			'@babel/plugin-proposal-object-rest-spread',
			'@babel/plugin-proposal-export-default-from',
			'@babel/plugin-proposal-export-namespace-from',
			'@babel/plugin-proposal-class-properties',
			'@babel/plugin-syntax-dynamic-import',
			'@babel/plugin-syntax-import-meta'
		];
		return {
			babelrcRoots: [
				'.',
				'../external',
			],
			presets,
			plugins
		}
}
