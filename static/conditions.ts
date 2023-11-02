interface ConditionNote {
  [key: string]: string;
}

interface ConditionNotes {
  [key: string]: ConditionNote | undefined;
}

const HOMELINEREGULAR = `For inquiries prior to closing, please contact HECC at 1-844-418-9436. Please use Quotation # as reference.\n\nIf funds are not required, please complete the Request for Funds with a $0 amount, and send along with the Notice of Registration and Signed Cost of Borrowing documents, in order for RBC to activate the Mortgage.\n\nPlease have the enclosed HLP Agreement Signed and returned to us along with your final report on title/security.`;

const RESIDENTIALREGULAR = `For inquiries prior to closing, please contact HECC at 1-844-418-9436. Please use Quotation #  as reference.\n\nIf funds are not required, please complete the Request for Funds with a $0 amount, and send along with the Notice of Registration and Signed Cost of Borrowing documents, in order for RBC to activate the Mortgage.`;

const CONDITIONS: ConditionNotes = {
  Homeline: {
    Purchase: HOMELINEREGULAR,
  },
  Residential: {
    Purchase: RESIDENTIALREGULAR,
  },
};

export default CONDITIONS;
