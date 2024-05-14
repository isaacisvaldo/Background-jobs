import { Request, Response } from "express";
import Queue from '../libs/Queue'
export class UserController {
  async store(req: Request, res: Response): Promise<unknown> {
    try {
     const {name, email} = req.body;
     const user ={
       name,
       email
     }
     // add fila
      Queue.add({user})
      return res
        .status(200)
        .json({ status: 200, message: "User created !", data: req.body });
    } catch (error) {
      return res.status(200).json({ status: 500, message: error, data: null });
    }
  }
}
