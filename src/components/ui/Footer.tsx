import { FC } from 'react'
import { Balancer } from 'react-wrap-balancer'

const Footer: FC = () => {
  return (
    <footer className='bg-indigo-500 dark:bg-slate-800 text-white text-center py-2 z-10 max-h-fit'>
      <div className='container mx-auto'>
        <p className='text-xs md:text-base text-slate-800 dark:text-slate-100'>
          <Balancer>
            Nos interesa saber de ti. Para consultas, reclamos, sugerencias, o cualquier otro tema,
            escríbenos a{' '}
            <a href='mailto:easydoctorcl@gmail.com' className='underline'>
              easydoctorcl@gmail.com
            </a>
          </Balancer>
        </p>
      </div>
    </footer>
  )
}

export default Footer
