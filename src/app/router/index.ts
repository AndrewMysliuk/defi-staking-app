import React from "react"
import { MainPage } from "@/pages"

export interface IRoute {
  path: string
  element: React.ComponentType
}

export enum RouteNames {
  MAIN = "/",
  AUTH = "/auth",
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.AUTH,
    element: MainPage,
  },
]

export const privateRoutes: IRoute[] = []
