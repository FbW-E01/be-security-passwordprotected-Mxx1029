import express from 'express';
import dotenv from 'dotenv';

export default function config(app) {
    dotenv.config();
    app.use(express.json());

    app.use((req, res, next) => {
        console.log("[REQ] " + req.method + " " + req.path);
        next();
    })
}