import { create } from 'zustand'


const useStore = create((set) => ({
  borderRadius: 16,
  themeScheme: 0,
  showComponents: false,
  showBldrs:false,
  showComments: false,
  circles:[],
  res:[],
  rightDrawer:false,
  leftDrawer: false,
  isNotesOpen: true,
  isPropertiesOpen: true,
  isNavigationOpen: true,
  isTimelineOpen: true,
  showViewer: false,
  colorTheme:3,
  res:[],
  project:0,
  portfolio: {
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
      coordinates: {
        lat:  46.6333,
        lng:  8.6000,
        zoom: 6
      },
      projects:[
        {
          name: "Project 1",
          lat: 47.3769,
          lng: 8.5417,
          projectInfo:[
            {
                "name": "http://example.com/buildings/BB/ESP1",
                "label": "Replacement of light bulbs on the back stairss and in the basement",
                "investment": "1000",
                "calculatedAnnualSavings": "2800",
                "simpleRepaymentPeriod": "0.4"
            },
            {
                "iri": "http://example.com/buildings/BB/ESP1",
                "label": "Re-insulation of floor towards the outside",
                "investment": "23400",
                "calculatedAnnualSavings": "1600",
                "simpleRepaymentPeriod": "15"
            },
          ]

        },
        {
          name: "Project 2",
          lat: 46.6333,
          lng: 8.6000,
          projectInfo:[
            {
                "name": "http://example.com/buildings/BB/ESP1",
                "label": "Replacement of light bulbs on the back stairss and in the basement",
                "investment": "1000",
                "calculatedAnnualSavings": "2800",
                "simpleRepaymentPeriod": "0.4"
            },
            {
                "iri": "http://example.com/buildings/BB/ESP1",
                "label": "Re-insulation of floor towards the outside",
                "investment": "23400",
                "calculatedAnnualSavings": "1600",
                "simpleRepaymentPeriod": "15"
            },
            {
                "iri": "http://example.com/buildings/BB/ESP2",
                "label": "Re-insulation of hot water risers",
                "investment": "19200",
                "calculatedAnnualSavings": "5600",
                "simpleRepaymentPeriod": "3.5"
            },
            {
                "iri": "http://example.com/buildings/BB/ESP3",
                "label": "Re-insulation of molded floor covering against unheated basement",
                "investment": "236000",
                "calculatedAnnualSavings": "6500",
                "simpleRepaymentPeriod": "36"
            }
          ]

        }
      ]
    },
    {
      name:'Prop Tech Denmark Challenge',
      colorTheme:1,
      map:'mapbox://styles/aechack2024/cltaoevq300uu01pje4rwdi24',
      coordinates: {
        lat: 55.6811,
        lng: 12.5981,
        zoom: 7
      },
      projects:[
        {
          name: "BloxHub Sample project",
          lat: 55.672278,
          lng: 12.5785,
          projectInfo:[
            {
                "name": "http://example.com/buildings/BB/ESP1",
                "label": "Replacement of light bulbs on the back stairss and in the basement",
                "investment": "1000",
                "calculatedAnnualSavings": "2800",
                "simpleRepaymentPeriod": "0.4"
            },
          ]

        },
      ]
    ,
    }
  ],
  setNotes: (value) => set(() => ({ notes: value})),
  setColorTheme: (value) => set(() => ({ colorTheme: value})),
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
  toggleShowBldrs: () => set((state) => ({ showBldrs: !state.showBldrs })),
}));

export default useStore;
