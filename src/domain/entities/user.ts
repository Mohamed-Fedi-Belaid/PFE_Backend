export type UserModel = {
    id: string ;
    name: string;
    email: string;
    password: string;
  }
  
  export type UserParams = Omit<UserModel, 'id'>