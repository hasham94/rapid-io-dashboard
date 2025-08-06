const HomeHeroSlider = () => {
    return (
        <>
            <div className="mb-8">
                <div className="bg-[#fafafa] rounded-lg p-6 border-gray-200 md:h-[300px] flex items-center justify-between flex-col md:flex-row">
                    <div className="w-full flex flex-col gap-6 p-6">
                        <h1 className="mb-0 text-lg font-normal">
                            Nokia acquires Rapid technology and team! 🚀
                        </h1>
                        <p className="mb-2 text-sm">
                            Nokia today announced that it has acquired Rapid's technology assets,
                            including the world's largest API marketplace, and its highly skilled team.
                        </p>
                    </div>
                    <div className="w-full">
                        <img
                            src="https://rapidapi.com/hub/images/Rapid_Logo_Primary.png"
                            alt="logo here"
                            className="h-full w-full object-contain text-neutral-800 dark:text-white"
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default HomeHeroSlider