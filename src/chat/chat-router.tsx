import { Route } from "react-router"

import { lazy, Suspense } from "react"
import { LoaderSpinner } from "@/shared/components/LoaderSpinner"
import { NoSelectedChatPage } from "./pages/NoSelectedChatPage"
import { PrivateRoute } from "@/shared/components/PrivateRoute"

const ChatLayout = lazy(() => import('./layout/ChatLayout'))
const ChatPage = lazy(() => import('./pages/SelectedChatPage'))

interface Props {
  isAuthenticated: boolean
}

export const chatRouter = ({ isAuthenticated }: Props) => (
  <Route path="/chat" element={
    <Suspense
      fallback={<LoaderSpinner />}
    >
      <PrivateRoute isAuthenticated={isAuthenticated}>
        <ChatLayout />
      </PrivateRoute>
    </Suspense>
  }>
    <Route index element={<NoSelectedChatPage />} />
    <Route path=":customerId" element={<ChatPage />} />
  </Route>
)