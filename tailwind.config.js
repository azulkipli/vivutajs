/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "fs-15": "15px",
      },
      colors: {
        flik: {
          primary: "#1f1f54",
          dark: "#10102B",
          orange: "#f75541",
          "secondary-blue": "#0865c5",
          "gray-ef": "#EFEFEF",
          "green-discount": "#0f971d",
        },
      },
    },
  },
  variants: {
    extend: {},
    variants: {
      opacity: ({ after }) => after(["disabled"]),
      borderColor: ["responsive", "hover", "focus", "focus-within"],
    },
  },
  // plugins: [require("@tailwindcss/forms")],
}
