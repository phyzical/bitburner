import { IPlayer } from 'src/PersonObjects/IPlayer';
import { Company } from './Company';
import { CompanyPosition } from "./CompanyPosition";
import { getNextCompanyPositionHelper } from "./GetNextCompanyPosition";

export function getCurrentCompanyPositionHelper(player: IPlayer, company: Company, pos: CompanyPosition): CompanyPosition {
  while (true) {
    const newPos = getNextCompanyPositionHelper(pos);
    if (newPos == null) {
      return pos;
    }

    //Check if this company has this position
    if (company.hasPosition(newPos)) {
      if (!player.isQualified(company, newPos)) {
        //If player not qualified for next job, break loop so player will be given current job
        return pos;
      }
      pos = newPos;
    } else {
      return pos;
    }
  }
}
