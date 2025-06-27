const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {},
    },
    fontSize: {
      menu: 'var(--Font16)',
      submenu: 'var(--Font25)',
      submenuTimeline: 'var(--Font17)',
      base: 'var(--Font17)',
      tag: 'var(--Font13)',
      xs: 'var(--Font13)',
      sm: 'var(--Font16)',
      md: 'var(--Font26)',
      mm: 'var(--Font21)',
      lg: 'var(--Font25)',
      xl: 'var(--Font34)',
      h1: 'var(--Font85)',
      h2: 'var(--Font64)',
      h3: 'var(--Font40)',
      h4: 'var(--Font26)',
      btn: 'var(--Font17)',
      btn2: 'var(--Font21)',
      btn3: "var(--Font19)",
      '12': 'var(--Font12)',
      '17': 'var(--Font17)',
      '38': 'var(--Font38)',
      '55': 'var(--Font55)',
      '56': 'var(--Font56)',
      '64': 'var(--Font64)',
    },
    extend: {
      height: {
        'max-content': 'max-content',
      },
      fontFamily: {
        'din': ['DIN Pro', 'sans-serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      screens: {
        "2xs": "414px",
        "xs": "520px",
        "sm": "768px",
        "md": "992px",
        "lg": "1024px",
        "mid-xl": "1440px",
        "xl": "1620px",
        "2xl": "1536px",
        "3xl": "1600px",
        "4xl": "1706px",
        "5xl": "1920px",
        "6xl": "2048px",
        "7xl": "2327px",
        "8xl": "2560px", // MacBook Air 13
        "9xl": "2844px", // zoom mcbk 90%
        "10xl": "3200px", // zoom mcbk 80%
        "11xl": "3413px", // zoom mcbk 75%
        "12xl": "3840px", // zoom mcbk 67%
        "13xl": "5120px", // zoom mcbk 50%
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        strongPulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.2 },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        'slide-in-top': {
          '0%': {
            transform: 'translateY(-50%)',
            opacity: '0',
          },
          '500%': {
            transform: 'translateY(-30%)',
            opacity: '0.2 ',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      boxShadow: {
        '5xl': '0 10px 15px -3px rgb(0,0,0,9), 0 4px 6px -4px rgb(0,0,0,9);',
        'menu': '0 4px 4px 0 rgb(0 0 0 / 0.1)',
        'menuhover': '0 5px 10px 0 rgb(0 0 0 / 0.2)',

},
      animation: {
        'strong-pulse': 'strongPulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'slide-in-top': 'slide-in-top 1s ease forwards',
      },
      transitionDuration: {
        '240': '240ms',
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
        '3500': '3500ms',
        '4000': '4000ms',
      },
      transitionDelay: {
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
        '3500': '3500ms',
        '4000': '4000ms',
      },
      transitionTimingFunction: {
        'apple-slide-in': 'cubic-bezier(.4,0,.6,1)',
      },
      backgroundImage: {
        sectionMap : 'url("/Images/Dossier_8.svg")'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
