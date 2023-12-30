import { APP_COLORS } from "../styling/colors";

export const SCREENS_NAME = {
  Login: "Login",
  Home: "Home",
};

export const VIEWS_NAME = {
  Dashboard: "Dashboard",
  Profile: "Profile",
  Settings: "Settings",
  Statistics: "Statistics",
};

export const ETABSLabel = {
  Statistiques: "Statistiques",
  Monotoring: "Monitoring",
};

export const TABS = [
  {
    label: ETABSLabel.Statistiques,
    code: 1,
  },
  {
    label: ETABSLabel.Monotoring,
    code: 2,
  },
];

export const EApplicationStatus = {
  success: "success",
  "internal-failure": "internal-failure",
  "service-failure": "service-failure",
};

export const getStatusColor = (status = "") => {
  try {
    switch (status) {
      case EApplicationStatus.success:
        return {
          color: APP_COLORS.GREEN_COLOR_TRANSPARENT.color,
          textColor: APP_COLORS.GREEN_COLOR.color,
        }
      case EApplicationStatus["service-failure"]:
        return {
          color: APP_COLORS.RED_COLOR_TRANSPARENT.color,
          textColor: APP_COLORS.RED_COLOR.color,
        }

      case EApplicationStatus["internal-failure"]:
        return {
          color: APP_COLORS.BLUE_COLOR_TRANSPARENT.color,
          textColor: APP_COLORS.BLUE_COLOR.color,
        }
      default:
        return {
          color: APP_COLORS.WHITE_COLOR.color,
          textColor: APP_COLORS.WHITE_COLOR.color,
        }
    }
  } catch (error) {}
};

export const getStatusLabel = (status = "") => {
  try {
    switch (status) {
      case EApplicationStatus.success:
        return "Réussi";
      case EApplicationStatus["service-failure"]:
        return "E.Service";
      case EApplicationStatus["internal-failure"]:
        return "E.Interne";
      default:
        return APP_COLORS.BLACK_COLOR.color;
    }
  } catch (error) {}
};
