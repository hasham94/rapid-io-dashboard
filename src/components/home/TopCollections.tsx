import { NavLink } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { collectionCards } from '../../mockData/collectionCards'

const TopCollections = () => {
    return (
        <div className="flex flex-col gap-6 px-2 md:px-0">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Top Collections</h2>
                <NavLink to='/' className="text-[#3c83f6] hover:underline text-sm">
                    View All Collections
                </NavLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    collectionCards.map(item => (
                        <CollectionCard
                            key={item.title}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}

function CollectionCard({ image, title, description }: {
    image: string;
    title: string;
    description: string;
}) {
    return (
        <Card className="cursor-pointer shadow">
            <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 text-sm leading-tight truncate">
                    {title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mt-1">
                    {description}
                </p>
                <div className="flex items-center gap-2 mt-4 just">
                    <img
                        src={image}
                        alt={title}
                        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                    <button className="text-[#3c83f6] hover:underline text-xs">
                        Browse Collection
                    </button>
                </div>
            </CardContent>
        </Card>
    );
}

export default TopCollections