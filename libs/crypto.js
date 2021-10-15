import bcrypt from 'bcrypt';

async function hash(password) {
    return await bcrypt.hash(password, 10);
}

async function compareHashes(password, hash) {
    // const hashed = await hash(reqPassword); 
    return await bcrypt.compare(password, hash);
}

export { hash, compareHashes}