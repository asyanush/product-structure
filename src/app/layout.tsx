import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/utils/theme"
//import { StyledEngineProvider } from '@mui/material/styles'

export const metadata: Metadata = {
  title: "Product Structure Application",
  description: "Product Structure Application"
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
//<StyledEngineProvider injectFirst>
const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en">
      <body className={roboto.variable}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export default RootLayout;