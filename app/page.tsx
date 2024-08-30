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
    name: "Diagnose Medical Reports",
    description: "Analyze and interpret your medical documents with advanced AI-powered diagnostics.",
    icon: GlobeIcon,
  },
  {
    name: "Comprehensive PDF Analysis",
    description: "Upload your medical PDFs and get detailed health insights backed by cloud storage.",
    icon: ZapIcon,
  },
  {
    name: "AI-Powered Health Insights",
    description: "Leverage cutting-edge AI to get a second opinion on your medical reports.",
    icon: BrainCogIcon,
  },
  {
    name: "Visualize Your Health Data",
    description: "Turn your medical documents into detailed insights for easier understanding.",
    icon: EyeIcon,
  },
  {
    name: "Secure Data Storage",
    description: "Safely store your medical records on the cloud with top-notch security features.",
    icon: ServerCogIcon,
  },
  {
    name: "Access from Any Device",
    description: "Review and diagnose your medical reports from anywhere, on any device.",
    icon: MonitorSmartphoneIcon,
  },
];

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
              <br /> Upload your medical history, and our OS will provide answers, summarize details, 
              and address all your questions—no hospital visit required. Perfect for anyone, PhysicianOS
              <span className="font-bold"> turns you into a specialist</span>,
              enhancing diagnosis accuracy by 10x  effortlessly.
              <br />
              <span className="text-xs leading-7 text-gray-400">* WARNING – This is an Investigational system.</span>               
            </p>
          </div>

          <Button asChild className="mt-10">
            <Link href='/dashboard'>Get Access</Link>
          </Button>
          <p className="mt-2 text-xs leading-7 text-gray-400 text-center">
            * Only on Desktop
          </p>
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="App screenshot"
              src="https://i.imgur.com/QzFRvMP.png"
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
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon 
                    aria-hidden="true"
                    className="absolute left-1 top-1 h-5 w-5 text-red-600"
                  />
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-7 lg:px-8">

        <div className="mx-auto max-w-2xl sm:text-center">
          <div className="mt-20 text-lg leading-8 text-gray-900">
            <div className="text-xs leading-10 text-gray-600 underline hover:no-underline text-center sm:text-center">
              <a href="https://twitter.com/aaronsiim" target="_blank" rel="noopener noreferrer">Contact</a>
            </div>
            <span className="text-xs leading-7 text-gray-600">© {new Date().getFullYear()} PhysicianOS. All rights reserved.</span>
          </div>
        </div>
</div>

            
              
        </div>
      </div>
    </main>
  );
}
