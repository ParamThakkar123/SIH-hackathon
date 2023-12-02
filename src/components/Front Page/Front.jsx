import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useAuth0 } from '@auth0/auth0-react'
import userEvent from '@testing-library/user-event'

const products = [
  { name: 'Mental health analysis using realtime audio', description: 'This model gives a complete analysis of your mental health by recording your voice in real time', href: '/voice', icon: ChartPieIcon },
  { name: 'Mental health analysis using current pictures videos', description: 'This model gives a complete analysis of your mental health by analyzing your look in photos and videos', href: '/emotions', icon: CursorArrowRaysIcon },
  { name: 'Mental health analysis using user content on social media', description: 'You show what you feel on the social media. This model analyses your feeling based on the content you post on social media', href: '/UserContent', icon: FingerPrintIcon },
  { name: 'Questionnaire', description: 'Answer few questions and check get a complete diagnosis for your mental health', href: '/ques', icon: SquaresPlusIcon },
  { name: 'Mental health predictions on the basis of past medical records', description: 'upload your past medical records here and get a complete analysis of your current mental health', href: '/medical', icon: ArrowPathIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      <header className="bg-gray-200 navbar text-indigo-950">
        <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <Popover.Group className="hidden lg:flex">
          <div className='text-center text-xl pl-8 pr-8 pt-3 pb-3 mx-4 font-semibold leading-6 inline-block rounded-lg hover:bg-indigo-500 hover:text-white ease-in-out duration-300'>
              <a href="/home" className="">
                Home
              </a>
          </div>
            <Popover className="relative">
              <Popover.Button className="flex text-center text-xl pl-4 pr-4 pt-3 pb-3 mx-4 font-semibold leading-6 rounded-lg hover:bg-indigo-500 hover:text-white ease-in-out duration-300">
                Product
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1">
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                      {products.map((item) => (
                      <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50" >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      ))}
                  </div>  
                </Popover.Panel>
              </Transition>
            </Popover>
            <div className='lg:flex lg:flex-1 lg:justify-end'>
              <div className='text-center text-xl pl-8 pr-8 pt-3 pb-3 mx-4 font-semibold leading-6 inline-block rounded-lg hover:bg-indigo-500 hover:text-white ease-in-out duration-300'>
              <a href="#" className="">
                Features
              </a>
              </div>
              <div className='text-center text-xl pl-8 pr-8 pt-3 pb-3 mx-4 font-semibold leading-6 inline-block rounded-lg hover:bg-indigo-500 hover:text-white ease-in-out duration-300'>
              <a href="/resources" className="">
                Resources
              </a>
              </div>
              
              <div className='text-center text-xl pl-8 pr-8 pt-3 pb-3 mx-4 font-semibold leading-6 inline-block rounded-lg hover:bg-indigo-500 hover:text-white ease-in-out duration-300'>
              <a href="#" className="">
                About
              </a>
              </div>  
          </div>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className='text-center text-xl pl-8 pr-8 pt-3 pb-3 mx-4 font-semibold leading-6 inline-block rounded-lg hover:bg-indigo-500 hover:text-white ease-in-out duration-300'>
                        <button>Log In</button>
                    </div>
          </div>
        </nav>
    </header>
    </div>
  )
}