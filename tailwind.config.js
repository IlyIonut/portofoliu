module.exports = {
    purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
    darkMode: 'class',
    content: ['./src/**/*.{html,js}'],
    theme: {
        fontFamily: {
            'kaushan': ['Kaushan Script', ],
          },
        boxShadow:{
           'custom-light':" 0 0 10px #313131",
            'custom-dark':"5px 5px 10px #0a0c0e , -5px -5px 10px #14161c" 
        },
        extend: {
            colors:{
                green:{
                    DEFAULT: '#2596be',
                },
                greenxt:{
                    DEFAULT: '#63a4ff',
                },
                dark:{
                    DEFAULT: "#010101",
                    100: "#0a0b0e",
                    200: "#16181d",
                    300: "#16181d",
                    500: "#0f1115",
                    700: "#202125",
                },
                bluext:{
                     DEFAULT:'#83eaf1 ',
                }
            },
        },
    },
    variants: {
        extend: {
            boxShadow:["dark"]
        },
    },
    plugins: [],
}
