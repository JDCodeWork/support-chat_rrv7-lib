import {
  Button,
} from "@/shared/components"
import { LogOut, X } from "lucide-react"
import { Link, Outlet, useNavigate } from 'react-router'
import { CustomerList } from "../components/customer-list/CustomerList"
import { ContactDetails } from "../components/contact-details/ContactDetails"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { checkAuth } from "@/shared/data/fake"

const ChatLayout = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const onLogout = () => {
    localStorage.removeItem('token')

    queryClient.invalidateQueries({ queryKey: ['user'] })

    navigate('/auth/login', { replace: true })
  }

  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      const token = localStorage.getItem('token')
      if (!token) {
        navigate('/auth/login', { replace: true })
      }

      return checkAuth(token!)
    }
  })

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/10">
        <div className="p-4 border-b">
          <Link to="/chat" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary" />
            <span className="font-semibold">{userData?.name}</span>
          </Link>
        </div>
        <CustomerList />
        <div className="p-4 border-t w-full">
          <Button variant="ghost" className="w-full border border-transparent hover:border-red-400 hover:text-red-600 transition-colors cursor-pointer" onClick={onLogout}>
            <LogOut />
            <span className="ml-2">Logout</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 border-b p-4 flex items-center justify-between">
            <div></div> {/* Empty div to maintain spacing */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                Save conversation
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </header>
          <Outlet />
        </div>

        {/* Right Panel - Contact Details */}
        <div className="w-80 border-l">
          <div className="h-14 border-b px-4 flex items-center">
            <h2 className="font-medium">Contact details</h2>
          </div>
          <ContactDetails />
        </div>
      </div>
    </div>
  )
}

export default ChatLayout