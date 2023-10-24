type System = {
  layerCount: 1;
  id: number;
  name: string;
  currentSystem: 'Linx' | 'Casper';
  homelineOrResidential: string;
  registerParties: RegisterParty[];
};

type RegisterParty = {
  layerCount: 2;
  id: number;
  name: string;
  fileOptions: FileOption[];
};

type FileOption = {
  layerCount: 3;
  id: number;
  name: string;
  transactionType?: string;
  borrowerOptions?: BorrowerOption[];
  portTypes?: PortType[];
};

type PortType = {
  layerCount: 4;
  id: number;
  name: 'Same-day' | 'Purchase Prior to sale' | 'Sale prior to purcase';
  mortgageAmountAdjustment: AmountAdjustmentType[];
};

type AmountAdjustmentType = {
  layerCount: 5;
  id: number;
  name: 'Straight' | 'Increase' | 'Decrease';
  transactionType: string;
};

type BorrowerOption = {
  layerCount: 4;
  id: number;
  name: string;
  ifBorrowerChange: boolean;
  howExistingMtgMove?: HowExistingMtgMove[];
};

type HowExistingMtgMove = {
  id: number;
  name: string;
  transactionType: string;
  hint?: string;
};

const layerTree: System[] = [
  {
    layerCount: 1,
    id: 1,
    name: 'Linx-Homeline',
    currentSystem: 'Linx',
    homelineOrResidential: 'Homeline',
    registerParties: [
      {
        layerCount: 2,
        id: 1,
        name: 'Lawyer',
        fileOptions: [
          {
            layerCount: 3,
            id: 1,
            name: 'Purchase',
            transactionType: 'Purchase',
          },
          {
            layerCount: 3,
            id: 2,
            name: 'Switch-in from OFI',
            transactionType: 'Switch-in from OFI',
          },
          {
            layerCount: 3,
            id: 3,
            name: 'Res to HLP',
            borrowerOptions: [
              {
                layerCount: 4,
                id: 1,
                name: 'No Borrower Changes',
                ifBorrowerChange: false,
                howExistingMtgMove: [
                  {
                    id: 1,
                    name: 'Existing MTG is moving as is into a HLP',
                    transactionType: 'TCO',
                  },
                  {
                    id: 2,
                    name: 'HLP MTG seg has new funds, then it must have a new term',
                    transactionType: 'Refinance',
                  },
                ],
              },
              {
                layerCount: 4,
                id: 2,
                name: 'Borrower Changes',
                ifBorrowerChange: true,
                howExistingMtgMove: [
                  {
                    id: 1,
                    name: 'Existing MTG is moving as is into a HLP',
                    transactionType: 'Add/Remove borrower',
                  },
                  {
                    id: 2,
                    name: 'HLP MTG seg has a new term',
                    transactionType: 'Refinance',
                    hint: '/nIf the homeline Mtg seg has new funds, then it must have a new term',
                  },
                ],
              },
            ],
          },
          //unfinished - lawyer hlp-hlp
          {
            layerCount: 3,
            id: 4,
            name: 'HLP to HLP',
            borrowerOptions: [
              {
                layerCount: 4,
                id: 1,
                name: 'No Borrower Changes',
                ifBorrowerChange: false,
                howExistingMtgMove: [
                  {
                    id: 1,
                    name: 'Existing MTG is moving as is into a HLP',
                    transactionType: 'TCO',
                  },
                  {
                    id: 2,
                    name: 'HLP MTG seg has new funds, then it must have a new term',
                    transactionType: 'Refinance',
                  },
                ],
              },
              {
                layerCount: 4,
                id: 2,
                name: 'Borrower Changes',
                ifBorrowerChange: true,
                howExistingMtgMove: [
                  {
                    id: 1,
                    name: 'Existing MTG is moving as is into a HLP',
                    transactionType: 'Add/Remove borrower',
                  },
                  {
                    id: 2,
                    name: 'HLP MTG seg has a new term',
                    transactionType: 'Refinance',
                    hint: '/nIf the homeline Mtg seg has new funds, then it must have a new term',
                  },
                ],
              },
            ],
          },
          {
            layerCount: 3,
            id: 5,
            name: 'Port',
            portTypes: [
              {
                layerCount: 4,
                id: 1,
                name: 'Same-day',
                mortgageAmountAdjustment: [
                  {
                    layerCount: 5,
                    id: 1,
                    name: 'Straight',
                    transactionType: 'Same-day Straight Port',
                  },
                  {
                    layerCount: 5,
                    id: 2,
                    name: 'Increase',
                    transactionType: 'Same-day Increase Port',
                  },
                  {
                    layerCount: 5,
                    id: 3,
                    name: 'Decrease',
                    transactionType: 'Same-day Decrease Port',
                  },
                ],
              },
              {
                layerCount: 4,
                id: 2,
                name: 'Purchase Prior to sale',
                mortgageAmountAdjustment: [
                  {
                    layerCount: 5,
                    id: 1,
                    name: 'Straight',
                    transactionType: 'Purchase Prior to sale Straight Port',
                  },
                  {
                    layerCount: 5,
                    id: 2,
                    name: 'Increase',
                    transactionType: 'Purchase Prior to sale Increase Port',
                  },
                  {
                    layerCount: 5,
                    id: 3,
                    name: 'Decrease',
                    transactionType: 'Purchase Prior to sale Decrease Port',
                  },
                ],
              },
              {
                layerCount: 4,
                id: 3,
                name: 'Sale prior to purcase',
                mortgageAmountAdjustment: [
                  {
                    layerCount: 5,
                    id: 1,
                    name: 'Straight',
                    transactionType: 'Sale prior to purcase Straight Port',
                  },
                  {
                    layerCount: 5,
                    id: 2,
                    name: 'Increase',
                    transactionType: 'Sale prior to purcase Increase Port',
                  },
                  {
                    layerCount: 5,
                    id: 3,
                    name: 'Decrease',
                    transactionType: 'Sale prior to purcase Decrease Port',
                  },
                ],
              },
            ],
          },
        ],
      },
      { layerCount: 2, id: 2, name: 'FCT', fileOptions: [] },
    ],
  },
  {
    layerCount: 1,
    id: 2,
    name: 'Linx-Residential',
    currentSystem: 'Linx',
    homelineOrResidential: 'Residential',
    registerParties: [],
  },
  {
    layerCount: 1,
    id: 3,
    name: 'Casper-Homeline',
    currentSystem: 'Casper',
    homelineOrResidential: 'Homeline',
    registerParties: [],
  },
  {
    layerCount: 1,
    id: 4,
    name: 'Casper-Residential',
    currentSystem: 'Casper',
    homelineOrResidential: 'Residential',
    registerParties: [],
  },
];

export default layerTree;
