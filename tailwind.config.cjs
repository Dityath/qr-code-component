module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'light-gray': 'hsl(212, 45%, 89%)',
				'grayish-blue': 'hsl(220, 15%, 55%)',
				'dark-blue': 'hsl(218, 44%, 22%)'
			},
			fontFamily: {
				outfit: ['Outfit', 'sans-serif']
			},
			fontSize: {
				paragraph: '14px'
			}
		}
	},
	plugins: []
};
