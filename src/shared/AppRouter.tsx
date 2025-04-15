import { authRouter } from "@/auth/auth-router"
import { chatRouter } from "@/chat/chat-router"
import { BrowserRouter, Route, Routes } from "react-router"
import { NotFount } from "./components/NotFount"


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {authRouter}
        {chatRouter}
        <Route path="*" element={<NotFount />} />
      </Routes>
    </BrowserRouter>
  )
}