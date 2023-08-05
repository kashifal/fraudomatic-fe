import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

const pages = [
  { name: 'Create New Advertiser', href: '#', current: true },
  
]

export default function Breadcrumb() {
  return (
    <nav className="flex my-8" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center ">
        <li>
           
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-primaryPurple hover:text-primaryPurple"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
