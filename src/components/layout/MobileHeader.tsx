import { useState } from "react"
import { Menu, Search, X } from "lucide-react"

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            <header className="bg-white border-b border-gray-200 px-4 py-2.5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src="https://rapidapi.com/hub/_next/image?url=https%3A%2F%2Frapidapi-prod-fe-static.s3.amazonaws.com%2Ftheming%2FRapid_Logo_Primary.png&w=256&q=10"
                            alt="logo"
                            className="h-10 w-auto pr-3.5"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="hover:bg-[#f3f4f6] h-8 w-8 flex items-center justify-center rounded cursor-pointer"><Search width={16} /></button>
                        <button
                            className="hover:bg-[#f3f4f6] h-8 w-8 flex items-center justify-center rounded cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}>
                            {
                                isOpen ? <X width={16} /> : <Menu width={16} />
                            }
                        </button>
                    </div>
                </div>

                {
                    isOpen &&
                    <div className="bg-white h-[calc(100vh-61px)] absolute top-[61px] left-0 w-full px-6 py-8 overflow-hidden">
                        <span className="font-semibold text-header-primary">Learn More</span>
                    </div>
                }
            </header>

            <div>
            </div>
        </>
    )
}

export default MobileHeader