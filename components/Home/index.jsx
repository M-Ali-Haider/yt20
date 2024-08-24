import Filterbar from '../FilterBar'
import GoToTop from '../GoToTop'
import Top from '../TopSkeleton'
const Home = () => {
    return (
        <>
            <main
                style={{ transition: 'background-color 0.5s cubic-bezier(0.76,0,0.24,1)' }}
                className="min-h-screen mt-[76px] w-full flex flex-col items-center dark:bg-[#0a0a0a] bg-[#edeef0] text-[#0a0a0a] dark:text-white"
            >
                <div className="max-w-[1552px] px-[10px] md:px-[40px] w-full pb-[300px] mt-[40px]">
                    <Filterbar />
                    <Top />
                </div>
            </main>
            <GoToTop />
        </>
    )
}

export default Home
