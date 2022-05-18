export interface User {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  },
  email: string;
  gender: 'Female' | 'Male';
  role: string;
}

export interface SuccessResponse {
  total: number;
  page: number;
  count: number;
  numPages: number;
  entries: User[];
}
