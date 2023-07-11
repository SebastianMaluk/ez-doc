import { AvatarProps } from '@radix-ui/react-avatar'
import { Avatar, AvatarFallback } from '@/components/ui/Avatar'
import { User } from 'next-auth'
import Image from 'next/image'
import { FC } from 'react'
import { Icons } from './Icons'

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'name' | 'image'>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar>
      {user.image ? (
        <div className='relative aspect-square h-full w-full'>
          <Image fill src={user.image} alt='profile picture' referrerPolicy='no-referrer' />
        </div>
      ) : (
        <AvatarFallback>
          <span className='sr-only'>{user?.name}</span>
          <Icons.user />
        </AvatarFallback>
      )}
    </Avatar>
  )
}

export default UserAvatar
