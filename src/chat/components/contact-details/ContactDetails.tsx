import { getClient } from "@/shared/data/fake"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import { NoContactInfo } from "./NoContactInfo"
import { ContactInfoSkeleton } from "./ContactInfoSkeleton"
import { ContactInfo } from "./ContactInfo"

export const ContactDetails = () => {
  const { customerId } = useParams()

  const { data: customer, isLoading } = useQuery({
    queryKey: ['clients', customerId],
    queryFn: () => getClient(customerId!),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!customerId,
  })

  if (!customerId) {
    return <NoContactInfo />
  }

  if (isLoading && !customer) {
    return <ContactInfoSkeleton />
  }

  if (customer) {
    return <ContactInfo customer={customer} />
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">Contact Not Found</div>
    </div>
  )
}