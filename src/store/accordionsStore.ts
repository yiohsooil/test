import { create } from 'zustand';

type UseAccordionsExpandedProps = {
  expanded: string | false;
  setExpanded: (panel: string | false) => void;
};

const useAccordionsExpanded = create<UseAccordionsExpandedProps>((set) => ({
  expanded: 'panel1',
  setExpanded: (panel) => set({ expanded: panel }),
}));

export default useAccordionsExpanded;
