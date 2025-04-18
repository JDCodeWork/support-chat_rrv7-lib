import { PropsWithChildren } from "react"
import { Navigate } from "react-router"

interface Props extends PropsWithChildren {
  isAuthenticated: boolean
}
export const PrivateRoute = ({ isAuthenticated, children }: Props) => {
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />
  }

  return children
}