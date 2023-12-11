import { System } from '@/types/generalTypes';
import PROMPTS from '@/static/promptsNotes';

const layerTree: System[] = [
  //Linx-Homeline
  {
    layerCount: 1,
    id: 1,
    name: 'Linx-Homeline',
    currentSystem: 'Linx',
    homelineOrResidential: 'Homeline',
    registerParties: [
      //Lawyer Homeline
      {
        layerCount: 2,
        id: 1,
        name: 'Lawyer',
        fileOptions: [
          {
            layerCount: 3,
            id: 1,
            name: 'Purchase',
            purchaseTypes: [
              {
                id: 1,
                name: 'Regular Purchase',
                transactionType: 'Regular Purchase',
              },
              { id: 2, name: 'FTHBI', transactionType: 'FTHBI' },
              {
                id: 3,
                name: 'Purchase Plus',
                transactionType: 'Purchase Plus',
              },
            ],
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
            name: 'No Transferred',
            transactionType: 'Refinance',
            prompts: [PROMPTS.Lawyer.DISB_LAWYER],
          },
          {
            layerCount: 3,
            id: 4,
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
                    prompts: [
                      PROMPTS.Lawyer.DRAFT_PICKUP,
                      PROMPTS.Lawyer.HLP01E,
                      PROMPTS.Lawyer.INFOONLY_AND_NOPENALTY,
                    ],
                  },
                  {
                    id: 2,
                    name: 'HLP MTG seg has new funds, then it must have a new term',
                    transactionType: 'Refinance',
                    prompts: [PROMPTS.Lawyer.DISB_LAWYER],
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
                    transactionType: 'Add/Remove borrower TCO',
                    prompts: [
                      PROMPTS.Lawyer.DRAFT_PICKUP,
                      PROMPTS.Lawyer.HLP03,
                      PROMPTS.Lawyer.INFOONLY_AND_NOPENALTY,
                    ],
                  },
                  {
                    id: 2,
                    name: 'HLP MTG seg has a new term',
                    transactionType: 'Refinance',
                    prompts: [PROMPTS.Lawyer.DISB_LAWYER],
                  },
                ],
              },
            ],
          },
          //lawyer hlp-hlp
          {
            layerCount: 3,
            id: 5,
            name: 'HLP to HLP',
            borrowerOptions: [
              //HLP TO HLP - No Borrower Changes
              {
                layerCount: 4,
                id: 1,
                name: 'No Borrower Changes',
                ifBorrowerChange: false,
                howExistingMtgMove: [
                  {
                    id: 1,
                    name: 'No New Allocation',
                    transactionType:
                      'New Registration-HLP Limit Increase with No New Allocation',
                    prompts: [
                      PROMPTS.Lawyer.DRAFT_PICKUP,
                      PROMPTS.Lawyer.HLP03,
                      PROMPTS.Lawyer.INFOONLY_AND_NOPENALTY,
                    ],
                  },
                  {
                    id: 2,
                    name: 'New RCL Only',
                    transactionType:
                      'New Registration-HLP Limit Increase with New RCL Only',
                    prompts: [
                      PROMPTS.Lawyer.DRAFT_PICKUP,
                      PROMPTS.Lawyer.HLP03,
                      PROMPTS.Lawyer.INFOONLY_AND_NOPENALTY,
                    ],
                  },
                  {
                    id: 3,
                    name: 'New Mortgage Seg',
                    transactionType:
                      'New Registration-HLP Limit Increase with New Mortgage Seg',
                    prompts: [
                      PROMPTS.Lawyer.DRAFT_PICKUP,
                      PROMPTS.Lawyer.HLP03,
                      PROMPTS.Lawyer.INFOONLY_AND_NOPENALTY,
                    ],
                  },
                ],
              },
              //HLP TO HLP - Borrower Changes
              {
                layerCount: 4,
                id: 2,
                name: 'Borrower Changes',
                ifBorrowerChange: true,
                howExistingMtgMove: [
                  {
                    id: 1,
                    name: 'Existing HLP MTG segs moving as is',
                    transactionType: 'Add/Remove borrower',
                    prompts: [
                      PROMPTS.Lawyer.AC_REQUIRED,
                      PROMPTS.Lawyer.HLP03,
                      PROMPTS.Lawyer.INFOONLY_AND_NOPENALTY,
                    ],
                  },
                  {
                    id: 2,
                    name: 'Existing HLP MTG segs not moving as is',
                    transactionType: 'Refinance',
                    prompts: [
                      PROMPTS.Lawyer.AC_REQUIRED,
                      PROMPTS.Lawyer.DISB_LAWYER,
                    ],
                  },
                ],
              },
            ],
          },
          {
            layerCount: 3,
            id: 6,
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
                    prompts: [
                      PROMPTS.Lawyer.MMD_REQUIRED,
                      PROMPTS.Lawyer.DISB_LAWYER,
                    ],
                  },
                  {
                    layerCount: 5,
                    id: 2,
                    name: 'Increase',
                    transactionType: 'Same-day Increase Port',
                    prompts: [
                      PROMPTS.Lawyer.MMD_REQUIRED,
                      PROMPTS.Lawyer.DISB_LAWYER,
                    ],
                  },
                  {
                    layerCount: 5,
                    id: 3,
                    name: 'Decrease',
                    transactionType: 'Same-day Decrease Port',
                    prompts: [
                      PROMPTS.Lawyer.MMD_REQUIRED,
                      PROMPTS.Lawyer.DISB_LAWYER,
                    ],
                  },
                ],
              },
              {
                layerCount: 4,
                id: 2,
                name: 'Purchase Prior to Sale',
                mortgageAmountAdjustment: [
                  {
                    layerCount: 5,
                    id: 1,
                    name: 'Straight',
                    transactionType: 'Purchase Prior to sale Straight Port',
                    prompts: [
                      PROMPTS.Lawyer.MMD_REQUIRED,
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.OPENFORM,
                    ],
                  },
                  {
                    layerCount: 5,
                    id: 2,
                    name: 'Increase',
                    transactionType: 'Purchase Prior to sale Increase Port',
                    prompts: [
                      PROMPTS.Lawyer.MMD_REQUIRED,
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.OPENFORM,
                    ],
                  },
                  {
                    layerCount: 5,
                    id: 3,
                    name: 'Decrease',
                    transactionType: 'Purchase Prior to sale Decrease Port',
                    prompts: [
                      PROMPTS.Lawyer.MMD_REQUIRED,
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.OPENFORM,
                    ],
                  },
                ],
              },
              {
                layerCount: 4,
                id: 3,
                name: 'Sale Prior to Purchase',
                mortgageAmountAdjustment: [
                  {
                    layerCount: 5,
                    id: 1,
                    name: 'Straight',
                    transactionType: 'Sale Prior to Purchase Straight Port',
                    prompts: [PROMPTS.Lawyer.DISB_LAWYER],
                  },
                  {
                    layerCount: 5,
                    id: 2,
                    name: 'Increase',
                    transactionType: 'Sale Prior to Purchase Increase Port',
                    prompts: [PROMPTS.Lawyer.DISB_LAWYER],
                  },
                  {
                    layerCount: 5,
                    id: 3,
                    name: 'Decrease',
                    transactionType: 'Sale Prior to Purchase Decrease Port',
                    prompts: [PROMPTS.Lawyer.DISB_LAWYER],
                  },
                ],
              },
            ],
          },
          {
            layerCount: 3,
            id: 7,
            name: 'Port to Owned',
            portTypes: [
              {
                layerCount: 4,
                id: 1,
                name: 'Port to current Owned Property has to be a Same-day port',
                mortgageAmountAdjustment: [
                  {
                    layerCount: 5,
                    id: 1,
                    name: 'Straight',
                    transactionType: 'Port to Owned Same-day Straight Port',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.MMD_REQUIRED,
                    ],
                  },
                  {
                    layerCount: 5,
                    id: 2,
                    name: 'Increase',
                    transactionType: 'Port to Owned Same-day Increase Port',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.MMD_REQUIRED,
                    ],
                  },
                  {
                    layerCount: 5,
                    id: 3,
                    name: 'Decrease',
                    transactionType: 'Port to Owned Same-day Decrease Port',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.MMD_REQUIRED,
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      //FCT Homeline
      {
        layerCount: 2,
        id: 2,
        name: 'FCT',
        fileOptions: [
          {
            layerCount: 3,
            id: 1,
            name: 'Switch-in from OFI',
            transactionType: 'Switch-in from OFI',
          },
          {
            layerCount: 3,
            id: 3,
            name: 'No Transferred',
            transactionType: 'Refinance',
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
                    transactionType: 'Add/Remove borrower TCO',
                    prompts: [PROMPTS.FCT.ADD_REMOVE],
                  },
                  {
                    id: 2,
                    name: 'HLP MTG seg has a new term',
                    transactionType: 'Refinance',
                  },
                ],
              },
            ],
          },
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
                    name: 'No New Allocation',
                    transactionType:
                      'New Registration-HLP Limit Increase with No New Allocation',
                  },
                  {
                    id: 2,
                    name: 'New RCL Only',
                    transactionType:
                      'New Registration-HLP Limit Increase with New RCL Only',
                  },
                  {
                    id: 3,
                    name: 'New Mortgage Seg',
                    transactionType:
                      'New Registration-HLP Limit Increase with New Mortgage Seg',
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
                    name: 'Existing HLP MTG segs moving as is',
                    transactionType: 'Add/Remove borrower',
                  },
                  {
                    id: 2,
                    name: 'Existing HLP MTG segs not moving as is',
                    transactionType: 'Refinance',
                  },
                ],
              },
            ],
          },
          // FCT Port to Current Owned
          {
            layerCount: 3,
            id: 5,
            name: 'Port to Owned',
            portTypes: [
              {
                layerCount: 4,
                id: 1,
                name: 'Port to current Owned Property has to be a Same-day port',
                mortgageAmountAdjustment: [
                  {
                    layerCount: 5,
                    id: 1,
                    name: 'Straight',
                    transactionType: 'Port to Owned Same-day Straight Port',
                  },
                  {
                    layerCount: 5,
                    id: 2,
                    name: 'Increase',
                    transactionType: 'Port to Owned Same-day Increase Port',
                  },
                  {
                    layerCount: 5,
                    id: 3,
                    name: 'Decrease',
                    transactionType: 'Port to Owned Same-day Decrease Port',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        layerCount: 2,
        id: 3,
        name: 'Internal',
        howExistingMtgMove: [
          {
            id: 1,
            name: 'No New Allocation',
            transactionType:
              'Within Existing Reg-HLP Limit Increase with No New Allocation',
          },
          {
            id: 2,
            name: 'New RCL Only',
            transactionType:
              'Within Existing Reg-HLP Limit Increase with New RCL Only',
          },
          {
            id: 3,
            name: 'New Mortgage Seg',
            transactionType:
              'Within Existing Reg-HLP Limit Increase with New Mortgage Seg',
          },
        ],
      },
    ],
  },
  //Linx Residential
  {
    layerCount: 1,
    id: 2,
    name: 'Linx-Residential',
    currentSystem: 'Linx',
    homelineOrResidential: 'Residential',
    registerParties: [
      //Lawyer
      {
        layerCount: 2,
        id: 1,
        name: 'Lawyer',
        fileOptions: [
          {
            layerCount: 3,
            id: 1,
            name: 'Purchase',
            purchaseTypes: [
              {
                id: 1,
                name: 'Regular Purchase',
                transactionType: 'Regular Purchase',
              },
              { id: 2, name: 'FTHBI', transactionType: 'FTHBI' },
              {
                id: 3,
                name: 'Purchase Plus',
                transactionType: 'Purchase Plus',
              },
            ],
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
            name: 'No Transferred',
            transactionType: 'Refinance',
            prompts: [PROMPTS.Lawyer.DISB_LAWYER],
          },
          {
            layerCount: 3,
            id: 4,
            name: 'Res to Res',
            borrowerOptions: [
              {
                layerCount: 4,
                id: 1,
                name: 'No Borrower Changes',
                ifBorrowerChange: false,
                howExistingMtgMove: [
                  {
                    id: 1,
                    name: 'New MTG has new funds & remaining term',
                    transactionType: 'Refinance Add-on',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.NO_PENALTY,
                    ],
                  },
                  {
                    id: 2,
                    name: 'New MTG has new funds & new term',
                    transactionType: 'Refinance',
                    prompts: [PROMPTS.Lawyer.DISB_LAWYER],
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
                    name: 'Existing MTG is moving as is',
                    transactionType: 'Add/Remove borrower',
                    prompts: [PROMPTS.Lawyer.INFOONLY_AND_NOPENALTY],
                  },
                  {
                    id: 2,
                    name: 'New MTG has new funds & remaining term',
                    transactionType: 'Refinance Add-on',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.NO_PENALTY,
                    ],
                  },
                  {
                    id: 3,
                    name: 'New MTG has new funds & new term',
                    transactionType: 'Refinance',
                    prompts: [PROMPTS.Lawyer.DISB_LAWYER],
                  },
                ],
              },
            ],
          },
          {
            layerCount: 3,
            id: 5,
            name: 'HLP to Res',
            borrowerOptions: [
              {
                layerCount: 4,
                id: 1,
                name: 'No Borrower Changes',
                ifBorrowerChange: false,
                howExistingMtgMove: [
                  {
                    id: 1,
                    name: 'New MTG has new funds & remaining term',
                    transactionType: 'Refinance Add-on',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.NO_PENALTY,
                    ],
                  },
                  {
                    id: 2,
                    name: 'New MTG has new funds & new term',
                    transactionType: 'Refinance',
                    prompts: [PROMPTS.Lawyer.DISB_LAWYER],
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
                    name: 'New MTG has new funds & remaining term',
                    transactionType: 'Refinance Add-on',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.NO_PENALTY,
                    ],
                  },
                  {
                    id: 2,
                    name: 'New MTG has new funds & new term',
                    transactionType: 'Refinance',
                    prompts: [PROMPTS.Lawyer.DISB_LAWYER],
                  },
                ],
              },
            ],
          },
          {
            layerCount: 3,
            id: 6,
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
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.MMD_REQUIRED,
                    ],
                  },
                  {
                    layerCount: 5,
                    id: 2,
                    name: 'Increase',
                    transactionType: 'Same-day Increase Port',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.MMD_REQUIRED,
                    ],
                  },
                  {
                    layerCount: 5,
                    id: 3,
                    name: 'Decrease',
                    transactionType: 'Same-day Decrease Port',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.MMD_REQUIRED,
                    ],
                  },
                ],
              },
              {
                layerCount: 4,
                id: 2,
                name: 'Purchase Prior to Sale',
                mortgageAmountAdjustment: [
                  {
                    layerCount: 5,
                    id: 1,
                    name: 'Straight',
                    transactionType: 'Purchase Prior to sale Straight Port',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.MMD_REQUIRED,
                      PROMPTS.Lawyer.OPENFORM,
                    ],
                  },
                  {
                    layerCount: 5,
                    id: 2,
                    name: 'Increase',
                    transactionType: 'Purchase Prior to sale Increase Port',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.MMD_REQUIRED,
                      PROMPTS.Lawyer.OPENFORM,
                    ],
                  },
                  {
                    layerCount: 5,
                    id: 3,
                    name: 'Decrease',
                    transactionType: 'Purchase Prior to sale Decrease Port',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.MMD_REQUIRED,
                      PROMPTS.Lawyer.OPENFORM,
                    ],
                  },
                ],
              },
              {
                layerCount: 4,
                id: 3,
                name: 'Sale Prior to Purchase',
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
          {
            layerCount: 3,
            id: 7,
            name: 'Port to Owned',
            portTypes: [
              {
                layerCount: 4,
                id: 1,
                name: 'Port to current Owned Property has to be a Same-day port',
                mortgageAmountAdjustment: [
                  {
                    layerCount: 5,
                    id: 1,
                    name: 'Straight',
                    transactionType: 'Same-day Straight Port',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.MMD_REQUIRED,
                    ],
                  },
                  {
                    layerCount: 5,
                    id: 2,
                    name: 'Increase',
                    transactionType: 'Same-day Increase Port',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.MMD_REQUIRED,
                    ],
                  },
                  {
                    layerCount: 5,
                    id: 3,
                    name: 'Decrease',
                    transactionType: 'Same-day Decrease Port',
                    prompts: [
                      PROMPTS.Lawyer.DISB_LAWYER,
                      PROMPTS.Lawyer.MMD_REQUIRED,
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      //FCT
      {
        layerCount: 2,
        id: 2,
        name: 'FCT',
        fileOptions: [
          {
            layerCount: 3,
            id: 1,
            name: 'Switch-in from OFI',
            transactionType: 'Switch-in from OFI',
          },

          {
            layerCount: 3,
            id: 2,
            name: 'No Transferred',
            transactionType: 'Refinance',
          },
          {
            layerCount: 3,
            id: 3,
            name: 'Res to Res',
            borrowerOptions: [
              {
                layerCount: 4,
                id: 1,
                name: 'No Borrower Changes',
                ifBorrowerChange: false,
                howExistingMtgMove: [
                  {
                    id: 1,
                    name: 'New MTG has new funds & remaining term',
                    transactionType: 'Refinance Add-on',
                  },
                  {
                    id: 2,
                    name: 'New MTG has new funds & new term',
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
                    name: 'Existing MTG is moving as is',
                    transactionType: 'Add/Remove borrower',
                    prompts: [PROMPTS.FCT.ADD_REMOVE],
                  },
                  {
                    id: 2,
                    name: 'New MTG has new funds & remaining term',
                    transactionType: 'Refinance Add-on',
                  },
                  {
                    id: 3,
                    name: 'New MTG has new funds & new term',
                    transactionType: 'Refinance',
                  },
                ],
              },
            ],
          },
          {
            layerCount: 3,
            id: 4,
            name: 'HLP to Res',
            borrowerOptions: [
              {
                layerCount: 4,
                id: 1,
                name: 'No Borrower Changes',
                ifBorrowerChange: false,
                howExistingMtgMove: [
                  {
                    id: 1,
                    name: 'New MTG has new funds & remaining term',
                    transactionType: 'Refinance Add-on',
                  },
                  {
                    id: 2,
                    name: 'New MTG has new funds & new term',
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
                    name: 'New MTG has new funds & remaining term',
                    transactionType: 'Refinance Add-on',
                  },
                  {
                    id: 2,
                    name: 'New MTG has new funds & new term',
                    transactionType: 'Refinance',
                  },
                ],
              },
            ],
          },
          // FCT Port to Current Owned
          {
            layerCount: 3,
            id: 6,
            name: 'Port to Owned',
            portTypes: [
              {
                layerCount: 4,
                id: 1,
                name: 'Port to current Owned Property has to be a Same-day port',
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
            ],
          },
        ],
      },
    ],
  },
  //Casper-Homeline
  {
    layerCount: 1,
    id: 3,
    name: 'Casper-Homeline',
    currentSystem: 'Casper',
    homelineOrResidential: 'Homeline',
    registerParties: [],
  },
  //Casper-Residential
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
