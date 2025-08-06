import { NavLink } from "react-router-dom";
import { Heart, TrendingUp, Clock4, Wifi } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { dailyRoutines } from '../../mockData/dailyRoutine'

const DailyRoutine = () => {
    return (
        <div className="flex flex-col gap-6 px-2 md:px-0">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Best For Your Daily Routine</h2>
                <NavLink to='/' className="text-[#3c83f6] hover:underline text-sm">
                    View All APIs
                </NavLink>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    dailyRoutines.map(item => (
                        <ApiCard
                            key={item.title}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            provider={item.provider}
                            updated={item.updated}
                        />
                    ))
                }
            </div>
        </div>
    )
}

function ApiCard({ image, title, description, provider, updated }: {
    image: string;
    title: string;
    description: string;
    provider: string;
    updated: string;
}) {
    return (
        <Card className="group cursor-pointer">
            <CardContent className="p-4">
                <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-3 w-full">
                        <span className="flex h-5 items-center justify-center rounded-sm bg-[#f5f3ff] bg-opacity-10 px-2">Data</span>
                        <Heart width={16} />
                    </div>
                    <div className="flex flex-start gap-2">
                        <img
                            src={image}
                            alt={title}
                            className="w-12 h-12 rounded object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate group-hover:text-[#109ae5] group-hover:underline">
                                {title}
                            </h3>
                            <p className="text-xs text-gray-600 mb-3 line-clamp-2 h-8">
                                {description}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span className="text-[#6b7280]">By {provider}</span>
                                <span>{updated}</span>
                            </div>

                            <div className="flex items-center gap-1.5 mt-3 flex-wrap">
                                <span className="text-[#6b7280] text-xs flex h-6 items-center gap-1.5 rounded border border-[#e5e7eb] px-1.5"><TrendingUp width={16} />9.9</span>
                                <span className="text-[#6b7280] text-xs flex h-6 items-center gap-1.5 rounded border border-[#e5e7eb] px-1.5"><Clock4 width={16} />1251ms</span>
                                <span className="text-[#6b7280] text-xs flex h-6 items-center gap-1.5 rounded border border-[#e5e7eb] px-1.5"><Wifi width={16} />100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default DailyRoutine