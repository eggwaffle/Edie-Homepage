module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Heebo: "'Heebo', 'sans-serif'",
        Poppins: "'Poppins', 'sans-serif'",
        Montserrat: "'Montserrat', sans-serif",
      },
      colors: {
        'gray-main': '#4E5150',
        'gray-1': '#333333',
        'gray-2': '#4F4F4F',
        'gray-3': '#828282',
        'gray-4': '#BDBDBD',
        'gray-6': '#F2F2F2',
        'gray-button': '#E0E0E0',
        'blue-main': '#2D9CDB',
        'green-main': '#27AE60',
        'red-main': '#EB5757',
      },
      boxShadow: {
        'card': '0px 10px 30px rgba(51, 51, 51, 0.1)',
      },
    },
  },
  plugins: [],
}
