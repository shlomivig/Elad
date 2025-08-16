import { User } from "Entities/Users";

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}
