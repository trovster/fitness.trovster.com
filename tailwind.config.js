/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk,js}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        move: '#fa114f',
        exercise: '#92e82a',
        stand: '#1eeaef'
      },
      keyframes: {
        ring: {
          to: {
            'stroke-dashoffset': 0
          }
        }
      },
      animation: {
        move: 'ring 950ms 550ms ease-in-out forwards',
        exercise: 'ring 1200ms 300ms ease-in-out forwards',
        stand: 'ring 1450ms 50ms ease-in-out forwards',
        'pulse-once': 'pulse 1000ms linear'
      }
    },
  }
}
