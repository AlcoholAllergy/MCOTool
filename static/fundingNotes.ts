interface FundingNote {
  [key: string]: string;
}

interface FundingNotes {
  [key: string]: FundingNote | undefined;
}

const FUNDINGNOTES: FundingNotes = {
  FCT: {
    'Switch-in from OFI': `ATTN MIP: COB Required
Switch Promo
Transfer Promo (x)`,
  },
  Lawyer: {
    'Switch-in from OFI': `ATTN MIP: COB Required`,
  },
};

export default FUNDINGNOTES;
