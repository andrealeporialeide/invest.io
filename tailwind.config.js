module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      tightest: '-.075em',
       tighter: '-.05em',
      tight: '-.025em',
       normal: '0',
      wide: '.025em',
       wider: '.05em',
      widest: '.1em',
      widest: '.25em',
     }
     
   },
     plugin : [ 
    require ( '@tailwindcss/line-clamp' ) , 
    require('daisyui'),
    require('@themesberg/flowbite/plugin'),
    // ... 
  ] , 
 }
