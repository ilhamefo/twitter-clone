module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'white': '0 4px 6px -1px rgba(255, 255, 255, 0.5), 0 2px 4px -1px rgba(255, 255, 255, 0.5)',
      },
      maxWidth: {
        '2/3': '55.66666%'
      },
      minHeight: {
        '44': '11rem'
      },
      maxHeight: {
        'max': 'max-content',
        'min': 'min-content',
        '44': '11rem',
      },
      colors: {
        'twitter': '#1DA1F2',
        'twitter-thread': '#3D5466',
        'tweet-hover': '#1c2732',
        'twitter-btn-hover': '#1a91da',
        'twitter-secondary-hover': '#20394d',
        'twitter-hover': '#162d3f',
        'twitter-bg': '#15202B',
        'twitter-gray': '#1c2433',
        'twitter-input': '#253341',
        'trending-bg': '#192734',

      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['group-focus'],
      textColor: ['group-focus'],
      ringColor: ['group-focus', 'focus-within'],
      ringWidth: ['group-focus', 'focus-within'],
      fill: ['group-focus', 'focus-within'],
    }
  },
}
