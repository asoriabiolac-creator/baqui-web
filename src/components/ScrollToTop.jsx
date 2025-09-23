import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, key } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, key]); // Ahora se dispara en cambios de pathname O key

  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual'; // Desactiva la restauración de desplazamiento del navegador
    }
  }, []); // Se ejecuta solo una vez al montar el componente

  return null; // Este componente no renderiza nadaa
}

export default ScrollToTop;
