import { Route, Navigate } from "react-router"

import { AuthLayout } from "./layout/AuthLayout"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"

export const authRouter = (
  <Route path="auth" element={<AuthLayout />}>
    <Route index element={<LoginPage />} />
    <Route path="new-account" element={<RegisterPage />} />

    <Route path="*" element={<Navigate to={'/auth'} />} />
  </Route>
)