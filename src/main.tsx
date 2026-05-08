import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ReactQueryClient from './providers/ReactQueryClient';
import './services/mock';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryClient>
      <App />
      <Toaster richColors position='bottom-right' />
    </ReactQueryClient>
  </StrictMode>,
);
