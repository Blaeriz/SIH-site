import Image from 'next/image'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaMeta} from 'react-icons/fa6'
import {FaXTwitter} from 'react-icons/fa6'
import { AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link'

export default function Home() {
  return (
    <body>
    <header>
      <nav className="navbar">
        <div className="nav-logo">
          <a href="#"><Image src="/logo.jpg" width={500}
        height={500}></Image></a>
        </div>
        <div className="f">
          <a href="#" className="faq">FAQ</a>
        </div>

        <div className="nav-search">
          <select className="select-search text-black">
            <option className='text-black'>All</option>
            <option>All Categories</option>
            <option>Right 01</option>
            <option>Right 02</option>
          </select>
          <input type="text" placeholder="Search " className="search-input"/>
          <div className="search-icon">
            <span className="material-symbols-outlined"><AiOutlineSearch></AiOutlineSearch></span>
          </div>
        </div>

        <div className="sign-in">
         <a href="#"> <p> Register</p>
          <span>  Log in</span></a>
        </div>

        <div className="talk">
          <a href="#"><p>Talk</p>
            <span> with us</span></a>
        </div>

        <div className="no">
            <p>Helpline No : <br/>
              1234567891
            </p>
        </div>
      </nav>
      
      <div className="banner">
        <div className="banner-content">
          <div className="panel">
            <span className="material-symbols-outlined"><AiOutlineMenu></AiOutlineMenu></span>
            <a href="#">All</a>
          </div>
  
          <ul className="links">
            <li><a href="#">English</a></li>
            <li><a href="#">Hindi</a></li>
            <li><a href="#">Marathi</a></li>
          </ul>
          <div className="vision">
            <a href="#">Our Vision</a>
          </div>
        </div>
      </div>
    </header>

    <section className=""><Image src="/background.jpg" height={350} width={1920} className='bg-center bg-cover '></Image></section>

    <section className="blursection flex flex-row justify-between bg-black" >
      <div className="blurimages"/>
        <div className="blurlink p-3 flex flex-col whitespace-nowrap hover:cursor-pointer hover:text-blue-700" id="1">
          <Link href="/chapter-1" className=' text-white hover:text-blue-700'> CURRENT MODULE</Link>
          <Image src="/pink.jpg" alt="card" width={370}
        height={280}/>
          <a href="#" className=' text-white hover:text-blue-700'>GO!</a>
        </div>
        <div className="blurlink p-3 flex flex-col whitespace-nowrap hover:cursor-pointer hover:text-blue-700" id="2">
          <h3 className=' text-white hover:text-blue-700'>NEXT CHAPTER</h3>
          <Image src="/cyan.jpg" alt="card" width={370}
        height={280}/>
          <a href="#" className=' text-white hover:text-blue-700'>GO!</a>
        </div>
        <div className="blurlink p-3 flex flex-col whitespace-nowrap hover:cursor-pointer hover:text-blue-700" id="3">
          <h3 className=' text-white hover:text-blue-700'>box 3</h3>
          <Image src="/red.jpg" alt="card" width={370}
        height={280}/>
          <a href="#" className=' text-white hover:text-blue-700'>GO!</a>
        </div>
    </section>

    <section className="boxsection">
      <div className="boximages">
        <div className="boxlink">
          <h3> box 1</h3>
          {/* <Image src="#" alt="card" width={500}
        height={500}/> */}
          <a href="#">GO!</a>
        </div>
        <div className="boxlink">
          <h3>box 2</h3>
          {/* <Image src="#" alt="card" width={500}
        height={500}/> */}
          <a href="#">GO!</a>
        </div>
        <div className="boxlink">
          <h3>box 3</h3>
          {/* <Image src="#" alt="card" width={500}
        height={500}/> */}
          <a href="#">GO!</a>
        </div>
        <div className="boxlink">
          <h3>box 4</h3>
          {/* <Image src="#" alt="card" width={500}
        height={500}/> */}
          <a href="#">GO!</a>
        </div>
      </div>
    </section>

    <footer>
      <Link href="/" className="footer-title">
        Back to top
      </Link>
      <div className="footer-items">
        <ul>
          <h3>Get to Know Us</h3>
          <li><a href="#" className='flex flex-row justify-evenly py-2'>About us</a></li>
          <li><a href="#" className='flex flex-row justify-evenly py-2'>Resources</a></li>
          <li><a href="#" className='flex flex-row justify-evenly py-2'>Press Release</a></li>
        </ul>
        <ul>
          <h3>Connect with Us</h3>
          <li><a href="#" className='flex flex-row justify-evenly py-2'>Facebook<FaMeta></FaMeta></a></li>
          <li><a href="#" className='flex flex-row justify-evenly py-2'>Twitter<FaXTwitter></FaXTwitter></a></li>
          <li><a href="#" className='flex flex-row justify-evenly py-2'>Instagram<AiOutlineInstagram></AiOutlineInstagram></a></li>
        </ul>
        <ul>
          <h3>Let Us Help You</h3>
          <li><a href="#" className='flex flex-row justify-evenly py-1'>Your Account </a></li>
          <li><a href="#" className='flex flex-row justify-evenly py-1'>COVID-19</a></li>
          <li><a href="#" className='flex flex-row justify-evenly py-1'>Mental Support</a></li>
          <li><a href="#" className='flex flex-row justify-evenly py-1'>Help</a></li>
        </ul>
      </div>
    </footer>

</body>
  )
}
