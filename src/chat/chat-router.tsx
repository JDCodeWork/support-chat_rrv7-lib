import { Route } from "react-router"

import { lazy, Suspense } from "react"
import { LoaderSpinner } from "@/shared/components/LoaderSpinner"
import { NoSelectedChatPage } from "./pages/NoSelectedChatPage"

const ChatLayout = lazy(() => import('./layout/ChatLayout'))
const ChatPage = lazy(() => import('./pages/SelectedChatPage'))

export const chatRouter = (
  <Route path="/chat" element={
    <Suspense
      fallback={<LoaderSpinner />}
    >
      <ChatLayout />
    </Suspense>
  }>
    <Route index element={<NoSelectedChatPage />} />
    <Route path=":customerId" element={<ChatPage />} />
  </Route>
)