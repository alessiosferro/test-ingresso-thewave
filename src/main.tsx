import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.scss';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import theme from "@/utils/theme";
import {ThemeProvider} from "@mui/material";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
