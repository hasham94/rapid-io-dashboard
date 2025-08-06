import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Star, Earth, Folder, Menu } from "lucide-react";

export function Sidebar() {
    const categories = [
        "Cybersecurity",
        "Cryptography",
        "Movies",
        "Jobs",
        "Energy",
        "Monitoring",
        "Other",
        "Communication"
    ];

    return (
        <div className="w-72 bg-[#fafafa] border-r border-[#e5e7eb] h-screen overflow-y-auto">
            <div className="px-4 pt-6">
                <div className="flex gap-0.5 flex-col">
                    <div className="flex items-center gap-1.5 text-gray-700 py-1.5 rounded bg-white px-2">
                        <Earth width={16} />
                        <span className="text-sm">Discovery</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-500 py-1.5 px-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <Star color="#bcbdc0" width={16} />
                        <span className="inline-flex items-center text-sm justify-start text-gray-900 opacity-30 dark:text-gray-200">Workspace</span>

                        <Button
                            variant="default"
                            className="w-fit h-fit text-xs ml-auto px-3 py-1 rounded"
                        >
                            Sign Up
                        </Button>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-700 py-1.5 px-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <Folder width={16} />
                        <span className="text-sm">Collections</span>
                    </div>
                </div>

                <Separator />

                <div className="flex gap-0.5 flex-col pt-1">
                    <h3 className="font-semibold text-xs text-gray-900 pb-2 px-[5px]">Categories</h3>
                    <div className="flex flex-col gap-0.5">
                        {categories.map((category) => (
                            <NavLink
                                key={category}
                                to='/'
                                className="block w-full text-left text-xs text-gray-600 hover:bg-[#e1f3fe] py-2 h-9 rounded transition-colors"
                            >
                                <span className="inline-block h-4 items-center justify-start gap-1.5 px-3">
                                    {category}</span>
                            </NavLink>
                        ))}
                    </div>

                    <button className="flex items-center space-x-2 text-sm text-gray-600 hover:bg-[#e1f3fe] p-2 mt-2 w-full">
                        <Menu width={16} />
                        <span>View All Categories</span>
                    </button>
                </div>

                <Separator />
                <div className="flex items-center justify-between hover:bg-[#e1f3fe] py-2 px-2 cursor-pointer">
                    <span className="text-sm text-gray-600">Switch to Dark View</span>
                    <div className="w-10 h-5 bg-gray-300 rounded-full relative cursor-pointer">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                    </div>
                </div>
                <Separator />
            </div>
        </div>
    );
}