import Filterbar from '../FilterBar'
import Footer from '../Footer'
import GoToTop from '../GoToTop'
import Sidebar from '../Sidebar'
import Top from '../TopSkeleton'
const Home = () => {
    return (
        <>
            <Sidebar isHomepage={true} />
            <main
                style={{ transition: 'background-color 0.5s cubic-bezier(0.76,0,0.24,1)' }}
                className="mt-[76px] filterBarDim:mt-0 min-h-screen w-full flex flex-col items-center dark:bg-[#0a0a0a] bg-[#edeef0] text-[#0a0a0a] dark:text-white"
            >
                <Filterbar />
                <div className="max-w-[1552px] px-[10px] md:px-[40px] w-full">
                    <Top />
                </div>
                <Footer />
            </main>
            <GoToTop />
        </>
    )
}

export default Home
