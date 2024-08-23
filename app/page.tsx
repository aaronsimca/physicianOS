import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";

const feature = [
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
            </div>
          </div>
    </main>
  );
}