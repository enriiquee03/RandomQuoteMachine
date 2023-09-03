import create from 'zustand';

const useColorStore = create((set) => ({
  color: '#ffff33', // Valor inicial, puedes cambiarlo si lo deseas
  setColor: (newColor) => set({ color: newColor }), // Función para actualizar el color
}));

export default useColorStore;