import HomeHeroSlider from '../components/home/HeroSlider'
import Statistics from '../components/home/Statistics'
import TopCategories from '../components/home/TopCategories'
import DailyRoutine from "../components/home/DailyRoutine"
import TopCollections from '../components/home/TopCollections'

const HomePage = () => {
    return (
        <div className="py-6 mx-auto flex max-w-5xl flex-col gap-8">
            <HomeHeroSlider />
            <Statistics />
            <TopCategories />
            <DailyRoutine />
            <TopCollections />
        </div>
    );
}

export default HomePage