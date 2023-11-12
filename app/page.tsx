import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main>
        <Link href='/admin'>
          admin page
        </Link >
      </main>
    </div >
  )
}
