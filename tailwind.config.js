/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        '4xl': '67.957px',
      },
      width: {
        '72px': '4.5rem',
        'small-width-card': '17.875rem',
        'small-width-card-logo': '1.875rem',
        'small-width-carg-side-logo': '0.84375rem',
        'width-section-side': '30.1875rem',
        'width-figure-card-section': '49.4375rem',
        'width-oval-card-section': '15.5rem',
        'width-card': '27.9375rem',
        'width-card-logo': '2.9375rem',
        'width-card-small-logo': '1.3125rem',
        'width-congrats-section': '23.8125rem',
      },
      height: {
        'small-height-card': '9.796875rem',
        'small-height-card-logo': '1.875rem',
        'small-height-carg-side-logo': '0.875rem',
        'small-height-button': '3.3125rem',
        'height-figure-card-section': '58.25rem',
        'height-oval-card-section': '41.0625rem',
        'height-card-logo': '2.9375rem',
        'height-card-small-logo': '1.3125rem',
      }, 
      inset: {
        'card-distance': '7.5rem',
        'safe-code-card-top': '4.45rem',
        'safe-code-card-right': '2.2rem',
        'oval-blue-card-section-top': '17.1875rem',
        'oval-blue-card-section-left': '8.25rem',
        'oval-orange-card-section-top': '2.404375rem',
        'oval-violet-card-section-left': '3.995625rem',
        'card-front-top': '10.25rem',
        'card-front-left': '11.6875rem',
        'card-back-top': '29.3125rem',
        'card-back-left': '16.125rem',
        'info-card-back-top': '6.9375rem',
        'info-card-back-right': '3.5625rem',
      },
      spacing: {
        'info-card-top': '1.1rem',
        'info-card-left': '1.1875rem',
        'margin-form-top': '5rem',
        'margin-label-bottom': '0.5625rem',
        'padding-input-top-bottom': '0.6875rem',
        'small-margin-check-logo': '2.1875rem',
        'info-card-front-top': '1.75rem',
        'info-card-front-left': '2rem',
        'form-section-margin-top': '16.5rem',
      },
      lineHeight: {
        'movil-input-text': '1.4375rem',
        'info-card-back': '1.125rem',
        'infor-card-front-numbers': '2.25rem',
      },
      fontSize: {
        '8px': '0.5rem',
        '9px': '0.5625rem',
        '14px': '0.875rem',
        '18px': '1.125rem',
        '28px': '1.75rem'
      }
    },
    colors: {
      "white": 'hsl(0, 0%, 100%)',
      "light-violet": 'hsl(270, 3%, 87%)',
      "dark-violet": 'hsl(279, 6%, 55%)',
      "black-violet": 'hsl(278, 68%, 11%)',
      "inpur-error": 'hsla(0, 100%, 66%, 1)',
      "gradient1": 'hsl(249, 99%, 64%)',
      "gradient2": 'hsl(278, 94%, 30%)',
      "blue": 'hsla(210, 100%, 64%, 1)',
      "orange": 'hsla(19, 100%, 64%, 1)',
      "violet": 'hsla(287, 100%, 61%, 1)',
      "input-border": 'hsla(278, 3%, 87%, 1)',
    }
  },
  plugins: [],
}