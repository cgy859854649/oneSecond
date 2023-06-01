// eslint-disable-next-line import/no-extraneous-dependencies
import { useRoutes, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { LoadingOutlined } from "@ant-design/icons";
// eslint-disable-next-line import/no-extraneous-dependencies
// import store from "storejs";

const Login = React.lazy(() => import("../views/login"));
const LayoutView = React.lazy(() => import("../views/LayoutView"));

export default function RouterConfig() {
  // function AuthRoute(params) {
  //   const token = store.get("token");
  //   // eslint-disable-next-line react/destructuring-assignment
  //   return token ? params.children : <Navigate to="/login" />;
  // }
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/layout" />,
    },
    {
      path: "/layout",
      element: (
        <Suspense fallback={<LoadingOutlined />}>
          <LayoutView />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<LoadingOutlined />}>
          <Login />
        </Suspense>
      ),
    },
  ]);
}
