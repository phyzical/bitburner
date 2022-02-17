/**
 * React Component for a button that's used to apply for a job
 */
import * as React from "react";

import { Company } from "../../Company/Company";
import { CompanyPosition } from "../../Company/CompanyPosition";
import { getJobRequirementText } from "../../Company/GetJobRequirementText";

import { use } from "../../ui/Context";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { getNextCompanyPositionHelper } from "../../Company/GetNextCompanyPosition";

type IProps = {
  company: Company;
  entryPosType: CompanyPosition;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  text: string;
};

export function ApplyToJobButton({ company, entryPosType, onClick, text }: IProps): React.ReactElement {
  const player = use.Player();
  const currentPosition = player.getCurrentCompanyPosition(company)
  const [tooltipText, setTooltipText] = React.useState("")

  React.useEffect(() => {
    const pos = getNextCompanyPositionHelper(currentPosition)
    if (pos == null) {
      setTooltipText(`You are already at the highest position for ${entryPosType.getPositionType()}! No promotion available`);
    } else if (!company.hasPosition(pos)) {
      setTooltipText(`${pos.name} is not available for ${company.name}`);
    } else {
      setTooltipText(getJobRequirementText(company, pos, true));
    }
  }, [currentPosition])

  return (
    <>
      <Tooltip title={<span dangerouslySetInnerHTML={{ __html: tooltipText }}></span>}>
        <Button onClick={onClick}>{text}</Button>
      </Tooltip>
    </>
  );
}
