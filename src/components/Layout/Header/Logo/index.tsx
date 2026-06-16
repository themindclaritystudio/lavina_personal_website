'use client'

import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={getImgPath('/images/logo/logo.png')}
<<<<<<< HEAD
        alt="Lavina Pratap Bhambhani"
=======
        alt="Lavina Pratap Bhambhani Pratap Bhambhani"
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
        width={260}
        height={130}
        priority
        quality={100}
        className="h-auto w-auto max-h-24 object-contain dark:hidden"
      />

      <Image
        src={getImgPath('/images/logo/logo.png')}
<<<<<<< HEAD
        alt="Lavina Pratap Bhambhani"
=======
        alt="Lavina Pratap Bhambhani Pratap Bhambhani"
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
        width={260}
        height={130}
        priority
        quality={100}
        className="hidden h-auto w-auto max-h-24 object-contain dark:block"
      />
    </Link>
  )
}

export default Logo