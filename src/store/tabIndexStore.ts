import { create } from 'zustand';

type UseTabIndexProps = {
  tabIndex: number;
  setTabIndex: (index: number) => void;
};

const useTabIndex = create<UseTabIndexProps>((set) => ({
  tabIndex: 0,
  setTabIndex: (index) => set({ tabIndex: index }),
}));

export default useTabIndex;
