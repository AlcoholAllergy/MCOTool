export type FileStatusTypes =
  | 'In Order'
  | 'OOO Review Complete'
  | 'OOO Review Incomplete'
  | '';

export type RegisterPartyTypes = 'FCT' | 'Lawyer' | 'FNF' | 'Internal' | '';

export type hlpOrResTypes = 'Homeline' | 'Residential' | '';

export type PurchaseTypeNames =
  | 'Regular Purchase'
  | 'FTHBI'
  | 'Purchase Plus'
  | '';

export type FinalTypes =
  | ''
  | 'Regular Purchase'
  | 'FTHBI'
  | 'Purchase Plus'
  | 'Switch-in from OFI'
  | 'TCO'
  | 'Refinance'
  | 'Refinance Add-on'
  | 'Add/Remove borrower TCO'
  | 'Add/Remove borrower'
  | 'HLP Limit Increase with No New Allocation'
  | 'HLP Limit Increase with New RCL Only'
  | 'HLP Limit Increase with New Mortgage Seg'
  | 'Same-day Straight Port'
  | 'Same-day Increase Port'
  | 'Same-day Decrease Port'
  | 'Purchase Prior to sale Straight Port'
  | 'Purchase Prior to sale Increase Port'
  | 'Purchase Prior to sale Decrease Port'
  | 'Sale Prior to Purchase Straight Port'
  | 'Sale Prior to Purchase Increase Port'
  | 'Sale Prior to Purchase Decrease Port'
  | 'Port to Owned Same-day Straight Port'
  | 'Port to Owned Same-day Increase Port'
  | 'Port to Owned Same-day Decrease Port'
  | 'Within Existing Reg-HLP Limit Increase with No New Allocation'
  | 'Within Existing Reg-HLP Limit Increase with New RCL Only'
  | 'Within Existing Reg-HLP Limit Increase with New Mortgage Seg'
  | 'New Registration-HLP Limit Increase with No New Allocation'
  | 'New Registration-HLP Limit Increase with New RCL Only'
  | 'New Registration-HLP Limit Increase with New Mortgage Seg';

export type System = {
  layerCount: 1;
  id: number;
  name: string;
  currentSystem: 'Linx' | 'Casper';
  homelineOrResidential: string;
  registerParties: RegisterParty[];
};

export type RegisterParty =
  | {
      layerCount: 2;
      id: number;
      name: RegisterPartyTypes;
      fileOptions: FileOption[];
    }
  | {
      layerCount: 2;
      id: number;
      name: 'Internal';
      howExistingMtgMove: HowExistingMtgMove[];
    };

export type FileOption = {
  layerCount: 3;
  id: number;
  name: string;
  transactionType?: string;
  borrowerOptions?: BorrowerOption[];
  portTypes?: PortType[];
  purchaseTypes?: PurchaseType[];
};

export type PurchaseType = {
  id: number;
  name: PurchaseTypeNames;
  transactionType: PurchaseTypeNames;
};

export type PortType = {
  layerCount: 4;
  id: number;
  name:
    | 'Same-day'
    | 'Purchase Prior to sale'
    | 'Sale prior to purcase'
    | 'Port to current Owned Property has to be a Same-day port';
  mortgageAmountAdjustment: AmountAdjustmentType[];
};

export type AmountAdjustmentType = {
  layerCount: 5;
  id: number;
  name: 'Straight' | 'Increase' | 'Decrease';
  transactionType: string;
};

export type BorrowerOption = {
  layerCount: 4;
  id: number;
  name: string;
  ifBorrowerChange: boolean;
  howExistingMtgMove?: HowExistingMtgMove[];
  withinOrNewReg?: WithinOrNewReg[];
};

export type WithinOrNewReg = {
  id: number;
  name: string;
  howExistingMtgMove: HowExistingMtgMove[];
};

export type HowExistingMtgMove = {
  id: number;
  name: string;
  transactionType: string;
  prompts?: string[];
};
