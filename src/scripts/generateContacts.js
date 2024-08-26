import {PATH_DB}   from '../constants/contacts.js';
import { createFakeContact } from "../utils/createFakeContact.js";
import * as fs from 'node:fs/promises';




const generateContacts = async (number) => {
    const songList = await fs.readFile(PATH_DB, 'utf-8');
    console.log(songList);

    // const newContactsList = Array(number).fill(0).map(() => createFakeContact());
    // // console.log(newContactsList);
    // await fs.writeFile(PATH_DB, JSON.stringify(newContactsList, null, 2));
};

generateContacts(5);
