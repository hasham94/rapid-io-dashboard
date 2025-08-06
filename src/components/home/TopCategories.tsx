import { NavLink } from "react-router-dom";
import { Card, CardContent } from "../ui/card";

const TopCategories = () => {
    const categories = [
        {
            title: 'Cybersecurity',
            description: 'Cybersecurity APIs offer tools for developers to bolster the security of their applications and systems, including threat detection, authentication, encryption, and access control.',
            link: 'https://rapidapi.com/hub/_next/image?url=https%3A%2F%2Frapidapi-prod-collections.s3.amazonaws.com%2Fcategory%2FCyber%2520Security.svg.xml&w=640&q=75'
        },
        {
            title: 'Cryptography',
            description: 'Cryptography APIs offer developers tools for implementing encryption, decryption, hashing, digital signatures, and secure communication protocols.',
            link: 'https://rapidapi.com/hub/_next/image?url=https%3A%2F%2Frapidapi-prod-collections.s3.amazonaws.com%2Fcategory%2FCryptography.svg.xml&w=1920&q=75'
        },
        {
            title: 'Movies',
            description: 'Cybersecurity APIs offer tools for developers to bolster the security of their applications and systems, including threat detection, authentication, encryption, and access control.',
            link: 'https://rapidapi.com/hub/_next/image?url=https%3A%2F%2Frapidapi-prod-collections.s3.amazonaws.com%2Fcategory%2FMovies.svg.xml&w=1920&q=75'
        },
        {
            title: 'Jobs',
            description: 'Cybersecurity APIs offer tools for developers to bolster the security of their applications and systems, including threat detection, authentication, encryption, and access control.',
            link: 'https://rapidapi.com/hub/_next/image?url=https%3A%2F%2Frapidapi-prod-collections.s3.amazonaws.com%2Fcategory%2FJobs.svg.xml&w=1920&q=75'
        }
    ]
    return (
        <>
            <div className="flex flex-col gap-6 px-2 md:px-0">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Top Categories</h2>
                    <NavLink to='/' className="text-[#3c83f6] hover:underline text-sm">
                        View All Categories
                    </NavLink>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        categories.map(item => (
                            <Card key={item.title}>
                                <CardContent className="p-3 flex flex-col gap-3">
                                    <img
                                        src={item.link}
                                        alt="Cybersecurity"
                                        className="w-8 h-8"
                                    />
                                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                    <NavLink to='/' className="text-[#3c83f6] hover:underline text-sm pt-0.5">
                                        Browse Category
                                    </NavLink>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default TopCategories