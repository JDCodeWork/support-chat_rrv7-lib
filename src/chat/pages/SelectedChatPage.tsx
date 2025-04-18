import { FormEvent, useState } from "react"
import { Button, Textarea } from "@/shared/components"
import { Send } from "lucide-react"
import { ScrollableChat } from "../components/ScrollableChat"
import { useParams } from "react-router"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { sendMessage } from "@/shared/data/fake"

const SelectedChatPage = () => {
  const [input, setInput] = useState("")

  const { customerId } = useParams()
  const queryClient = useQueryClient()

  const { mutate: sendMessageMutate } = useMutation({
    mutationFn: sendMessage,
    mutationKey: ["clients", customerId, "messages"],
    onSuccess: (newMessage) => queryClient.setQueryData(
      ["clients", customerId, "messages"],
      (oldMessages: any) => [...oldMessages, newMessage],
    ),
  })

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault()

    if (input.trim() === "") return

    sendMessageMutate({
      clientId: customerId!,
      content: input,
      createdAt: new Date(),
      sender: "agent",
    })

    setInput("")
  }

  return (
    <div className="flex flex-1 flex-col h-full">
      <ScrollableChat customerId={customerId!} />
      <div className="p-4 border-t">
        <form className="flex items-center gap-2" onSubmit={handleSendMessage}>
          <Textarea
            placeholder="Type a message as a customer"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[44px] h-[44px] resize-none py-3"
          />
          <Button type="submit" className="h-[44px] px-4 flex items-center gap-2">
            <Send className="h-4 w-4" />
            <span>Send</span>
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SelectedChatPage