import { Button, ScrollArea } from "@/shared/components"
import { CustomerLink, type CustomerProps } from "./CustomerLink"

const CUSTOMERS: CustomerProps[] = [
  // use random uuid for all customers
  { id: "917f99d3-3ed4-435a-890b-50352f53d083", name: "G5 Customer", initials: "G5", color: "bg-blue-500" },
  { id: "e86cd55f-ea9d-45a0-8fb5-4584d491f50c", name: "Alice Smith", initials: "AS", color: "bg-purple-500" },
  { id: "50b5a699-e5da-4cb1-95db-946bcab3d6ec", name: "Robert Johnson", initials: "RJ", color: "bg-yellow-500" },
  { id: "015d178c-8cbb-41de-841c-c3db32f1b2c0", name: "Emma Wilson", initials: "EW", color: "bg-pink-500" },
  { id: "ad37faec-c261-4202-9620-4db1962f04f0", name: "Thomas Miller", initials: "TM", color: "bg-gray-500" },
  { id: "ced1feaf-59c6-48fa-91f6-2928bd21526c", name: "Sarah Brown", initials: "SB", color: "bg-red-500" },
]

export const CustomerList = () => {
  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {
              Array.from({ length: 3 }, (_, i) => (
                <CustomerLink key={CUSTOMERS[i].id} {...CUSTOMERS[i]} />
              ))
            }
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          {
            Array.from({ length: 2 }, (_, i) => (
              <CustomerLink key={CUSTOMERS[i + 3].id} {...CUSTOMERS[i + 3]} />
            ))
          }
        </div>
      </div>
    </ScrollArea>
  )
}