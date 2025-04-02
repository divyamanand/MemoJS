import React from "react";

export interface Props {
    handleChecks: () => void;
    isChecked: boolean;
    revisionId: number;
    questionName: string;
    questionTags: string;
    revisionDate: string;
}

const Revision: React.FC<Props> = (
  {revisionId = 1, 
    isChecked = false,
    handleChecks, 
    questionName = "Your Question Name", 
    questionTags = "GFG", 
    revisionDate = "04 Apr 2025"}) => {

  return (
    <>  
        <input type="checkbox"
        checked={isChecked}
        id={revisionId.toString()}
        onChange={() => handleChecks()}/>
        <h3>{questionName}</h3>
        <h4>{questionTags}</h4>
        <h4>{revisionDate}</h4>
    </>
  )
}

export default Revision