/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    container: { center: true, padding: '1.5rem' },
    extend: {
      colors: {
        cream: '#F2EDE5',
        bone: '#FAF6EE',
        ink: {
          DEFAULT: '#1A1A1A',
          soft: '#3A3530',
          mute: '#7A6F62',
          faint: '#A89B8A',
        },
        terracotta: {
          DEFAULT: '#B85542',
          deep: '#8E3D2F',
        },
        sage: {
          DEFAULT: '#8B9D7E',
          deep: '#6F8262',
        },
        brown: '#6B4F3D',
        anthracite: {
          DEFAULT: '#0E0D0B',
          warm: '#1F1B16',
          line: '#2F2A22',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', '"GT Sectra"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.6875rem', { lineHeight: '1.6', letterSpacing: '0.24em' }],
        micro: ['0.625rem', { lineHeight: '1.6', letterSpacing: '0.18em' }],
        nav: ['0.8125rem', { lineHeight: '1', letterSpacing: '0.04em' }],
        byline: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em' }],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.035em',
      },
      maxWidth: {
        essay: '38rem',
        prose: '42rem',
      },
      boxShadow: {
        pill: '0 8px 30px -12px rgba(26,26,26,0.18)',
        photo: '0 40px 120px -30px rgba(26,26,26,0.35), 0 1px 0 rgba(255,255,255,0.6) inset',
        anthracite: '0 60px 160px -40px rgba(14,13,11,0.55)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      backgroundImage: {
        'gradient-terracotta':
          'linear-gradient(135deg, #B85542 0%, #8E3D2F 60%, #6B4F3D 100%)',
      },
    },
  },
  plugins: [],
};
