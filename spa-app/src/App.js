import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './routers/AppRouters';
import 'normalize.css/normalize.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/styles.scss'

const root = createRoot(document.getElementById('app'));
root.render(<AppRouter />);
