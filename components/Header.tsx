import { SignedIn, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "./ui/button"
import { FilePlus2 } from "lucide-react"

function Header() {
  return (
    <div className="flex justify-between bg-white shadow-sm p-5 border-b">
        <Link 
            href='/dashboard' className="text-2xl"
        >
            Chat to <span className="text-gray-900">Physician</span>
        </Link>

        <SignedIn>
            <div className="flex items-center space-x-2">
                <Button asChild variant="link" className="hidden md:flex">
                    <Link href="/dashboard/upgrade">Pricing</Link>
                </Button>

                <Button asChild variant="outline">
                    <Link href="/dashboard">My Reports</Link>
                </Button>

                <Button asChild variant="outline" className="border-gray-300">
                    <Link href="/dashboard/upload">
                        <FilePlus2 className="text-gray-500"/>
                    </Link>
                </Button>

                {/* Upgrade Button */}
                <UserButton />
            </div>
        </SignedIn>
    </div>
  )
}

export default Header