import Layout from './Layout';
import Home from './pages/Home';

// Rutas reales por path. El prerender estático (vite-react-ssg) genera un HTML
// por cada ruta; getStaticPaths (en ServicioPage) enumera los servicios.
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
    ],
  },
];
