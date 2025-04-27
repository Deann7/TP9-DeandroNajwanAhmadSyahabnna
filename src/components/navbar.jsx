import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, UserIcon, InformationCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
    const navigation = [
      {
        name: 'Profile',
        icon: <UserIcon className="h-5 w-5 mr-2" />,
        sectionId: 'profile-section'
      },
      {
        name: 'About Me',
        icon: <InformationCircleIcon className="h-5 w-5 mr-2" />,
        sectionId: 'about-section'
      },
      {
        name: 'Contact',
        icon: <EnvelopeIcon className="h-5 w-5 mr-2" />,
        sectionId: 'contact-section'
      },
    ]
    
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
    
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };
  
  return (
    <div className='fixed top-6 left-0 right-0 z-[9999] flex justify-center items-center'>
      <div className="w-[90%] bg-white shadow-lg rounded-lg px-4 py-2">
        <Disclosure as="nav" className="">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-800">Deandro Najwan Ahmad Syahbanna</span>
            </div>
            <div className="hidden sm:flex flex-1 justify-end">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <button
                        key={item.name}
                        onClick={() => scrollToSection(item.sectionId)}
                        className={classNames(
                          'text-gray-700 hover:text-blue-600', 
                          'px-3 py-2 text-sm font-medium flex items-center',
                          'transition-colors duration-200'
                        )}
                      >
                    {item.icon}
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            
            

            <div className="sm:hidden">
              <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>
          
      
          <DisclosurePanel className="sm:hidden bg-white">
            <div className="flex flex-col space-y-2 px-2 py-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="button"
                  onClick={item.action}
                  className={classNames(
                    'text-gray-700 hover:bg-gray-100',
                    'block w-full text-left px-3 py-2 text-base font-medium flex items-center',
                    'rounded-md transition-colors duration-200'
                  )}
                >
                  {item.icon}
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  )
}