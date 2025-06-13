export default defineAppConfig({
  toaster: {
    position: "top-center" as const,
    expand: false,
    duration: 5000,
    // orientation: "vertical",
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
})
