import { Inter } from 'next/font/google'
import { AssetCard } from '@/components/Card/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <AssetCard 
    name='Motor-boladão' 
    status='inAlert' 
    img="https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg"
    sensors='sla'
    model='sla'/>
  )
}
