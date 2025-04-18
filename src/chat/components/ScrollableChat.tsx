import { getClient, getClientMessages } from "@/shared/data/fake"
import { useQuery } from "@tanstack/react-query"
import { ScrollArea } from "@/shared/components"
import { CustomerMessageCard } from "./message-card/CustomerMessageCard"
import { UserMessageCard } from "./message-card/UserMessageCard"
import { MessageCircleDashed } from "lucide-react"
import { useEffect, useRef } from "react"

interface Props {
  customerId: string
}
export const ScrollableChat = ({ customerId }: Props) => {
  const bottomRef = useRef<HTMLDivElement | null>(null)

  const { data: messages = [], isLoading } = useQuery({
    queryKey: ["clients", customerId, "messages"],
    queryFn: () => getClientMessages(customerId!),
  })

  const { data: customer } = useQuery({
    queryKey: ["clients", customerId],
    queryFn: () => getClient(customerId!),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!customerId,
  })

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages]);

  if (isLoading) return (
    <div className="flex flex-1 items-center justify-center h-full max-h-[calc(100vh-136px)]">
      <div className="flex flex-col items-center gap-2">
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-500"></div>
        <span className="text-gray-400">Loading messages...</span>
      </div>
    </div>
  )

  if (messages.length === 0) return (
    <div className="flex flex-1 flex-col items-center justify-center h-full max-h-[calc(100vh-136px)] gap-2">
      <span className="text-gray-400 text-lg flex flex-col items-center gap-1">
        <MessageCircleDashed className="size-8" />
        No messages yet
      </span>
    </div >
  )

  if (messages.length > 0) return (
    <ScrollArea className="flex-1 p-4 overflow-y-scroll max-h-[calc(100vh-136px)]">
      <div className="space-y-4">
        {messages.map((message, index) => (
          <div key={index} className="w-full">
            {message.sender === "client" ? (
              <CustomerMessageCard details={message} senderName={customer?.name} />
            ) : (
              <UserMessageCard details={message} />
            )}
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>
    </ScrollArea>

  )
}