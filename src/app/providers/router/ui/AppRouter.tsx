import { memo, Suspense, useCallback } from "react";
import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "@/shared/config/routeConfig/routeConfig";
import { PageLoader } from "@/widgets/PageLoader";

import { AppRoutesProps } from "@/shared/types/router";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routerConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
