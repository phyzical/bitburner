import { IPlayer } from "../PersonObjects/IPlayer";
/**
 * Bitnode multipliers influence the difficulty of different aspects of the game.
 * Each Bitnode has a different theme/strategy to achieving the end goal, so these multipliers will can help drive the
 * player toward the intended strategy. Unless they really want to play the long, slow game of waiting...
 */
interface IBitNodeMultipliers {
  /**
   * Influences how quickly the player's agility level (not exp) scales
   */
  AgilityLevelMultiplier: number;

  /**
   * Influences the base cost to purchase an augmentation.
   */
  AugmentationMoneyCost: number;

  /**
   * Influences the base rep the player must have with a faction to purchase an augmentation.
   */
  AugmentationRepCost: number;

  /**
   * Influences how quickly the player can gain rank within Bladeburner.
   */
  BladeburnerRank: number;

  /**
   * Influences the cost of skill levels from Bladeburner.
   */
  BladeburnerSkillCost: number;

  /**
   * Influences how quickly the player's charisma level (not exp) scales
   */
  CharismaLevelMultiplier: number;

  /**
   * Influences the experience gained for each ability when a player completes a class.
   */
  ClassGymExpGain: number;

  /**
   * Influences the amount of money gained from completing Coding Contracts
   **/
  CodingContractMoney: number;

  /**
   * Influences the experience gained for each ability when the player completes working their job.
   */
  CompanyWorkExpGain: number;

  /**
   * Influences how much money the player earns when completing working their job.
   */
  CompanyWorkMoney: number;

  /**
   * Influences the valuation of corporations created by the player.
   */
  CorporationValuation: number;

  /**
   * Influences the base experience gained for each ability when the player commits a crime.
   */
  CrimeExpGain: number;

  /**
   * Influences the base money gained when the player commits a crime.
   */
  CrimeMoney: number;

  /**
   * Influences how many Augmentations you need in order to get invited to the Daedalus faction
   */
  DaedalusAugsRequirement: number;

  /**
   * Influences how quickly the player's defense level (not exp) scales
   */
  DefenseLevelMultiplier: number;

  /**
   * Influences how quickly the player's dexterity level (not exp) scales
   */
  DexterityLevelMultiplier: number;

  /**
   * Influences how much rep the player gains in each faction simply by being a member.
   */
  FactionPassiveRepGain: number;

  /**
   * Influences the experience gained for each ability when the player completes work for a Faction.
   */
  FactionWorkExpGain: number;

  /**
   * Influences how much rep the player gains when performing work for a faction.
   */
  FactionWorkRepGain: number;

  /**
   * Influences how much it costs to unlock the stock market's 4S Market Data API
   */
  FourSigmaMarketDataApiCost: number;

  /**
   * Influences how much it costs to unlock the stock market's 4S Market Data (NOT API)
   */
  FourSigmaMarketDataCost: number;

  /**
   * Reduces gangs earning.
   */
  GangSoftcap: number;

  /**
   * Percentage of unique augs that the gang has.
   */
  GangUniqueAugs: number;

  /**
   * Influences the experienced gained when hacking a server.
   */
  HackExpGain: number;

  /**
   * Influences how quickly the player's hacking level (not experience) scales
   */
  HackingLevelMultiplier: number;

  /**
   * Influences how much money is produced by Hacknet Nodes.
   * Influeces the hash rate of Hacknet Servers (unlocked in BitNode-9)
   */
  HacknetNodeMoney: number;

  /**
   * Influences how much money it costs to upgrade your home computer's RAM
   */
  HomeComputerRamCost: number;

  /**
   * Influences how much money is gained when the player infiltrates a company.
   */
  InfiltrationMoney: number;

  /**
   * Influences how much rep the player can gain from factions when selling stolen documents and secrets
   */
  InfiltrationRep: number;

  /**
   * Influences how much money can be stolen from a server when the player performs a hack against it through
   * the Terminal.
   */
  ManualHackMoney: number;

  /**
   * Influence how much it costs to purchase a server
   */
  PurchasedServerCost: number;

  /**
   * Influence how much it costs to purchase a server
   */
  PurchasedServerSoftcap: number;

  /**
   * Influences the maximum number of purchased servers you can have
   */
  PurchasedServerLimit: number;

  /**
   * Influences the maximum allowed RAM for a purchased server
   */
  PurchasedServerMaxRam: number;
  /**
   * Influences the minimum favor the player must have with a faction before they can donate to gain rep.
   */
  RepToDonateToFaction: number;

  /**
   * Influences how much money can be stolen from a server when a script performs a hack against it.
   */
  ScriptHackMoney: number;

  /**
   * The amount of money actually gained when script hack a server. This is
   * different than the above because you can reduce the amount of money but
   * not gain that same amount.
   */
  ScriptHackMoneyGain: number;

  /**
   * Influences the growth percentage per cycle against a server.
   */
  ServerGrowthRate: number;

  /**
   * Influences the maxmimum money that a server can grow to.
   */
  ServerMaxMoney: number;

  /**
   * Influences the initial money that a server starts with.
   */
  ServerStartingMoney: number;

  /**
   * Influences the initial security level (hackDifficulty) of a server.
   */
  ServerStartingSecurity: number;

  /**
   * Influences the weaken amount per invocation against a server.
   */
  ServerWeakenRate: number;

  /**
   * Influences how quickly the player's strength level (not exp) scales
   */
  StrengthLevelMultiplier: number;

  /**
   * Influences the power of the gift.
   */
  StaneksGiftPowerMultiplier: number;

  /**
   * Influences the size of the gift.
   */
  StaneksGiftExtraSize: number;

  /**
   * Influences the hacking skill required to backdoor the world daemon.
   */
  WorldDaemonDifficulty: number;

  /**
   * Influences corporation dividends.
   */
  CorporationSoftCap: number;

  // Index signature
  [key: string]: number;
}

export function getBitNodeMultipliers(p: IPlayer, bitNode?: number): IBitNodeMultipliers {
  const BitNodeMultipliers: IBitNodeMultipliers = {
    HackingLevelMultiplier: 1,
    StrengthLevelMultiplier: 1,
    DefenseLevelMultiplier: 1,
    DexterityLevelMultiplier: 1,
    AgilityLevelMultiplier: 1,
    CharismaLevelMultiplier: 1,

    ServerGrowthRate: 1,
    ServerMaxMoney: 1,
    ServerStartingMoney: 1,
    ServerStartingSecurity: 1,
    ServerWeakenRate: 1,

    HomeComputerRamCost: 1,

    PurchasedServerCost: 1,
    PurchasedServerSoftcap: 1,
    PurchasedServerLimit: 1,
    PurchasedServerMaxRam: 1,

    CompanyWorkMoney: 1,
    CrimeMoney: 1,
    HacknetNodeMoney: 1,
    ManualHackMoney: 1,
    ScriptHackMoney: 1,
    ScriptHackMoneyGain: 1,
    CodingContractMoney: 1,

    ClassGymExpGain: 1,
    CompanyWorkExpGain: 1,
    CrimeExpGain: 1,
    FactionWorkExpGain: 1,
    HackExpGain: 1,

    FactionPassiveRepGain: 1,
    FactionWorkRepGain: 1,
    RepToDonateToFaction: 1,

    AugmentationMoneyCost: 1,
    AugmentationRepCost: 1,

    InfiltrationMoney: 1,
    InfiltrationRep: 1,

    FourSigmaMarketDataCost: 1,
    FourSigmaMarketDataApiCost: 1,

    CorporationValuation: 1,
    CorporationSoftCap: 1,

    BladeburnerRank: 1,
    BladeburnerSkillCost: 1,

    GangSoftcap: 1,
    GangUniqueAugs: 1,

    DaedalusAugsRequirement: 1,

    StaneksGiftPowerMultiplier: 1,
    StaneksGiftExtraSize: 1,

    WorldDaemonDifficulty: 1,
  };

  if (!bitNode) {
    bitNode = p.bitNodeN;
    if (bitNode == null) {
      bitNode = 1;
    }
  }

  // Special case.
  BitNodeMultipliers.StaneksGiftExtraSize = 0;

  switch (bitNode) {
    case 1: // Source Genesis (every multiplier is 1)
      break;
    case 2: // Rise of the Underworld
      BitNodeMultipliers.HackingLevelMultiplier = 0.8;
      BitNodeMultipliers.ServerGrowthRate = 0.8;
      BitNodeMultipliers.ServerMaxMoney = 0.2;
      BitNodeMultipliers.ServerStartingMoney = 0.4;
      BitNodeMultipliers.CrimeMoney = 3;
      BitNodeMultipliers.InfiltrationMoney = 3;
      BitNodeMultipliers.FactionWorkRepGain = 0.5;
      BitNodeMultipliers.FactionPassiveRepGain = 0;
      BitNodeMultipliers.StaneksGiftPowerMultiplier = 2;
      BitNodeMultipliers.StaneksGiftExtraSize = -6;
      BitNodeMultipliers.PurchasedServerSoftcap = 1.3;
      BitNodeMultipliers.CorporationSoftCap = 0.9;
      BitNodeMultipliers.WorldDaemonDifficulty = 5;
      break;
    case 3: // Corporatocracy
      BitNodeMultipliers.HackingLevelMultiplier = 0.8;
      BitNodeMultipliers.RepToDonateToFaction = 0.5;
      BitNodeMultipliers.AugmentationRepCost = 3;
      BitNodeMultipliers.AugmentationMoneyCost = 3;
      BitNodeMultipliers.ServerMaxMoney = 0.2;
      BitNodeMultipliers.ServerStartingMoney = 0.2;
      BitNodeMultipliers.ServerGrowthRate = 0.2;
      BitNodeMultipliers.ScriptHackMoney = 0.2;
      BitNodeMultipliers.CompanyWorkMoney = 0.25;
      BitNodeMultipliers.CrimeMoney = 0.25;
      BitNodeMultipliers.HacknetNodeMoney = 0.25;
      BitNodeMultipliers.HomeComputerRamCost = 1.5;
      BitNodeMultipliers.PurchasedServerCost = 2;
      BitNodeMultipliers.StaneksGiftPowerMultiplier = 0.75;
      BitNodeMultipliers.StaneksGiftExtraSize = -2;
      BitNodeMultipliers.PurchasedServerSoftcap = 1.3;
      BitNodeMultipliers.GangSoftcap = 0.9;
      BitNodeMultipliers.WorldDaemonDifficulty = 2;
      BitNodeMultipliers.GangUniqueAugs = 0.5;
      break;
    case 4: // The Singularity
      BitNodeMultipliers.ServerMaxMoney = 0.15;
      BitNodeMultipliers.ServerStartingMoney = 0.75;
      BitNodeMultipliers.ScriptHackMoney = 0.2;
      BitNodeMultipliers.CompanyWorkMoney = 0.1;
      BitNodeMultipliers.CrimeMoney = 0.2;
      BitNodeMultipliers.HacknetNodeMoney = 0.05;
      BitNodeMultipliers.CompanyWorkExpGain = 0.5;
      BitNodeMultipliers.ClassGymExpGain = 0.5;
      BitNodeMultipliers.FactionWorkExpGain = 0.5;
      BitNodeMultipliers.HackExpGain = 0.4;
      BitNodeMultipliers.CrimeExpGain = 0.5;
      BitNodeMultipliers.FactionWorkRepGain = 0.75;
      BitNodeMultipliers.StaneksGiftPowerMultiplier = 1.5;
      BitNodeMultipliers.StaneksGiftExtraSize = 0;
      BitNodeMultipliers.PurchasedServerSoftcap = 1.2;
      BitNodeMultipliers.WorldDaemonDifficulty = 3;
      BitNodeMultipliers.GangUniqueAugs = 0.5;
      break;
    case 5: // Artificial intelligence
      BitNodeMultipliers.ServerMaxMoney = 2;
      BitNodeMultipliers.ServerStartingSecurity = 2;
      BitNodeMultipliers.ServerStartingMoney = 0.5;
      BitNodeMultipliers.ScriptHackMoney = 0.15;
      BitNodeMultipliers.HacknetNodeMoney = 0.2;
      BitNodeMultipliers.CrimeMoney = 0.5;
      BitNodeMultipliers.InfiltrationRep = 1.5;
      BitNodeMultipliers.InfiltrationMoney = 1.5;
      BitNodeMultipliers.AugmentationMoneyCost = 2;
      BitNodeMultipliers.HackExpGain = 0.5;
      BitNodeMultipliers.CorporationValuation = 0.5;
      BitNodeMultipliers.StaneksGiftPowerMultiplier = 1.3;
      BitNodeMultipliers.StaneksGiftExtraSize = 0;
      BitNodeMultipliers.PurchasedServerSoftcap = 1.2;
      BitNodeMultipliers.WorldDaemonDifficulty = 1.5;
      BitNodeMultipliers.GangUniqueAugs = 0.5;
      break;
    case 6: // Bladeburner
      BitNodeMultipliers.HackingLevelMultiplier = 0.35;
      BitNodeMultipliers.ServerMaxMoney = 0.4;
      BitNodeMultipliers.ServerStartingMoney = 0.5;
      BitNodeMultipliers.ServerStartingSecurity = 1.5;
      BitNodeMultipliers.ScriptHackMoney = 0.75;
      BitNodeMultipliers.CompanyWorkMoney = 0.5;
      BitNodeMultipliers.CrimeMoney = 0.75;
      BitNodeMultipliers.InfiltrationMoney = 0.75;
      BitNodeMultipliers.CorporationValuation = 0.2;
      BitNodeMultipliers.HacknetNodeMoney = 0.2;
      BitNodeMultipliers.HackExpGain = 0.25;
      BitNodeMultipliers.DaedalusAugsRequirement = 1.166; // Results in 35 Augs needed
      BitNodeMultipliers.PurchasedServerSoftcap = 2;
      BitNodeMultipliers.StaneksGiftPowerMultiplier = 0.5;
      BitNodeMultipliers.StaneksGiftExtraSize = 2;
      BitNodeMultipliers.GangSoftcap = 0.7;
      BitNodeMultipliers.CorporationSoftCap = 0.9;
      BitNodeMultipliers.WorldDaemonDifficulty = 2;
      BitNodeMultipliers.GangUniqueAugs = 0.2;
      break;
    case 7: // Bladeburner 2079
      BitNodeMultipliers.BladeburnerRank = 0.6;
      BitNodeMultipliers.BladeburnerSkillCost = 2;
      BitNodeMultipliers.AugmentationMoneyCost = 3;
      BitNodeMultipliers.HackingLevelMultiplier = 0.35;
      BitNodeMultipliers.ServerMaxMoney = 0.4;
      BitNodeMultipliers.ServerStartingMoney = 0.5;
      BitNodeMultipliers.ServerStartingSecurity = 1.5;
      BitNodeMultipliers.ScriptHackMoney = 0.5;
      BitNodeMultipliers.CompanyWorkMoney = 0.5;
      BitNodeMultipliers.CrimeMoney = 0.75;
      BitNodeMultipliers.InfiltrationMoney = 0.75;
      BitNodeMultipliers.CorporationValuation = 0.2;
      BitNodeMultipliers.HacknetNodeMoney = 0.2;
      BitNodeMultipliers.HackExpGain = 0.25;
      BitNodeMultipliers.FourSigmaMarketDataCost = 2;
      BitNodeMultipliers.FourSigmaMarketDataApiCost = 2;
      BitNodeMultipliers.DaedalusAugsRequirement = 1.166; // Results in 35 Augs needed
      BitNodeMultipliers.PurchasedServerSoftcap = 2;
      BitNodeMultipliers.StaneksGiftPowerMultiplier = 0.9;
      BitNodeMultipliers.StaneksGiftExtraSize = -1;
      BitNodeMultipliers.GangSoftcap = 0.7;
      BitNodeMultipliers.CorporationSoftCap = 0.9;
      BitNodeMultipliers.WorldDaemonDifficulty = 2;
      BitNodeMultipliers.GangUniqueAugs = 0.2;
      break;
    case 8: // Ghost of Wall Street
      BitNodeMultipliers.ScriptHackMoney = 0.3;
      BitNodeMultipliers.ScriptHackMoneyGain = 0;
      BitNodeMultipliers.ManualHackMoney = 0;
      BitNodeMultipliers.CompanyWorkMoney = 0;
      BitNodeMultipliers.CrimeMoney = 0;
      BitNodeMultipliers.HacknetNodeMoney = 0;
      BitNodeMultipliers.InfiltrationMoney = 0;
      BitNodeMultipliers.RepToDonateToFaction = 0;
      BitNodeMultipliers.CorporationValuation = 0;
      BitNodeMultipliers.CodingContractMoney = 0;
      BitNodeMultipliers.StaneksGiftExtraSize = -7;
      BitNodeMultipliers.PurchasedServerSoftcap = 4;
      BitNodeMultipliers.GangSoftcap = 0;
      BitNodeMultipliers.CorporationSoftCap = 0;
      BitNodeMultipliers.GangUniqueAugs = 0;
      break;
    case 9: // Hacktocracy
      BitNodeMultipliers.HackingLevelMultiplier = 0.5;
      BitNodeMultipliers.StrengthLevelMultiplier = 0.45;
      BitNodeMultipliers.DefenseLevelMultiplier = 0.45;
      BitNodeMultipliers.DexterityLevelMultiplier = 0.45;
      BitNodeMultipliers.AgilityLevelMultiplier = 0.45;
      BitNodeMultipliers.CharismaLevelMultiplier = 0.45;
      BitNodeMultipliers.PurchasedServerLimit = 0;
      BitNodeMultipliers.HomeComputerRamCost = 5;
      BitNodeMultipliers.CrimeMoney = 0.5;
      BitNodeMultipliers.ScriptHackMoney = 0.1;
      BitNodeMultipliers.HackExpGain = 0.05;
      BitNodeMultipliers.ServerStartingMoney = 0.1;
      BitNodeMultipliers.ServerMaxMoney = 0.1;
      BitNodeMultipliers.ServerStartingSecurity = 2.5;
      BitNodeMultipliers.CorporationValuation = 0.5;
      BitNodeMultipliers.FourSigmaMarketDataCost = 5;
      BitNodeMultipliers.FourSigmaMarketDataApiCost = 4;
      BitNodeMultipliers.BladeburnerRank = 0.9;
      BitNodeMultipliers.BladeburnerSkillCost = 1.2;
      BitNodeMultipliers.StaneksGiftPowerMultiplier = 0.5;
      BitNodeMultipliers.StaneksGiftExtraSize = 2;
      BitNodeMultipliers.GangSoftcap = 0.8;
      BitNodeMultipliers.CorporationSoftCap = 0.7;
      BitNodeMultipliers.WorldDaemonDifficulty = 2;
      BitNodeMultipliers.GangUniqueAugs = 0.25;
      break;
    case 10: // Digital Carbon
      BitNodeMultipliers.HackingLevelMultiplier = 0.35;
      BitNodeMultipliers.StrengthLevelMultiplier = 0.4;
      BitNodeMultipliers.DefenseLevelMultiplier = 0.4;
      BitNodeMultipliers.DexterityLevelMultiplier = 0.4;
      BitNodeMultipliers.AgilityLevelMultiplier = 0.4;
      BitNodeMultipliers.CharismaLevelMultiplier = 0.4;
      BitNodeMultipliers.CompanyWorkMoney = 0.5;
      BitNodeMultipliers.CrimeMoney = 0.5;
      BitNodeMultipliers.HacknetNodeMoney = 0.5;
      BitNodeMultipliers.ManualHackMoney = 0.5;
      BitNodeMultipliers.ScriptHackMoney = 0.5;
      BitNodeMultipliers.CodingContractMoney = 0.5;
      BitNodeMultipliers.InfiltrationMoney = 0.5;
      BitNodeMultipliers.CorporationValuation = 0.5;
      BitNodeMultipliers.AugmentationMoneyCost = 5;
      BitNodeMultipliers.AugmentationRepCost = 2;
      BitNodeMultipliers.HomeComputerRamCost = 1.5;
      BitNodeMultipliers.PurchasedServerCost = 5;
      BitNodeMultipliers.PurchasedServerLimit = 0.6;
      BitNodeMultipliers.PurchasedServerMaxRam = 0.5;
      BitNodeMultipliers.BladeburnerRank = 0.8;
      BitNodeMultipliers.StaneksGiftPowerMultiplier = 0.75;
      BitNodeMultipliers.StaneksGiftExtraSize = -3;
      BitNodeMultipliers.PurchasedServerSoftcap = 1.1;
      BitNodeMultipliers.GangSoftcap = 0.9;
      BitNodeMultipliers.CorporationSoftCap = 0.9;
      BitNodeMultipliers.WorldDaemonDifficulty = 2;
      BitNodeMultipliers.GangUniqueAugs = 0.25;
      break;
    case 11: //The Big Crash
      BitNodeMultipliers.HackingLevelMultiplier = 0.6;
      BitNodeMultipliers.HackExpGain = 0.5;
      BitNodeMultipliers.ServerMaxMoney = 0.1;
      BitNodeMultipliers.ServerStartingMoney = 0.1;
      BitNodeMultipliers.ServerGrowthRate = 0.2;
      BitNodeMultipliers.ServerWeakenRate = 2;
      BitNodeMultipliers.CrimeMoney = 3;
      BitNodeMultipliers.CompanyWorkMoney = 0.5;
      BitNodeMultipliers.HacknetNodeMoney = 0.1;
      BitNodeMultipliers.AugmentationMoneyCost = 2;
      BitNodeMultipliers.InfiltrationMoney = 2.5;
      BitNodeMultipliers.InfiltrationRep = 2.5;
      BitNodeMultipliers.CorporationValuation = 0.1;
      BitNodeMultipliers.CodingContractMoney = 0.25;
      BitNodeMultipliers.FourSigmaMarketDataCost = 4;
      BitNodeMultipliers.FourSigmaMarketDataApiCost = 4;
      BitNodeMultipliers.PurchasedServerSoftcap = 2;
      BitNodeMultipliers.CorporationSoftCap = 0.9;
      BitNodeMultipliers.WorldDaemonDifficulty = 1.5;
      BitNodeMultipliers.GangUniqueAugs = 0.75;
      break;
    case 12: {
      //The Recursion
      let sf12Lvl = 0;
      for (let i = 0; i < p.sourceFiles.length; i++) {
        if (p.sourceFiles[i].n === 12) {
          sf12Lvl = p.sourceFiles[i].lvl;
        }
      }
      const inc = Math.pow(1.02, sf12Lvl);
      const dec = 1 / inc;

      // Multiplier for number of augs needed for Daedalus increases
      // up to a maximum of 1.34, which results in 40 Augs required
      BitNodeMultipliers.DaedalusAugsRequirement = Math.min(inc, 1.34);

      BitNodeMultipliers.HackingLevelMultiplier = dec;
      BitNodeMultipliers.StrengthLevelMultiplier = dec;
      BitNodeMultipliers.DefenseLevelMultiplier = dec;
      BitNodeMultipliers.DexterityLevelMultiplier = dec;
      BitNodeMultipliers.AgilityLevelMultiplier = dec;
      BitNodeMultipliers.CharismaLevelMultiplier = dec;

      BitNodeMultipliers.ServerMaxMoney = dec;
      BitNodeMultipliers.ServerStartingMoney = dec;
      BitNodeMultipliers.ServerGrowthRate = dec;
      BitNodeMultipliers.ServerWeakenRate = dec;

      //Does not scale, otherwise security might start at 300+
      BitNodeMultipliers.ServerStartingSecurity = 1.5;

      BitNodeMultipliers.HomeComputerRamCost = inc;

      BitNodeMultipliers.PurchasedServerCost = inc;
      BitNodeMultipliers.PurchasedServerLimit = dec;
      BitNodeMultipliers.PurchasedServerMaxRam = dec;
      BitNodeMultipliers.PurchasedServerSoftcap = inc;

      BitNodeMultipliers.ManualHackMoney = dec;
      BitNodeMultipliers.ScriptHackMoney = dec;
      BitNodeMultipliers.CompanyWorkMoney = dec;
      BitNodeMultipliers.CrimeMoney = dec;
      BitNodeMultipliers.HacknetNodeMoney = dec;
      BitNodeMultipliers.CodingContractMoney = dec;

      BitNodeMultipliers.CompanyWorkExpGain = dec;
      BitNodeMultipliers.ClassGymExpGain = dec;
      BitNodeMultipliers.FactionWorkExpGain = dec;
      BitNodeMultipliers.HackExpGain = dec;
      BitNodeMultipliers.CrimeExpGain = dec;

      BitNodeMultipliers.FactionWorkRepGain = dec;
      BitNodeMultipliers.FactionPassiveRepGain = dec;
      BitNodeMultipliers.RepToDonateToFaction = inc;

      BitNodeMultipliers.AugmentationRepCost = inc;
      BitNodeMultipliers.AugmentationMoneyCost = inc;

      BitNodeMultipliers.InfiltrationMoney = dec;
      BitNodeMultipliers.InfiltrationRep = dec;

      BitNodeMultipliers.FourSigmaMarketDataCost = inc;
      BitNodeMultipliers.FourSigmaMarketDataApiCost = inc;

      BitNodeMultipliers.CorporationValuation = dec;

      BitNodeMultipliers.BladeburnerRank = dec;
      BitNodeMultipliers.BladeburnerSkillCost = inc;

      BitNodeMultipliers.StaneksGiftPowerMultiplier = inc;
      BitNodeMultipliers.StaneksGiftExtraSize = inc;
      BitNodeMultipliers.GangSoftcap = 0.8;
      BitNodeMultipliers.CorporationSoftCap = 0.8;
      BitNodeMultipliers.WorldDaemonDifficulty = inc;

      BitNodeMultipliers.GangUniqueAugs = dec;
      break;
    }
    case 13: {
      BitNodeMultipliers.PurchasedServerSoftcap = 1.6;

      BitNodeMultipliers.HackingLevelMultiplier = 0.25;
      BitNodeMultipliers.StrengthLevelMultiplier = 0.7;
      BitNodeMultipliers.DefenseLevelMultiplier = 0.7;
      BitNodeMultipliers.DexterityLevelMultiplier = 0.7;
      BitNodeMultipliers.AgilityLevelMultiplier = 0.7;

      BitNodeMultipliers.ServerMaxMoney = 0.45;
      BitNodeMultipliers.ServerStartingMoney = 0.75;

      BitNodeMultipliers.ServerStartingSecurity = 3;

      BitNodeMultipliers.ScriptHackMoney = 0.2;
      BitNodeMultipliers.CompanyWorkMoney = 0.4;
      BitNodeMultipliers.CrimeMoney = 0.4;
      BitNodeMultipliers.HacknetNodeMoney = 0.4;
      BitNodeMultipliers.CodingContractMoney = 0.4;

      BitNodeMultipliers.CompanyWorkExpGain = 0.5;
      BitNodeMultipliers.ClassGymExpGain = 0.5;
      BitNodeMultipliers.FactionWorkExpGain = 0.5;
      BitNodeMultipliers.HackExpGain = 0.1;
      BitNodeMultipliers.CrimeExpGain = 0.5;

      BitNodeMultipliers.FactionWorkRepGain = 0.6;

      BitNodeMultipliers.FourSigmaMarketDataCost = 10;
      BitNodeMultipliers.FourSigmaMarketDataApiCost = 10;

      BitNodeMultipliers.CorporationValuation = 0.001;

      BitNodeMultipliers.BladeburnerRank = 0.45;
      BitNodeMultipliers.BladeburnerSkillCost = 2;
      BitNodeMultipliers.StaneksGiftPowerMultiplier = 2;
      BitNodeMultipliers.StaneksGiftExtraSize = 1;
      BitNodeMultipliers.GangSoftcap = 0.3;
      BitNodeMultipliers.CorporationSoftCap = 0.3;
      BitNodeMultipliers.WorldDaemonDifficulty = 3;
      BitNodeMultipliers.GangUniqueAugs = 0.1;
      break;
    }
    default:
      console.warn("Player.bitNodeN invalid");
      break;
  }

  return BitNodeMultipliers;
}
