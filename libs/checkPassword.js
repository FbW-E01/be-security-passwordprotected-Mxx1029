import { hash, compareHashes } from './crypto.js';

export default async function checkPassword(reqPassword, hash) {
    return await compareHashes(reqPassword, hash);
}