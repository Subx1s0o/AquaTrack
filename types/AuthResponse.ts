import { User } from './user';

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  sessionId: string;
}
