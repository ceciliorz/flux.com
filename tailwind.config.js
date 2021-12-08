function spacing() {
  const scale = Array(101)
    .fill(null)
    .map((_, i) => [i * 0.5, `${i * 0.5 * 8}px`])
  const values = Object.fromEntries(scale)
  values.px = '1px'
  values.xs = '2px'
  values.sm = '4px'
  return values
}

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      white: 'var(--white)',
      black: 'var(--black)',
      transparent: 'transparent',
      gray: {
        50: 'var(--gray-050)',
        100: 'var(--gray-100)',
        200: 'var(--gray-200)',
        300: 'var(--gray-300)',
        400: 'var(--gray-400)',
        500: 'var(--gray-500)',
        600: 'var(--gray-600)',
        700: 'var(--gray-700)',
        800: 'var(--gray-800)',
        900: 'var(--gray-900)'
      },
      red: {
        50: 'var(--red-050)',
        100: 'var(--red-100)',
        200: 'var(--red-200)',
        300: 'var(--red-300)',
        400: 'var(--red-400)',
        500: 'var(--red-500)',
        600: 'var(--red-600)',
        700: 'var(--red-700)',
        800: 'var(--red-800)',
        900: 'var(--red-900)'
      },
      orange: {
        50: 'var(--orange-050)',
        100: 'var(--orange-100)',
        200: 'var(--orange-200)',
        300: 'var(--orange-300)',
        400: 'var(--orange-400)',
        500: 'var(--orange-500)',
        600: 'var(--orange-600)',
        700: 'var(--orange-700)',
        800: 'var(--orange-800)',
        900: 'var(--orange-900)'
      },
      yellow: {
        50: 'var(--yellow-050)',
        100: 'var(--yellow-100)',
        200: 'var(--yellow-200)',
        300: 'var(--yellow-300)',
        400: 'var(--yellow-400)',
        500: 'var(--yellow-500)',
        600: 'var(--yellow-600)',
        700: 'var(--yellow-700)',
        800: 'var(--yellow-800)',
        900: 'var(--yellow-900)'
      },
      green: {
        50: 'var(--green-050)',
        100: 'var(--green-100)',
        200: 'var(--green-200)',
        300: 'var(--green-300)',
        400: 'var(--green-400)',
        500: 'var(--green-500)',
        600: 'var(--green-600)',
        700: 'var(--green-700)',
        800: 'var(--green-800)',
        900: 'var(--green-900)'
      },
      blue: {
        50: 'var(--blue-050)',
        100: 'var(--blue-100)',
        200: 'var(--blue-200)',
        300: 'var(--blue-300)',
        400: 'var(--blue-400)',
        500: 'var(--blue-500)',
        600: 'var(--blue-600)',
        700: 'var(--blue-700)',
        800: 'var(--blue-800)',
        900: 'var(--blue-900)'
      },
      purple: {
        50: 'var(--purple-050)',
        100: 'var(--purple-100)',
        200: 'var(--purple-200)',
        300: 'var(--purple-300)',
        400: 'var(--purple-400)',
        500: 'var(--purple-500)',
        600: 'var(--purple-600)',
        700: 'var(--purple-700)',
        800: 'var(--purple-800)',
        900: 'var(--purple-900)'
      }
    },
    spacing: spacing(),
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary)'
      },
      backgroundImage: {
        'square-grid': "url('/images/bg-squaregrid.svg')"
      },
      borderRadius: {
        logo: '3px'
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        red: 'var(--text-red)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
