import { create } from 'zustand'

const useStore = create((set) => ({
  borderRadius: 16,
  themeScheme: 0,
  showComponents: false,
  showComments: false,
  circles:[],
  res: [{
    name:'Turmfalke',
    lat:'46.6333',
    lng:8.6000,
  },{
    name:'Eisvogel',
    lat:46.6683,
    lng:8.5702,
  },{
    name:'Wollishofen',
    lat:47.3769,
    lng:8.5417,
  }],
  rightDrawer:false,
  leftDrawer: false,
  isNotesOpen: true,
  isPropertiesOpen: true,
  isNavigationOpen: true,
  isTimelineOpen: true,
  showViewer: false,
  project: [],
  setNotes: (value) => set(() => ({ notes: value})),
  setCircles: (value) => set(() => ({ circles: value})),
  setBorderRadius: (value) => set(() => ({ borderRadius: value})),
  setThemeScheme: (value) => set(() => ({ themeScheme: value})),
  toggleShowComponents: () => set((state) => ({ showComponents: !state.showComponents})),
  toggleShowComments: () => set((state) => ({ showComments: !state.showComments})),
  toggleRightDrawer: () => set((state) => ({ rightDrawer: !state.rightDrawer})),
  toggleLeftDrawer: () => set((state) => ({ leftDrawer: !state.leftDrawer})),
  setRes: (value) => set(() => ({ res: value })), // Function to update 'res'
  setProject: (value) => set(() => ({ project: value })), // Function to update 'res'
  toggleShowViewer: () => set((state) => ({ showViewer: !state.showViewer })),
}));

export default useStore;
