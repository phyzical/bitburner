import { Player } from "../Player";
import { getBitNodeMultipliers } from "../BitNode/BitNodeMultipliers";
import { CONSTANTS } from "../Constants";

export function getStockMarket4SDataCost(): number {
  return CONSTANTS.MarketData4SCost * getBitNodeMultipliers(Player).FourSigmaMarketDataCost;
}

export function getStockMarket4STixApiCost(): number {
  return CONSTANTS.MarketDataTixApi4SCost * getBitNodeMultipliers(Player).FourSigmaMarketDataApiCost;
}

export function getStockMarketWseCost(): number {
  return CONSTANTS.WSEAccountCost;
}

export function getStockMarketTixApiCost(): number {
  return CONSTANTS.TIXAPICost;
}
