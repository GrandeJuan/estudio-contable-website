import { ViteReactSSG } from 'vite-react-ssg';
import './index.css';
import { routes } from './routes';

// Entry unificado: en el navegador hidrata la app; en build (Node) prerenderiza
// cada ruta a HTML estático. No se llama a createRoot manualmente.
export const createRoot = ViteReactSSG({ routes });
