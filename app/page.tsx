import { Button } from "@/components/ui/button";

import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Store your PDF Documents",
    description: "Keep all you important PDF files backed up on Cloud",
    icon: GlobeIcon,
  },
  {
    name: "Store your PDF Documents",
    description: "Keep all you important PDF files backed up on Cloud",
    icon: ZapIcon,
  },
  {
    name: "Store your PDF Documents",
    description: "Keep all you important PDF files backed up on Cloud",
    icon: BrainCogIcon,
  },
  {
    name: "Store your PDF Documents",
    description: "Keep all you important PDF files backed up on Cloud",
    icon: EyeIcon,
  },
  {
    name: "Store your PDF Documents",
    description: "Keep all you important PDF files backed up on Cloud",
    icon: ServerCogIcon,
  },
  {
    name: "Store your PDF Documents",
    description: "Keep all you important PDF files backed up on Cloud",
    icon: MonitorSmartphoneIcon,
  },
]

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-2 bg-gradient-to-bl from-white to-black">
          <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
            <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-7 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-base font-semibold leading-7 text-gray-500">
                  Your Intelligence Doctor    
                </h2>

                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Transform your Medical History into a Doctor
                </p>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Introducing{" "}
                  <span className="font-bold text-red-600">PhysicianOS.</span>
                  <br />
                  <br /> Upload your medical history, and our OS will answer questions, 
                  summarize content, and answer all your Qs without the need to go to the hospital. 
                  Ideal for everyone, pOS
                  <span className="font-bold"> turns you into specialist</span>,
                  enhancing digonosis 10x fold effortlessly.   
                  <br />
                  <span className="text-xs leading-7 text-gray-400">* WARNING – This is an Investigational system.</span>               
                </p>
              </div>

              <Button asChild className="mt-10 ">
                <Link href='/dashboard'>Two Free Access</Link>
              </Button>
            </div>

            <div className="relative overflow-hidden pt-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Image
                  alt="App screenshot"
                  src="https://i.imgur.com/VciRSTI.jpeg"
                  width={2432}
                  height={1442}
                  className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                />
                <div aria-hidden="true" className="relative">
                  <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]"/>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
              <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:max-0 lg:max-w-none lg:grid-col-3 lg:gap-x-8 lg:gap-y-16">
                {features.map(feature => (
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon 
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-gray-600"
                      />
                    </dt>

                    <dd>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
    </main>
  );
}