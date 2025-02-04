"use client"

import { FC } from "react"
import { Route } from "next"
import { Link } from "lucide-react"
import { User } from "next-auth"
import { signOut } from "next-auth/react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import UserAvatar from "./UserAvatar"

interface UserAccountNavProps {
  user: Pick<User, "name" | "image" | "email">
}

const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className='h-8 w-8'
          user={{ name: user.name || null, image: user.image || null }}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className='bg-white' align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-1 leading-none'>
            {user.name && <p className='text-sm font-medium'>{user.name}</p>}
            {user.email && <p className='text-xs'>{user.email}</p>}
          </div>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          {/* TODO: Add profile route */}
          {/* <Link href='/profile'>Settings</Link> */}
          <Link href={"" as Route}>Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault()
            signOut({
              callbackUrl: "/",
            })
          }}
          className='cursor-pointer'
        >
          {" "}
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav
