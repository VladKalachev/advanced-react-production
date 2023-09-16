import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  // SETTINGS = "settings",
  ABOUT = "about",
  PROFILE = "profile",
  // ARTICLES = "articles",
  // ARTICLE_DETAILS = "article_details",
  // ARTICLE_CREATE = "article_create",
  // ARTICLE_EDIT = "article_edit",
  // ADMIN_PANEL = "admin_panel",
  // FORBIDDEN = "forbidden",
  // last
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
