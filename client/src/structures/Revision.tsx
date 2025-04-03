import { Badge } from "@/components/ui/badge";
import { Checkbox } from "../components/ui/checkbox";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

export interface Props {
  handleChecks: () => void;
  isChecked: boolean;
  revisionId: number;
  questionName: string;
  questionTags: string;
  revisionDate: string;
}

const Revision: React.FC<Props> = ({
  revisionId = 1,
  isChecked = false,
  handleChecks,
  questionName = "Your Question Name",
  questionTags = "GFG",
  revisionDate = "04 Apr 2025",
}) => {
  return (
    <Card className="w-full max-w-md shadow-md p-2 gap-1">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">{questionName}</CardTitle>
        <Checkbox checked={!!isChecked} id={revisionId.toString()} onCheckedChange={handleChecks} />
      </CardHeader>
      <CardFooter className="flex flex-row items-start text-sm text-gray-500 gap-2">
        <Badge variant={"secondary"}>{questionTags}</Badge>
        <Badge variant={"secondary"}>{revisionDate}</Badge>
        <Badge variant={"secondary"}>{revisionId}</Badge>
      </CardFooter>
    </Card>
  );
};

export default Revision;
