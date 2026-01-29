export type SupabaseCategory = {
  id: string;
  icon: string;
  surface_class: string;
  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  surfaceClass: string;
  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
  transactions?: number;
  amount?: number;
};
