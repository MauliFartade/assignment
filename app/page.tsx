
import Image from 'next/image';

import Signup from './singup/page';
import News from './news/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1> Home page</h1> */}
      <Signup/>
      
    </main>
  )
}
