
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: string;
}
