import { NavLink } from "react-router";

interface Props {
  id: string;
  name: string;
  isActive?: boolean;
}

export const CustomerLink = ({
  id,
  name,
  isActive
}: Props) => {
  const initial = name.charAt(0).toUpperCase() + name.charAt(1).toLowerCase();

  return (
    <NavLink
      to={`/chat/${id}`}
      className={({ isActive }) => `w-full flex px-4 py-2 rounded-lg justify-start transition-colors ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
    >
      <div
        className={`size-6 rounded-full transition-colors mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs ${isActive
          ? 'bg-blue-500'
          : 'bg-gray-400'}`
        }
      >
        {initial}
      </div>
      {name}
    </NavLink>
  )
}

export type { Props as CustomerProps }