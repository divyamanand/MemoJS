import { Badge } from "@/components/ui/badge";
import { Checkbox } from "../components/ui/checkbox";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import { Link } from "lucide-react";

export interface Props {
  handleChecks: () => void;
  isChecked: boolean;
  revisionId: number;
  questionName: string;
  questionTags: string;
  revisionDate: string;
  lastRevision: string;
  questionLink: string;
}

const Revision: React.FC<Props> = ({
  revisionId = 1,
  isChecked = false,
  handleChecks,
  questionName = "Your Question Name",
  questionTags = "GFG",
  revisionDate = "04 Apr 2025",
  lastRevision = "04 Apr 2025",
  questionLink = "",
}) => {
  return (
    <Card className="w-full max-w-md shadow-md p-2 gap-1 px-3">
    <CardHeader className="flex flex-row items-center justify-between px-0">
      <CardTitle className="text-lg font-semibold px-0">{questionName}</CardTitle>
      <Checkbox
        checked={!!isChecked}
        id={revisionId.toString()}
        onCheckedChange={handleChecks}
        className="hover:cursor-pointer px-0"
      />
    </CardHeader>
    <CardFooter className="flex items-center justify-start gap-2 text-sm text-gray-500 px-0">
        <Badge variant={"secondary"}>{questionTags}</Badge>
        <Badge variant={"secondary"}>{revisionDate}</Badge>
        <Badge variant={"secondary"}>{lastRevision}</Badge>

      <a href={questionLink} target="_blank">
      <Link size={13}/>
      </a> 
    </CardFooter>
  </Card>
  
  );
};

export default Revision;
