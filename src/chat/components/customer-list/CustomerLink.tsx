import { NavLink } from "react-router";

interface Props {
  id: string;
  initials: string;
  name: string;
  color?: string;
}

export const CustomerLink = ({
  id,
  initials,
  name,
  color
}: Props) => {
  return (
    <NavLink
      to={`/chat/${id}`}
      className={({ isActive }) => `w-full flex px-4 py-2 rounded-lg justify-start ${isActive ? 'bg-gray-200' : ''}`}
    >
      <div className={`h-6 w-6 rounded-full ${color || 'bg-green-500'} mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs`}>
        {initials}
      </div>
      {name}
    </NavLink>
  )
}

export type { Props as CustomerProps }