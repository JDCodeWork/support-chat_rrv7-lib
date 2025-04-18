import { authRouter } from "@/auth/auth-router"
import { chatRouter } from "@/chat/chat-router"
import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import { NotFount } from "./components/NotFount"
import { useQuery } from "@tanstack/react-query"
import { checkAuth } from "./data/fake"
import { LoaderSpinner } from "./components/LoaderSpinner"


export const AppRouter = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      const token = localStorage.getItem("token")

      if (!token) {
        throw new Error("Token not found")
      }

      return checkAuth(token)
    },
    retry: 0
  })

  if (isLoading) return (
    <div className="flex items-center justify-center h-screen">
      <LoaderSpinner />
    </div>
  )

  const isAuthenticated = !!user

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/chat" />} />
        {authRouter}
        {chatRouter({ isAuthenticated })}
        <Route path="*" element={<NotFount />} />
      </Routes>
    </BrowserRouter>
  )
}