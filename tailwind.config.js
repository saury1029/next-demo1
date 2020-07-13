const isDevelopment = process.env.NODE_ENV === 'development';
console.log(isDevelopment);

module.exports = {
  purge: isDevelopment ? [] : ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
