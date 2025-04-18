import { Message } from "@/chat/interfaces/chat.interface"

interface Props {
  details: Message
}
export const UserMessageCard = ({ details }: Props) => {
  return (
    <div className="flex flex-col items-end">
      <div className="text-right mb-1">
        <span className="text-sm font-medium mr-2">Me</span>
        <span className="text-sm text-muted-foreground">{details.createdAt.toLocaleDateString()}</span>
      </div>
      <div className="bg-black text-white p-3 rounded-lg max-w-[80%]">
        <p className="text-sm whitespace-pre-wrap">{details.content}</p>
      </div>
    </div>
  )
}