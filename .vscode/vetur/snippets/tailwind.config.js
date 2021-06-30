const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    mode: 'jit',
    darkMode: 'media',
    purge: [
        './public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                black: '#000000',
                white: '#ffffff',
                'light-blue': colors.lightBlue,
                red: colors.rose,
                indigo: colors.indigo,
                blue: colors.blue,
                green: colors.emerald,
                pink: colors.pink,
                purple: colors.indigo,
                orange: colors.orange,
                gray: colors.warmGray,
                'blue-gray': colors.blueGray,
                'true-gray': colors.trueGray,
                teal: colors.teal,
                cyan: colors.cyan
            },
            fontFamily: {
                sans: [
                    '"Inter var"',
                    ...defaultTheme.fontFamily.sans
                ]
            }
        }
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')]
}
