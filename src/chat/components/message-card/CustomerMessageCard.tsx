import { Message } from "@/chat/interfaces/chat.interface"

interface Props {
  details: Message
  senderName?: string
}
export const CustomerMessageCard = ({ details, senderName }: Props) => {
  return (
    <div className="flex gap-2 max-w-[80%]">
      <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0" />
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{senderName}</span>
          <span className="text-sm text-muted-foreground">{details.createdAt.toLocaleDateString()}</span>
        </div>
        <div className="p-3 bg-muted/50 rounded-lg">
          <p className="text-sm whitespace-pre-wrap">{details.content}</p>
        </div>
      </div>
    </div>
  )
}