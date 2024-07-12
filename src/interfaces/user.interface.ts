export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  address: string;
  phoneNo: string;
  dob: Date;
}