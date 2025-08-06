import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-1 pt-8 pb-6 px-4 ms:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl m-auto">
                <div>
                    <img
                        src="https://rapidapi.com/hub/_next/image?url=https%3A%2F%2Frapidapi-prod-fe-static.s3.amazonaws.com%2Ftheming%2FRapid_Logo_Primary.png&w=256&q=10"
                        alt="logo"
                        className="h-14 w-auto"
                    />
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
                    <div className="space-y-2 text-sm">
                        <button className="block text-gray-600 hover:text-[#204090]">Public Hub</button>
                        <button className="block text-gray-600 hover:text-[#204090]">Enterprise Hub</button>
                        <button className="block text-gray-600 hover:text-[#204090]">Consuming APIs</button>
                        <button className="block text-gray-600 hover:text-[#204090]">Building APIs</button>
                        <button className="block text-gray-600 hover:text-[#204090]">Testing APIs</button>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
                    <div className="space-y-2 text-sm">
                        <button className="block text-gray-600 hover:text-[#204090]">Learn</button>
                        <button className="block text-gray-600 hover:text-[#204090]">Blog</button>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Connect</h3>
                    <div className="space-y-2 text-sm">
                        <button className="block text-gray-600 hover:text-[#204090]">About Us</button>
                        <button className="block text-gray-600 hover:text-[#204090]">Customer Support</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-2 mt-6 pt-6 border-t border-gray-200 max-w-5xl m-auto">
                <div className="space-y-2 text-sm text-gray-600 flex items-center gap-1 sm:gap-6 flex-col sm:flex-row">
                    <NavLink to='/' className="hover:underline">Terms of Service</NavLink>
                    <NavLink to='/' className="hover:underline">Privacy</NavLink>
                    <span>© 2025 RapidAPI. All Rights Reserved.</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-6 text-gray-600 text-sm flex-col sm:flex-row">
                    <NavLink to='/' className="hover:underline">LinkedIn</NavLink>
                    <NavLink to='/' className="hover:underline">YouTube</NavLink>
                    <NavLink to='/' className="hover:underline">X.com</NavLink>
                </div>
            </div>
        </footer>
    )
}