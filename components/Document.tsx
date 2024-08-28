"use client";

import { useRouter } from "next/navigation";
import byteSize from "byte-size";
import { DownloadCloud, Trash2Icon } from "lucide-react";
// import useSubscription from "@/hooks/useSubscription";
import { useTransition } from "react";
import { Button } from "./ui/button";
// import { deleteDocument } from "@/actions/deleteDocument";

function Document({
  id,
  name,
  size,
  downloadUrl,
}: {
  id: string;
  name: string;
  size: number;
  downloadUrl: string;
}) {
  const router = useRouter();
//   const [isDeleting, startTransaction] = useTransition();
//   const { hasActiveMembership } = useSubscription();
  return <div className="flex flex-col w-64 h-80 rounded-xl bg-white drop-shadow-md justify-between p-4 transition-all transform hover:scale-105 hover:bg-gray-600 hover:text-white cursor-pointer group">
        <div
            className="flex-1"
            onClick={() => {
            router.push(`/dashboard/files/${id}`);
            }}
        >
        <p className="font-semibold line-clamp-2">{name}</p>
        <p className="text-sm text-gray-500 group-hover:text-indigo-100">
          {/* render size in kbs */}
          {byteSize(size).value} KB
        </p>
    </div>
    </div>;
}
export default Document;