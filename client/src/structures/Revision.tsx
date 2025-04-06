import { Badge } from "@/components/ui/badge";
import { Checkbox } from "../components/ui/checkbox";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import { Link as LinkIcon } from "lucide-react";

export interface Props {
  handleChecks: () => void;
  isChecked: boolean;
  revisionId: number;
  questionName: string;
  questionTags: string;
  lastRevision: string;
  questionLink: string;
}

const Revision: React.FC<Props> = ({
  revisionId = 1,
  isChecked = false,
  handleChecks,
  questionName = "Your Question Name",
  questionTags = "GFG",
  lastRevision = "04 Apr 2025",
  questionLink = "",
}) => {
  return (
    <Card
      className={`
        w-full max-w-md backdrop-blur-lg border border-border bg-background/80
        rounded-3xl shadow-md p-4 my-4 transition-all
        hover:shadow-xl hover:border-primary/60
        hover:scale-[1.02]
        ${isChecked ? "ring-2 ring-green-500" : ""}
      `}
    >
      {/* Header */}
      <CardHeader className="flex flex-row justify-between items-start gap-3 p-0">
        <div className="space-y-1">
          <CardTitle className="text-lg font-bold leading-tight tracking-tight text-foreground">
            {questionName}
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="outline" className="text-xs px-2 py-1 rounded-full bg-muted/60">
              {questionTags}
            </Badge>
            <Badge variant="secondary" className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
              Revised: {lastRevision}
            </Badge>
          </div>
        </div>

        <Checkbox
          checked={!!isChecked}
          id={revisionId.toString()}
          onCheckedChange={handleChecks}
          className="mt-2 scale-125 hover:scale-130 transition-transform"
        />
      </CardHeader>

      {/* Footer */}
      <CardFooter className="flex justify-end pt-3 px-0">
        {questionLink && (
          <a
            href={questionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
          >
            <LinkIcon size={18} />
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default Revision;
