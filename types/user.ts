export interface User {
  id: string;
  email: string;
  name: string;
  avatarURL?: string;
  weight: number;
  activeTime: number;
  gender: 'woman' | 'man' | 'other';
  dailyNorm: number;
  createdAt: string;
  updatedAt: string;
}
