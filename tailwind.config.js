/** @type {import('tailwindcss').Config} */
export default {
	content: ["./**.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
                'main': "url('/img/background1.jpg')"
            },
            fontFamily: {
                'nuni': ['Noto'],
                'noto': ['Nunito']
            }
		},
	},
	plugins: [],
};
