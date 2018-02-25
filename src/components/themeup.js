import DarkTheme from "material-ui/lib/styles/themes/dark-theme";
import { Styles } from "material-ui";

// modified dark theme from mui to add missing stuff
let Dark = {
  getPalette: DarkTheme.getPalette,
  getComponentThemes(palette) {
    let themes = DarkTheme.getComponentThemes(palette);
    themes.appBar = {
      color: Styles.Colors.grey800
    };

    return themes;
  }
};

export default Dark;
