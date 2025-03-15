tailwind.config = {
    theme: {
        extend: {
            screens: {
                '3xl': '1440px',
                '2xl': '1280px',
                xl: '1024px',
                lg: '992px',
                md: '768px',
                DEFAULT: '1360px',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '24px',
                    '3xl': '80px',
                    '2xl': '60px',
                    xl: '40px',
                    lg: '24px',
                    md: '24px',
                },
            },

        },

        colors: {
            white: '#FFF',
            black: '#000',
            primary: {
                DEFAULT: "#0302FD",
                600: '#2955D9',
                500: '#4169E1',
                400: '#587AE1',
                300: '#6E8BE1',
                200: '#9BACE0',
                100: '#CCD4ED',
                50: '#F5F7FF',
                25: '#EFEFEF',
            },
            secondary: '#4169e1',
            neutralc: {
                // 1000: "#",
                950: "#0D0D0D",
                900: "#1A1A1A",
                800: "#333333",
                700: "#4D4D4D",
                600: "#666666",
                500: "#222222",
                400: "#999999",
                300: "#B3B3B3",
                200: "#CCCCCC",
                100: "#E6E6E6",
                50: "#F2F2F2",
            },

        }
    }
}