module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: {
        light: "#b90504",

        dark: "#990100",
      },
      white: {
        light: "#f6f6f6",

        dark: "#e8e8e8",

        rose: "#e9f5db",
      },
      black: {
        light: "#333333",
      },
      blue: {
        lightx2: "#2196f3",
        light: "#023e8a",
        dark: "#001845",
      },
      green: {
        dark: "#52b69a",
        light: "#99d98c",
        lightx2: "#d9ed92",
        dark2: "#181818",
      },
      orange: {
        dark: "#fb8500",
        light: "#ffb703",
      },
      gray: {
        light: "#7d8597",
        lightx2: "#e1ecf7",
      },
    },
    extend: {},
  },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
  },
  plugins: [],
}
