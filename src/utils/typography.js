import Typography from "typography"
import Theme from "typography-theme-moraga"

Theme.googleFonts.push(
  {
    name: "Kiwi+Maru",
    styles: ["300"],
  },
  {
    name: "Space+Mono",
    styles: ["400"],
  },
  {
    name: "Noto+Sans+JP",
    styles: ["400"],
  }
)

// Theme.headerFontFamily = ["Space Mono"]
// Theme.bodyFontFamily = ["Space Mono", "Kiwi Maru", "serif"]
Theme.headerFontFamily = ["Nato Sans JP"]
Theme.bodyFontFamily = ["Nato Sans JP"]
const typography = new Typography(Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
