import { Request, Response } from "express";
import { hash, compare } from "bcryptjs";
import * as jwt from "jsonwebtoken";

import User from "../model/user";
import { Model } from "mongoose";

const userLogIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        const user = await User.findOne({ email });

        if (user && (await compare(password, user.password))) {
            // Create token
            const secret = process.env.JWT_TOKEN_KEY || '';
            const token = jwt.sign(
                { user_id: user._id, email },
                secret,
                {
                    expiresIn: "7 days",
                }
            );

            // save user token
            user.token = token;
            user.save();

            // user
            res.status(200).json({
                first_name: user.first_name,
                last_name: user.last_name,
                email,
                token: user.token
            });
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
};

const userSignUp = async (req: Request, res: Response) => {
    try {
        // Get user input
        const { first_name, last_name, email, password } = req.body;

        // Validate user input
        if (!(email && password && first_name && last_name)) {
            res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        //Encrypt user password
        const encryptedPassword = await hash(password, 10);

        // Create user in our database
        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });

        // Create token
        const secret = process.env.JWT_TOKEN_KEY || '';
        const token = jwt.sign(
            { user_id: user._id, email },
            secret,
            {
                expiresIn: "7 days",
            }
        );
        // save user token
        user.token = token;
        await user.save();

        // return new user
        res.status(201).json({
            first_name,
            last_name,
            email,
            token: user.token
        });
    } catch (err) {
        console.log(err);
    }
};


export {
    userLogIn,
    userSignUp
};