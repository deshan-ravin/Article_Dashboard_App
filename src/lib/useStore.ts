import create from 'zustand';

interface StoreState {
  userName: string | null;
  setUserName: (name: string) => void;
  logout: () => void;
}

const useStore = create<StoreState>((set) => ({
  userName: null,
  setUserName: (name: string) => set({ userName: name }),
  logout: () => set({ userName: null }),
}));

export default useStore;
