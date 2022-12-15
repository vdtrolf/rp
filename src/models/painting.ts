// External dependencies

import { ObjectId } from "mongodb";

// Class Implementation
export default class Painting {
    constructor(
        public name: string, 
        public height: number,
        public length: number, 
        public id?: ObjectId) {}
}