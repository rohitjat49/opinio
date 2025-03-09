/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   primary: "#1E293B",  // Dark Gray (Background)
      //   secondary: "#334155", // Light Gray (Card Background)
      //   blueBtn: "#3B82F6", // Yes Button Color
      //   redBtn: "#EF4444", // No Button Color
      //   textPrimary: "#FFFFFF", // White Text
      //   textSecondary: "#9CA3AF", // Light Gray Text
      // },
      fontSize: {
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "22px",
        "2xl": "26px",
      },
      backgroundImage: {
        "pattern": "url('/images/bg-pattern.png')",
      },
    },
  },
  plugins: [],
};
