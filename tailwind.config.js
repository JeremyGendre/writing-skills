module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      width: {
        '72' : '20rem',
        '80' : '24rem',
        '88' : '28rem',
        '96' : '32rem',
      },
      height: {
        '72' : '20rem',
        '80' : '24rem',
        '88' : '28rem',
        '96' : '32rem',
      },
      backgroundImage: {
        'mouse' : "url('/images/mouse.jpg')",
        'keyboard' : "url('/images/keyboard.jpg')",
      }
    },
  },
  variants: {},
  plugins: [],
};
