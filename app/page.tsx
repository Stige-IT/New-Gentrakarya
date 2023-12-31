import Image from 'next/image'
import Navbar from './components/navbar'
import WelcomeSection from './sections/welcome_section'

export default function Home() {
  return (
    <div className='h-screen w-full'>
      <Navbar></Navbar>
      <WelcomeSection></WelcomeSection>
    </div>
  )
}
