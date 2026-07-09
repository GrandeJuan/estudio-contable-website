import Layout from './Layout';
import Home from './pages/Home';
import GuiasIndex from './pages/GuiasIndex';

// Rutas reales por path. El prerender estático (vite-react-ssg) genera un HTML
// por cada ruta; getStaticPaths (en ServicioPage y GuiaPage) enumera las rutas
// dinámicas (servicios y guías).
export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'servicio/:id',
        lazy: () => import('./pages/ServicioPage'),
        entry: 'src/pages/ServicioPage.jsx',
      },
      { path: 'guias', element: <GuiasIndex /> },
      {
        path: 'guias/:slug',
        lazy: () => import('./pages/GuiaPage'),
        entry: 'src/pages/GuiaPage.jsx',
      },
    ],
  },
];
