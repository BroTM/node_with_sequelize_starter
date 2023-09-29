import { NextFunction, Request, RequestHandler, Response } from "express";
import userRepository from "../../repositories/users/users.repository";
import User from "../../models/users.model";

// export default class UserController {
//     findAll(arg0: string, findAll: any) {
//         throw new Error("Method not implemented.");
//     }
//     // [x: string]: RequestHandler<{}, any, any, ParsedQs, Record<string, any>>;

//     // async createOne (req: Request<any, any, any, any, Record<string, any>>, res: Response, next: NextFunction) {
    
//     //     await userRepository.add(new User())
//     //     .then((result: any) => {
//     // console.log('result', result);
//     //     })
//     //     .catch((error) => {
//     // console.log('error', error);
//     //     })
//     // };
// }

export function getOne (req: Request, res: Response, next: any) {
    // Customer.getOne(req.params?.id!)
    // .then((data: any )=> {
    //   res.json({
    //     'status': "success",
    //     'data': data.data
    //   });
    // })
    // .catch((err: any) => {
    //   console.log(`Error ${err}`)
    //   res.json({
    //     status: "fail",
    //     data: err,
    //     message: err == 'NO_TRANSACTION'? message.generalmessage.no_transaction : message.other.something_wrong
    //   })
    // });
  }
