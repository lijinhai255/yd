import container from "./inversity.config";

import TYPES from "./types";

import { ClassRoom } from "./interfaces"

const classRoom = container.get<ClassRoom>(TYPES.ClassRoom)

console.log(classRoom.studying())