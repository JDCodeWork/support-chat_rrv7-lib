import { ScrollArea } from "@/shared/components"
import { CustomerLink } from "./CustomerLink"
import { useQuery } from "@tanstack/react-query"
import { getClients } from "@/shared/data/fake"
import { useParams } from "react-router"


export const CustomerList = () => {
  const { customerId } = useParams()

  const { data: customers, isLoading } = useQuery({
    queryKey: ['clients'],
    queryFn: () => getClients(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return (
    <ScrollArea className="h-[calc(100vh-137px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {
              isLoading && Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="w-full flex items-center px-4 py-2 rounded-lg justify-start">
                  <div className="size-6 rounded-full bg-gray-300 mr-2 flex-shrink-0 animate-pulse"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                </div>
              ))
            }
            {
              customers?.map(customer => (
                <CustomerLink
                  key={customer.id}
                  isActive={customer.id === customerId}
                  {...customer}
                />
              ))
            }
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          {
            isLoading && Array.from({ length: 2 }, (_, i) => (
              <div key={i} className="w-full flex items-center px-4 py-2 rounded-lg justify-start">
                <div className="size-6 rounded-full bg-gray-300 mr-2 flex-shrink-0 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
              </div>
            ))
          }
          {
            !isLoading && (
              <div className="flex items-center justify-center text-gray-500 text-sm">
                <p>No recent conversations</p>
              </div>
            )
          }
        </div>
      </div>
    </ScrollArea>
  )
}