interface FundingNote {
  [key: string]: string;
}

interface FundingNotes {
  [key: string]: FundingNote | undefined;
}

const COBREQUIRED = `ATTN MIP: COB Required`;

const FTHBI = `ATTN MIP:
FTHB - SEM Incentive
Please add the code HC in the LPDC ( Loan Plan Detail)  box under the  “MGD screen`;

const PURCHASE_PLUS = `Attention Advances:

Purchase Plus Improvements.  Holdback: $`;

const SWITCHINPROMO = `ATTN MIP: COB Required\nSwitch Promo\nTransfer Promo (x)`;

const FCTTCO = `Attn Funding/MIP: TCO Application\n\nTCO of Existing  mtg#XXXXXXXX\n\n(   ) Cash Back Transfer: $\n\nTransfer Promo (x)`;
const LAWYERTCO = `Attn Funding/MIP: TCO Application\n\nTCO of Existing  mtg#XXXXXXXX\n\n(   ) Cash Back Transfer: $`;

const REFI_ADDON = `Attn: Funding

Refinance – Add-On
No penalty to be charged

Attn: MIP: Add-On of ext mtg #
Ext COF:
(   ) Cash Back Transfer: $`;

const HOLDING_COMPANY = `ATTN MIP: Holding Company
Upon Activation, please change SRF details
Company Name:
Company SRF:

Co-Borrower Name:
Co-Borrower SRF:

Co-Borrower Name:
Co-Borrower SRF:
`;

const ADD_REMOVE = {
  FCTADDREMOVETCO: `Attn: Funding: Add/Remove Borrower 
  (Transfer from RES to HLP)
  *****DO NOT ADVANCE FUNDS*****
  DOC'S REQUIRED
  Please ensure that P&I, rate, term and payment date on the New Mortgage matches the old Mortgage 
  **Do not post ADJD for insurance**
  **Use reason Code 'N' to close mortgage**
  Please pay & close existing Mortgage#
  
  Transfer Promo ( x )
  
  Attn MIP: Add/Remove Borrwer
  
  Please Follow the MIP TCO Process for this product Type`,

  LAWYERADDREMOVETCO: `Attn: Funding: Add/Remove Borrower 
(Transfer from RES to HLP)
*****DO NOT ADVANCE FUNDS*****
DOC'S REQUIRED
Please ensure that P&I, rate, term and payment date on the New Mortgage matches the old Mortgage 
**Do not post ADJD for insurance**
**Use reason Code 'N' to close mortgage**
Please pay & close existing Mortgage#

Attn MIP: Add/Remove Borrwer

Please Follow the MIP TCO Process for this product Type`,

  ADDREMOVE: `Attn Funding : Add/Remove Borrower
*****DO NOT ADVANCE FUNDS*****
DOC'S REQUIRED

Please ensure that P&I, rate, term and payment date on the New Mortgage matches the old HLP/ MORTGAGE

**Do not post ADJD for insurance**
**Use reason Code 'N' to close mortgage**
Please pay & close existing HLP# or Mortgage#

Attn MIP: Add/Remove Borrwer`,
};

const HOMELINEINCREASE = {
  HLP_INC_NEWREG_NOALLOWCATION: `HLP limit increase – New Reg Limit
  
  New HLP Limit $
  RCL/Mortgage Allocation   (  )
  Special instructions:`,

  HLP_INC_NEWREG_RCLONLY: `HLP limit increase – New Reg Limit
  
  New HLP Limit $
  RCL/Mortgage Allocation   ( x )
  Special instructions:`,

  HLP_INC_NEWREG_NEWMTG: `HLP limit increase – New Reg Limit
  
  New HLP Limit $
  RCL/Mortgage Allocation   ( x )
  Special instructions:
  
  Attn MIP: COB required for the new mtg`,

  HLP_INC_WITHIN_NOALLOWCATION: `HLP limit increase – Within Reg Limit
  
  Existing Registration Amount $
  New HLP Limit $
  RCL/Mortgage Allocation    (  )
  Special instructions:`,
  HLP_INC_WITHIN_NEWRCLONLY: `HLP limit increase – Within Reg Limit
  
  Existing Registration Amount $
  New HLP Limit $
  RCL/Mortgage Allocation    ( x )
  Special instructions:`,

  HLP_INC_WITHIN_NEWMTG: `HLP limit increase – Within Reg Limit
  
  Existing Registration Amount $
  New HLP Limit $
  RCL/Mortgage Allocation    ( x )
  Special instructions:
  
  Attn MIP: COB required for the new mtg`,
};

const PORT = {
  SAMEDAY_STRAIGHT: `Attn Funding/MIP: Port of ext mtg #
Attn OPEN Q: POST BDP $
  
( x ) STRAIGHT  / (   ) INCREASE  / (   ) DECREASE
Ext COF:
(   ) Cash Back Transfer:  $
( x ) SAMEDAY
(   ) SALE PRIOR TO PURCHASE
(   ) PURCHASE PRIOR TO SALE
  
Prepayment Charge $`,

  SAMEDAY_INCREASE: `Attn Funding/MIP: Port of ext mtg #
Attn OPEN Q: POST BDP $

(   ) STRAIGHT  / ( x ) INCREASE  / (   ) DECREASE
Ext COF:
(   ) Cash Back Transfer:  $
( x ) SAMEDAY
(   ) SALE PRIOR TO PURCHASE
(   ) PURCHASE PRIOR TO SALE

Prepayment Charge $`,

  SAMEDAY_DECREASE: `Attn Funding/MIP: Port of ext mtg #
Attn OPEN Q: POST BDP $

(   ) STRAIGHT  / (   ) INCREASE  / ( x ) DECREASE
Ext COF:
(   ) Cash Back Transfer:  $
( x ) SAMEDAY
(   ) SALE PRIOR TO PURCHASE
(   ) PURCHASE PRIOR TO SALE

Prepayment Charge $`,

  PPS_STRAIGHT: `Attn Funding/MIP: Port of ext mtg #
Attn OPEN Q: POST BDP $

( x ) STRAIGHT  / (   ) INCREASE  / (   ) DECREASE
Ext COF:
(   ) Cash Back Transfer:  $
(   ) SAMEDAY
(   ) SALE PRIOR TO PURCHASE
( x ) PURCHASE PRIOR TO SALE

Prepayment Charge $`,

  PPS_INCREASE: `Attn Funding/MIP: Port of ext mtg #
Attn OPEN Q: POST BDP $

(   ) STRAIGHT  / ( x ) INCREASE  / (   ) DECREASE
Ext COF:
(   ) Cash Back Transfer:  $
(   ) SAMEDAY
(   ) SALE PRIOR TO PURCHASE
( x ) PURCHASE PRIOR TO SALE

Prepayment Charge $`,

  PPS_DECREASE: `Attn Funding/MIP: Port of ext mtg #
Attn OPEN Q: POST BDP $

(   ) STRAIGHT  / (   ) INCREASE  / ( x ) DECREASE
Ext COF:
(   ) Cash Back Transfer:  $
(   ) SAMEDAY
(   ) SALE PRIOR TO PURCHASE
( x ) PURCHASE PRIOR TO SALE

Prepayment Charge $`,

  SPP_STRAIGHT: `Attn Funding/MIP: Port of ext mtg #
Attn OPEN Q: POST BDP $

( x ) STRAIGHT  / (   ) INCREASE  / (   ) DECREASE
Ext COF:
(   ) Cash Back Transfer:  $
(   ) SAMEDAY
( x ) SALE PRIOR TO PURCHASE
(   ) PURCHASE PRIOR TO SALE

Prepayment Charge $
Please refund penalty on existing mortgage`,

  SPP_INCREASE: `Attn Funding/MIP: Port of ext mtg #
Attn OPEN Q: POST BDP $

(   ) STRAIGHT  / ( x ) INCREASE  / (   ) DECREASE
Ext COF:
(   ) Cash Back Transfer:  $
(   ) SAMEDAY
( x ) SALE PRIOR TO PURCHASE
(   ) PURCHASE PRIOR TO SALE

Prepayment Charge $
Please refund penalty on existing mortgage`,

  SPP_DECREASE: `Attn Funding/MIP: Port of ext mtg #
Attn OPEN Q: POST BDP $

(   ) STRAIGHT  / (   ) INCREASE  / ( x ) DECREASE
Ext COF:
(   ) Cash Back Transfer:  $
(   ) SAMEDAY
( x ) SALE PRIOR TO PURCHASE
(   ) PURCHASE PRIOR TO SALE

Prepayment Charge $
Please refund penalty on existing mortgage`,

  PTW_STRAIGHT: `Attn Funding/MIP:
( ) FREE AND CLEAR
( ) SWITCH
( ) EXISTING RBC MTG#
Existing Sale Property Mtg#
Will be paid by Lawyer
(x) STRAIGHT / ( ) INCREASE / ( ) DECREASE
( ) SAMEDAY
Ext COF:`,
  PTW_INCREASE: `Attn Funding/MIP:
( ) FREE AND CLEAR
( ) SWITCH
( ) EXISTING RBC MTG#
Existing Sale Property Mtg#
Will be paid by Lawyer
( ) STRAIGHT / (x) INCREASE / ( ) DECREASE
( ) SAMEDAY
Ext COF:`,
  PTW_DECREASE: `Attn Funding/MIP:
( ) FREE AND CLEAR
( ) SWITCH
( ) EXISTING RBC MTG#
Existing Sale Property Mtg#
Will be paid by Lawyer
( ) STRAIGHT / ( ) INCREASE / (x) DECREASE
( ) SAMEDAY
Ext COF:`,
};

const FUNDINGNOTES: FundingNotes = {
  FCT: {
    Refinance: COBREQUIRED,
    'Switch-in from OFI': SWITCHINPROMO,
    TCO: FCTTCO,
    'Refinance Add-on': REFI_ADDON,
    'Add/Remove borrower': ADD_REMOVE.ADDREMOVE,
    'Add/Remove borrower TCO': ADD_REMOVE.FCTADDREMOVETCO,
    'New Registration-HLP Limit Increase with No New Allocation':
      HOMELINEINCREASE.HLP_INC_NEWREG_NOALLOWCATION,
    'New Registration-HLP Limit Increase with New RCL Only':
      HOMELINEINCREASE.HLP_INC_NEWREG_RCLONLY,
    'New Registration-HLP Limit Increase with New Mortgage Seg':
      HOMELINEINCREASE.HLP_INC_NEWREG_NEWMTG,
    'Within Existing Reg-HLP Limit Increase with No New Allocation':
      HOMELINEINCREASE.HLP_INC_WITHIN_NOALLOWCATION,
    'Within Existing Reg-HLP Limit Increase with New RCL Only':
      HOMELINEINCREASE.HLP_INC_WITHIN_NEWRCLONLY,
    'Within Existing Reg-HLP Limit Increase with New Mortgage Seg':
      HOMELINEINCREASE.HLP_INC_WITHIN_NEWMTG,
    'Purchase Prior to sale Straight Port': PORT.PPS_STRAIGHT,
    'Purchase Prior to sale Increase Port': PORT.PPS_INCREASE,
    'Purchase Prior to sale Decrease Port': PORT.PPS_DECREASE,
    'Sale Prior to Purchase Straight Port': PORT.SPP_STRAIGHT,
    'Sale Prior to Purchase Increase Port': PORT.SPP_INCREASE,
    'Sale Prior to Purchase Decrease Port': PORT.SPP_DECREASE,
    'Port to Owned Same-day Straight Port': PORT.PTW_STRAIGHT,
    'Port to Owned Same-day Increase Port': PORT.PTW_INCREASE,
    'Port to Owned Same-day Decrease Port': PORT.PTW_DECREASE,
  },
  Lawyer: {
    'Regular Purchase': COBREQUIRED,
    FTHBI: FTHBI,
    'Purchase Plus': PURCHASE_PLUS,
    Refinance: COBREQUIRED,
    TCO: LAWYERTCO,
    'Switch-in from OFI': COBREQUIRED,
    'Refinance Add-on': REFI_ADDON,
    'Add/Remove borrower': ADD_REMOVE.ADDREMOVE,
    'Add/Remove borrower TCO': ADD_REMOVE.LAWYERADDREMOVETCO,
    'New Registration-HLP Limit Increase with No New Allocation':
      HOMELINEINCREASE.HLP_INC_NEWREG_NOALLOWCATION,
    'New Registration-HLP Limit Increase with New RCL Only':
      HOMELINEINCREASE.HLP_INC_NEWREG_RCLONLY,
    'New Registration-HLP Limit Increase with New Mortgage Seg':
      HOMELINEINCREASE.HLP_INC_NEWREG_NEWMTG,
    'Within Existing Reg-HLP Limit Increase with No New Allocation':
      HOMELINEINCREASE.HLP_INC_WITHIN_NOALLOWCATION,
    'Within Existing Reg-HLP Limit Increase with New RCL Only':
      HOMELINEINCREASE.HLP_INC_WITHIN_NEWRCLONLY,
    'Within Existing Reg-HLP Limit Increase with New Mortgage Seg':
      HOMELINEINCREASE.HLP_INC_WITHIN_NEWMTG,
    'Same-day Straight Port': PORT.SAMEDAY_STRAIGHT,
    'Same-day Increase Port': PORT.SAMEDAY_INCREASE,
    'Same-day Decrease Port': PORT.SAMEDAY_DECREASE,
    'Purchase Prior to sale Straight Port': PORT.PPS_STRAIGHT,
    'Purchase Prior to sale Increase Port': PORT.PPS_INCREASE,
    'Purchase Prior to sale Decrease Port': PORT.PPS_DECREASE,
    'Sale Prior to Purchase Straight Port': PORT.SPP_STRAIGHT,
    'Sale Prior to Purchase Increase Port': PORT.SPP_INCREASE,
    'Sale Prior to Purchase Decrease Port': PORT.SPP_DECREASE,
    'Port to Owned Same-day Straight Port': PORT.PTW_STRAIGHT,
    'Port to Owned Same-day Increase Port': PORT.PTW_INCREASE,
    'Port to Owned Same-day Decrease Port': PORT.PTW_DECREASE,
  },
};

export default FUNDINGNOTES;
