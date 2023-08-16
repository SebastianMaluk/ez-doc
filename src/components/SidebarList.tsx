import { Route } from "next"
import Link from "next/link"

type Routes = {
  href: Route
  label: string
}

export default function SidebarList() {
  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
  ] as Routes[]

  return (
    <div className='flex-1 overflow-auto'>
      <div className='space-y-2 px-2'>
        {links.map(
          (link) =>
            link && (
              <Link href={link.href} key={link.href}>
                <p className='block px-4 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900'>
                  {link.label}
                </p>
              </Link>
            )
        )}
      </div>
    </div>
  )
}
