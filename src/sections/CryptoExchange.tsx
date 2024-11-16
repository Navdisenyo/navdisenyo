'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import CryptoImage from '@/assets/exchange-image.png';
import pyramidImage from '@/assets/eth.webp';
import tubeImage from '@/assets/binance-coin.webp';
import Image from 'next/image';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, Wallet, Rocket, CreditCard, Zap, Shield, BarChart2, Building, UserCheck, Activity, Bot, Users, Repeat, Users2, Network, TrendingUp, HelpCircle, Newspaper, Smartphone, TrendingDown } from 'lucide-react';

export const CryptoExchange = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

const features = [
  { icon: Coins, title: "Unlimited Markets", description: "Add unlimited market pairs e.g. BTC/USDT, ETH/BTC, XRP/ETH, BTC/EUR, ETH/USD, USDT/USD and more..." },
  { icon: Wallet, title: "ERC20 & BEP20, Polygon Tokens & BTC-hosted node Supported", description: "All ERC20 & BEP20 & Polygon, Token pair available. You can also add your custom token." },
  { icon: Rocket, title: "Launchpad & ICO", description: "Helps blockchain projects raise funds and increase their reach across the crypto ecosystem." },
  { icon: CreditCard, title: "Multi-support coin payment", description: "Supports Bitgo, coinpayment, Bitgo merchant api, and more." },
  { icon: Zap, title: "Powerful API Interface", description: "Provides both Public and Private APIs for integration with trading bots, merchants, and more." },
  { icon: Shield, title: "2FA & ReCaptcha", description: "Extra layer of security to protect accounts and prevent fraud and abuse." },
  { icon: BarChart2, title: "Ultra Fast Trading", description: "Well-optimized matching engine for high-frequency trading operations and management." },
  { icon: Building, title: "Card / Bank Transfers", description: "Supports Bank Transfers and Bank Cards for fiat currency deposits/withdrawals." },
  { icon: UserCheck, title: "KYC Verification", description: "Verifies customer identity to ensure legitimacy and credibility." },
  { icon: Activity, title: "Reports / Health Monitor", description: "Monitors database, workers, payment gateways, email providers, and more." },
  { icon: Bot, title: "Bot Trading", description: "Advanced mechanism for automatic asset trading and market making." },
  { icon: Users, title: "Referral Program", description: "Three-level referral system for traders to earn rewards." },
  { icon: Repeat, title: "Swap Coin Feature", description: "Provides coin swap option." },
  { icon: Users2, title: "P2P option", description: "Buy/sell coins through P2P with multi-currency and multi-payment options." },
  { icon: Network, title: "EVM Network Supported", description: "Supports all EVM-based networks with native and token support." },
  { icon: TrendingUp, title: "Demo Trading", description: "Practice account for users to learn trading without real money." },
  { icon: HelpCircle, title: "Knowledge Base Support System", description: "Support ticket system and knowledge base for user learning." },
  { icon: Newspaper, title: "Blog News", description: "Platform for posting daily news & updates." },
  { icon: Smartphone, title: "Mobile APP", description: "Mobile app available for the exchange." },
  { icon: TrendingDown, title: "Futures Trading", description: "Futures contract trading available for users." },
]

  return (
    <section ref={sectionRef} className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">
        <div className='mx-auto'>
          <div className='flex justify-center'>
            <div className='tag'>Crypto exchange development services</div>
          </div>
          <h2 className='text-center text-3xl md:text-5xl md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#04418b] text-transparent bg-clip-text mt-5'>Start your own cryptocurrency exchange business in 1 week!</h2>
          <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5'>Get the most efficient and streamlined white label crypto exchange development services by partnering with our top-class cryptocurrency exchange 
            development company, Navdisenyo Creations. We have served so many fields with our exclusive tailor-made solutions and strive to continue on the same path. Our white-label exchange platform hosts a number of digital tokens and comes with 
            coherent trading functionalities, with no hidden cost or master wallet integrated in our white label crypto exchange.</p>
        </div>
        <div className='relative'>
          <Image src={CryptoImage} alt='product' className='mt-10' />
          <motion.img 
          src={pyramidImage.src} 
          alt='pyramid' 
          height={262} width={260} 
          className='hidden md:block absolute -right-36 -top-32' 
          style={{
            translateY,
          }}
          />
          <motion.img 
          src={tubeImage.src} 
          alt='tube' 
          height={248} width={248} 
          className='hidden md:block absolute bottom-24 -left-36' 
          style={{
            translateY,
          }}
          />
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
      <main>
        <div className="max-w mx-auto py-6 sm:px-6 lg:px-8">
          <div className="sm:px-0">
            <div className="rounded-lg shadow-xl p-6">
              <Badge className="mb-4" variant="secondary">Top Crypto Exchange Features</Badge>
              <h2 className="text-2xl font-bold text-black mb-6">Why our customers choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-gray-100 text-cyan-900">
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <feature.icon className="h-6 w-6" />
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </section>
  );
};
