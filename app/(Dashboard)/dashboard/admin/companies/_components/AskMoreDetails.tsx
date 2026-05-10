import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { sileo } from "sileo";

export default function AskMoreDetails() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [showMessage, setShowMessage] = useState(false);
  const HandleSendForMoreDetails = () => {
    if (!textAreaRef.current) return;
    if (textAreaRef.current.value.trim().length < 5) {
      setShowMessage(true);
      textAreaRef.current.classList.add("border-red-500");
    } else {
      textAreaRef.current.classList.remove("border-red-500");
      sileo.success({
        title: "Details has been submitted",
        description: "Your requested details has been sent to company",
      });
      setShowMessage(false);
    }
  };
  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <Label htmlFor="needed-documents">Write Needed Documents</Label>
        <Textarea
          ref={textAreaRef}
          id="needed-documents"
          className="h-30 bg-input-bg border border-border-color"
          placeholder="Needed Documents Descriptions"
        />
      </div>
      {showMessage && (
        <p className="text-xs text-red-500">
          *Please Write Detials more than 5 chars
        </p>
      )}
      <Button
        onClick={HandleSendForMoreDetails}
        className="text-[0.83rem] w-32 h-10  bg-main-color hover:bg-main-color/90 text-white">
        Send
      </Button>
    </div>
  );
}
