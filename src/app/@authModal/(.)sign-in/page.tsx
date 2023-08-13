import { FC } from "react"

import CloseModal from "@/components/CloseModal"
import SignIn from "@/components/SignIn"

const page: FC = () => {
  return (
    <div className='fixed inset-0 bg-white/20 dark:bg-slate-900/20 z-10'>
      <div className='container flex items-center h-full max-w-lg mx-auto'>
        <div className='relative border-4 border-slate-700 dark:bg-slate-900 bg-slate-100 w-full h-1/4 py-20 px-2 rounded-lg'>
          <div className='absolute top-4 right-4'>
            <CloseModal />
          </div>
          <div className='flex items-center justify-center h-full'>
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
