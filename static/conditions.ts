interface ConditionNote {
  [key: string]: string;
}

interface ConditionNotes {
  [key: string]: ConditionNote;
}

const HOMELINEREGULAR = `For inquiries prior to closing, please contact HECC at 1-844-418-9436. Please use Quotation # as reference.\n\nIf funds are not required, please complete the Request for Funds with a $0 amount, and send along with the Notice of Registration and Signed Cost of Borrowing documents, in order for RBC to activate the Mortgage.\n\nPlease have the enclosed HLP Agreement Signed and returned to us along with your final report on title/security.`;

const RESIDENTIALREGULAR = `For inquiries prior to closing, please contact HECC at 1-844-418-9436. Please use Quotation #  as reference.\n\nIf funds are not required, please complete the Request for Funds with a $0 amount, and send along with the Notice of Registration and Signed Cost of Borrowing documents, in order for RBC to activate the Mortgage.`;

const FTHBI = `Your client is participating in Canada’s First Time Home Buyer’s Incentive (FTHBI) Program. You will be required to complete a mortgage on behalf of (CMHC / Genworth Financial Canada / Canada Guaranty) _______ and in order to receive instructions you must contact FNF immediately at FTHBI@FNF.ca   or 1-855-844-4535 with the FTHBI identification number ____________ and approved amount ____________. Failure to contact FNF may result in funds not being available on closing.`;

const RES_TO_RES_BORROWER_CHANGE = `This is a refinance of an existing mortgage to add (name of client) ________________________ and/or remove (name of client) ________________________ as a mortgagor. The existing mortgage will be paid out internally and discharged by Royal Bank of Canada. Please provide us with a notice of registration and signed Cost of Borrowing documents as confirmation that the mortgage has been successfully registered in accordance with our instructions so that we can discharge the existing mortgage.`;

const CONDITIONS: ConditionNotes = {
  Homeline: {
    'Regular Purchase': HOMELINEREGULAR,
    FTHBI: HOMELINEREGULAR + '\n\n' + FTHBI,
    'Purchase Plus': HOMELINEREGULAR,
    'Switch-in from OFI': HOMELINEREGULAR,
    TCO: HOMELINEREGULAR,
    Refinance: HOMELINEREGULAR,
    'Refinance Add-on': HOMELINEREGULAR,
    'Add/Remove borrower TCO': HOMELINEREGULAR,
    'Add/Remove borrower': HOMELINEREGULAR,
    'HLP Limit Increase with No New Allocation': HOMELINEREGULAR,
    'HLP Limit Increase with New RCL Only': HOMELINEREGULAR,
    'HLP Limit Increase with New Mortgage Seg': HOMELINEREGULAR,
    'Same-day Straight Port': HOMELINEREGULAR,
    'Same-day Increase Port': HOMELINEREGULAR,
    'Same-day Decrease Port': HOMELINEREGULAR,
    'Purchase Prior to sale Straight Port': HOMELINEREGULAR,
    'Purchase Prior to sale Increase Port': HOMELINEREGULAR,
    'Purchase Prior to sale Decrease Port': HOMELINEREGULAR,
    'Sale Prior to Purchase Straight Port': HOMELINEREGULAR,
    'Sale Prior to Purchase Increase Port': HOMELINEREGULAR,
    'Sale Prior to Purchase Decrease Port': HOMELINEREGULAR,
    'Port to Owned Same-day Straight Port': HOMELINEREGULAR,
    'Port to Owned Same-day Increase Port': HOMELINEREGULAR,
    'Port to Owned Same-day Decrease Port': HOMELINEREGULAR,
    'Within Existing Reg-HLP Limit Increase with No New Allocation':
      HOMELINEREGULAR,
    'Within Existing Reg-HLP Limit Increase with New RCL Only': HOMELINEREGULAR,

    'Within Existing Reg-HLP Limit Increase with New Mortgage Seg':
      HOMELINEREGULAR,

    'New Registration-HLP Limit Increase with No New Allocation':
      HOMELINEREGULAR,

    'New Registration-HLP Limit Increase with New RCL Only': HOMELINEREGULAR,
    'New Registration-HLP Limit Increase with New Mortgage Seg':
      HOMELINEREGULAR,
  },
  Residential: {
    'Regular Purchase': RESIDENTIALREGULAR,
    'Switch-in from OFI': RESIDENTIALREGULAR,
    Refinance: RESIDENTIALREGULAR,
    FTHBI: RESIDENTIALREGULAR + '\n\n' + FTHBI,
    'Refinance Add-on': RESIDENTIALREGULAR,
    'Add/Remove borrower':
      RES_TO_RES_BORROWER_CHANGE + '\n\n' + RESIDENTIALREGULAR,
    'HLP Limit Increase with No New Allocation': RESIDENTIALREGULAR,
    'HLP Limit Increase with New RCL Only': RESIDENTIALREGULAR,
    'HLP Limit Increase with New Mortgage Seg': RESIDENTIALREGULAR,
    'Same-day Straight Port': RESIDENTIALREGULAR,
    'Same-day Increase Port': RESIDENTIALREGULAR,
    'Same-day Decrease Port': RESIDENTIALREGULAR,
    'Purchase Prior to sale Straight Port': RESIDENTIALREGULAR,
    'Purchase Prior to sale Increase Port': RESIDENTIALREGULAR,
    'Purchase Prior to sale Decrease Port': RESIDENTIALREGULAR,
    'Sale Prior to Purchase Straight Port': RESIDENTIALREGULAR,
    'Sale Prior to Purchase Increase Port': RESIDENTIALREGULAR,
    'Sale Prior to Purchase Decrease Port': RESIDENTIALREGULAR,
    'Port to Owned Same-day Straight Port': RESIDENTIALREGULAR,
    'Port to Owned Same-day Increase Port': RESIDENTIALREGULAR,
    'Port to Owned Same-day Decrease Port': RESIDENTIALREGULAR,
    'Within Existing Reg-HLP Limit Increase with No New Allocation':
      RESIDENTIALREGULAR,
    'Within Existing Reg-HLP Limit Increase with New RCL Only':
      RESIDENTIALREGULAR,

    'Within Existing Reg-HLP Limit Increase with New Mortgage Seg':
      RESIDENTIALREGULAR,

    'New Registration-HLP Limit Increase with No New Allocation':
      RESIDENTIALREGULAR,

    'New Registration-HLP Limit Increase with New RCL Only': RESIDENTIALREGULAR,
    'New Registration-HLP Limit Increase with New Mortgage Seg':
      RESIDENTIALREGULAR,
  },
};

export default CONDITIONS;
