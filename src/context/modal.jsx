import { createContext, useContext } from 'react';

// Contexto para abrir el modal de consulta desde cualquier página/componente.
// El estado vive en el Layout; acá sólo se expone la función `openModal`.
export const ModalContext = createContext(() => {});

export function useModal() {
  return useContext(ModalContext);
}
