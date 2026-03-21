import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { ReactNode } from "react";
type Props = {
  trigger: ReactNode;
  content: ReactNode;
  title: string;
  description?: string;
  contentClassname?: string;
};

export default function AlertModel({
  content,
  title,
  trigger,
  description,
  contentClassname,
}: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent
        className={`bg-white ${contentClassname ? contentClassname : ""} max-h-[90vh] overflow-y-auto `}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description ?? ""}</AlertDialogDescription>
        </AlertDialogHeader>

        {content}

        <AlertDialogFooter>
          <AlertDialogCancel className="absolute md:right-3 right-2 md:top-4 top-2 bg-red-500 text-white border-red-500 rounded-full! hover:bg-red-600 h-8! w-8! md:w-9! md:h-9!">
            <X />
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
