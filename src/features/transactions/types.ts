export type TransactionStatus = 'completed' | 'pending' | 'failed';

export type Transaction = {
  id: string;
  name: string;
  category: string;
  categoryIcon: string;
  categorySurfaceClass: string;
  date: string;
  amount: number;
  status: TransactionStatus;
};
