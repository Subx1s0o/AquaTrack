export interface User {
  id: string;
  email: string;
  name: string;
  avatarURL?: string;
  weight: number;
  activeTime: number;
  gender: 'female' | 'male' | 'other';
  dailyNorm: number;
  createdAt: string;
  updatedAt: string;
}
