import Documents from "@/components/Documents";

export const dynamic = "force-dynamic";

function Dashboard() {
  return (
    <div className="h-full max-w-7xl mx-auto">
        <h1 className="text-3xl p-5 bg-gray-100 font-extralight text-gray-600">
            My Reports
        </h1>

        {/* Documents */}
        <Documents />
    </div>
  )
}

export default Dashboard