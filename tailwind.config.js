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
            },
            boxShadow:{
                'md-dark' : '2px 2px 10px gray'
            },
            scale: {
                '99' : '.99'
            },
            borderWidth: {
                '1' : '1px',
                '6' : '6px'
            }
        },
    },
    variants: {
        scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
    plugins: [],
};
