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

type IProps = {
  company: Company;
  entryPosType: CompanyPosition;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  text: string;
};

export function ApplyToJobButton(props: IProps): React.ReactElement {
  const player = use.Player();

  function getJobRequirementTooltip(): string {
    const pos = player.getNextCompanyPosition(props.company, props.entryPosType);
    if (pos == null) {
      return `You are already at the highest position for ${props.entryPosType.getPositionType()}! No promotion available`;
    } else if (!props.company.hasPosition(pos)) {
      return `${pos.name} is not available for ${props.company.name}`;
    } else {
      return getJobRequirementText(props.company, pos, true);
    }
  }

  return (
    <>
      <Tooltip title={<span dangerouslySetInnerHTML={{ __html: getJobRequirementTooltip() }}></span>}>
        <Button onClick={props.onClick}>{props.text}</Button>
      </Tooltip>
    </>
  );
}
