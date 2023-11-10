interface BusinessNotes {
  [key: string]: string;
}

const BUSINESSNOTES: BusinessNotes = {
  'In Order': `File review complete, docs in order. Files sent for registration.`,
  'OOO Review Complete': `File review complete, docs in order. File is on pending:`,
  'OOO Review Incomplete': `File review incomplete, pending:`,
};

export default BUSINESSNOTES;
