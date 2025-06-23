export default defineAppConfig({
  toaster: {
    position: "top-center" as const,
    expand: false,
    duration: 5000,
  },
  ui: {
    colors: {
      primary: "sky",
      secondary: "blue",
      success: "green",
      info: "blue",
      warning: "yellow",
      error: "red",
      neutral: "slate",
    },
  },
  uiPro: {
    pageGrid: {
      base: "relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
    },
  },
})
