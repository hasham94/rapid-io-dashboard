const Statistics = () => {

    const stats = [
        {
            heading: '7M+',
            subHeading: 'Developers'
        },
        {
            heading: '73K+',
            subHeading: 'APIs in the Hub'
        },
        {
            heading: '8B+',
            subHeading: 'API calls per month'
        },
        {
            heading: '232K+',
            subHeading: 'Total users per month'
        }
    ]

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {
                stats.map(item => (
                    <div className="flex h-[127px] flex-col items-center justify-center gap-3 rounded-lg p-4" key={item.heading}>
                        <div className="font-bold text-[#0059ff] text-4xl leading-10">{item.heading}</div>
                        <div className="text-sm text-[#505358]">{item.subHeading}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Statistics