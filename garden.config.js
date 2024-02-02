import SvelteRendererBuilder from "gardenjs/svelte";

export default {
  // Define the server port:
  serverport: 3010,

  devmodus: false,

  // Stop auto opening Gardenjs on start:
  no_open_browser: true,

  // This title is displayed above the navigation:
  project_title: "Minesweeper",

  // Here you can set a path to your own start page:
  // "welcome_page": "/src/custom_welcome_page.Svelte",

  // vite config file:
  // vite_config: "./garden.vite.config.js",

  // Each entry is output with its subpages in the page tree:
  structure: {
    components: "/src/components",
  },

  watch: {
    directories: ["./src/components"],
    include: [".svelte", ".das.json", ".scss", ".css", ".less", ".js", ".ts"],
  },

  renderer: {
    svelte: SvelteRendererBuilder,
  },

  // Add global style files needed for your project:
  //  additional_style_files: ["src/main.scss"],

  // Edit or disable "Themes" depending on whether your app uses themes.
  // According to your requirements, you may also need to adjust the
  // "onThemeChange" function below accordingly.
  // "themes": [
  //   {name: 'default', stageBg: 'white'},
  //   {name: 'dark', stageBg: '#101010'}, // manually set default active theme on start {active: true, name: 'dark', stageBg: '#101010'},
  //   {name: 'light', stageBg: '#eee'}
  // ],
  // "themeHandler": onThemeChange
};

////  Edit or disable the function "onThemeChange" according to your project (see also "themes" above):
//function onThemeChange(theme) {
//  if (theme === 'default') {
//   delete document.body.dataset.theme
//  } else {
//   document.body.dataset.theme = theme
//  }
//}
