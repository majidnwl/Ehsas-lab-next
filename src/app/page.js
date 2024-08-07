import {Header, Hero, RecentCom, Team, TopNavbar} from '../../components/index'
import ProTeachers from '../../components/ProTeachers'
export default function Home() {
  return (

    <>
      <Header />
      {/* Hero Section */}
      <Hero />

      {/* Introdection */}
      <div className='border-separate border-black border-y-[10px] text-white bg-[#05184e]'>

      <h1 className='font-bold  uppercase text-2xl text-center my-6'>Introduction</h1>
      <div className="flex border-collapse flex-col md:flex-row  gap-x-10 md:my-10 my-2 md:max-w-[85%] w-[90%] mx-auto  overflow-hidden">
        <div className="relative w-full md:w-1/2 h-80 mb-4 md:mb-0">
          <video controls
            className="w-full h-full border-[10px]"
            poster="/t.jpg"
            title="YouTube video player"
            frameBorder=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
            <source src="https://0.s3.envato.com/h264-video-previews/ec34ad1d-cba5-43a6-a1d0-a537b10e5879/759078.mp4"
            />
          </video>
        </div>
        <div className=" flex-1 md:mt-0  ">
          <p className="text-sm  uppercase font-semibold mb-2">Create Your Own Online Course</p>
          <h2 className="text-xl  font-bold mb-2">Course Introduction</h2>
          <p className=" mb-5">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised believable. Suffered alteration in some form, by injected humour, or randomised..
          </p>
          <div className="flex items-center mb-1">
            <img
              className="w-20 h-20 rounded-full mr-3"
              src="/Sha.png"
              alt="Author"
            />
            <div className="text-sm">
              <p className=" leading-none pb-1">Hassam</p>
              <p className="">2 Months</p>
            </div>
          </div>
          <button className="md:w-[30%]  md:mx-[30%] bg-[#0833aad0] text-white py-2 px-4 mt-2  hover:bg-[#3d9b05] duration-1000">
            Start Here
          </button>
        </div>
      </div>
      </div>
      {/* Recent Courses */}
      <RecentCom title='Courses' />
      {/* Our Services */}
      <Team title="Our Services" de={true} />
      {/* Recent Post */}
      <RecentCom title='Post' />
      {/* Our Pro Teacher */}
      <ProTeachers title="Our Pro Teacher" de={false} />
      <TopNavbar />
    </>


  )
}
