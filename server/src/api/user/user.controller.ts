import { Request, Response, NextFunction } from 'express';

let User = require('./user.model');


export let userController = {
    get: (req: Request, res: Response, next: NextFunction) => {
        User.find({}, ( err: string, users: Object) => {
            res.status(200).send(users);
        });
    },
    getById: (req: Request, res: Response, next: NextFunction) => {
        debugger;
         User.find({id: parseInt(req.params.id)}, ( err: string, user: Array<any>) => {
            if(user.length <= 0) {
                res.status(404).send('There are not user with this id');
            } else {
                res.json(user);
            }
        });
    },
    post: (req: Request, res: Response, next: NextFunction) => {


        // res.json({ok: true});
    },
    put: (req: Request, res: Response, next: NextFunction) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { email: 'test@mail.bg' }, (err: string, user: any) => {
            console.log('user',user);
                        if(err){
                            res.send(err);
                        }
                        res.json(user);
                    });




    //     User.find({}, (err: string, user: any) => {
    //         if(err) res.send(err);

    //         console.log('user',user);
    //         console.log('req.body.email',req.body.email);
    //         if(req.params.email !== 'undefined') {
    //             user.email = req.body.email;
    //         }
    //         // user.email = req.body.email;
    //         user.save(function(err: string) {
    //             if (err)
    //                 res.send(err);

    //             res.json({ email: 'User updated email!' });
    //         });
    //     }
    
    
    // )
        // res.json({ok: true});
    },
    delete: (req: Request, res: Response, next: NextFunction) => {
        res.json({ok: true});
    },
};