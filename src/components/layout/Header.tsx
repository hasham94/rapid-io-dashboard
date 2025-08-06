import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, CircleQuestionMark } from "lucide-react";
import { NavLink } from "react-router-dom";


export function Header() {
    return (
        <header className="bg-white border-b border-gray-200 px-6 py-1.5">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src="https://rapidapi.com/hub/_next/image?url=https%3A%2F%2Frapidapi-prod-fe-static.s3.amazonaws.com%2Ftheming%2FRapid_Logo_Primary.png&w=256&q=10"
                        alt="logo"
                        className="h-10 w-auto pr-3.5"
                    />
                </div>

                <div className="flex-1 max-w-64 mx-8">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#111827] h-4 w-4" />
                        <Input
                            placeholder="Search APIs"
                            className="pl-8 pr-10 py-2 w-full border-gray-300 focus:border-[#204090] focus:ring-[#204090] placeholder:text-[#111827]"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1 py-0.5 rounded">
                            ⌘K
                        </span>
                    </div>
                </div>

                <div className="flex gap-1.5 items-center">
                    <button className="hover:bg-[#f3f4f6] h-8 w-8 flex items-center justify-center rounded cursor-pointer">
                        <CircleQuestionMark width={16} />
                    </button>
                    <NavLink to='/' className="rounded p-2 font-medium text-sm text-[#111827] hover:bg-[#f3f4f6] hover:no-underline">
                        Add Your API
                    </NavLink>
                    <Button
                        variant="default"
                    >
                        Sign In
                    </Button>
                    <Button
                        variant="secondary"
                        className="bg-[#e8eaed] text-[#111827] hover:bg-white px-4 py-2 rounded-md"
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </header>
    );
}