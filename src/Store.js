import { create } from 'zustand'


const useStore = create((set) => ({
  borderRadius: 16,
  themeScheme: 0,
  showComponents: false,
  showComments: false,
  circles:[],
  res:[
    {
        "iri": "Project 1",
        'lat': 55.672278,
        'lng': 12.5785,
    },
    {
        "iri": "Project 2",
        'lat': 55.6273872,
        'lng': 12.579409,
    },
],
  rightDrawer:false,
  leftDrawer: false,
  isNotesOpen: true,
  isPropertiesOpen: true,
  isNavigationOpen: true,
  isTimelineOpen: true,
  showViewer: false,
  project: [],
  portfolio:   {
    name:'Swiss Property',
    colorTheme:0,
    map:'mapbox://styles/aechack2024/cltfvi20g00r401qn6l1shoag',
    initialViewState: {
      latitude: 47.3769,
      longitude: 8.5417,
      zoom: 6
    }},
  portfolioNumber: 0,
  portfolios:[
    {
      name:'Swiss Property',
      colorTheme:0,
      map:'mapbox://styles/aechack2024/cltfvi20g00r401qn6l1shoag',
      initialViewState: {
        latitude: 47.3769,
        longitude: 8.5417,
        zoom: 6
      }
    },
    {
      name:'Copenhagen AEC',
      colorTheme:1,
      map:'mapbox://styles/aechack2024/cltaoevq300uu01pje4rwdi24',
      initialViewState: {
        latitude: 55.6811,
        longitude: 12.5981,
        zoom: 7
      }
    }
  ],
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
  setPortfolio: (value) => set(() => ({ portfolio: value })), // Function to update 'res'
  setPortfolioNumber: (value) => set(() => ({ portfolioNumber : value })), // Function to update 'res'
  toggleShowViewer: () => set((state) => ({ showViewer: !state.showViewer })),
}));

export default useStore;
