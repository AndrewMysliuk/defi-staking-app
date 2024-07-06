import { useEffect } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { RouteNames, privateRoutes, publicRoutes } from "."
import { useActions, useTypedSelector } from "@/shared/hooks"

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.common)

  const { checkUserLogin } = useActions()

  useEffect(() => {
    checkUserLogin()
  }, [checkUserLogin, isAuth])

  return isAuth ? (
    <div className="app">
      <div className="wrap">
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}

          <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
        </Routes>
      </div>
    </div>
  ) : (
    <div className="app">
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        ))}

        <Route path="*" element={<Navigate to={RouteNames.AUTH} />} />
      </Routes>
    </div>
  )
}

export default AppRouter
