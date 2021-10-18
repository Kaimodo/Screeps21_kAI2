import * as logger from "utils/logger/logger";

import * as Inscribe from "screeps-inscribe";

import * as Harvester from "components/harvester";

import * as Upgrader from "components/upgrader";

/*
export const RoomLoop = () => {

}
*/

export function run(room: Room): any
{
    // Main-Loop
    logger.log.info('Room "'+room.name+'" has '+Game.rooms[room.name].energyAvailable+' energy');
    for(const c in Game.creeps) {
        const creep: Creep = Game.creeps[c];
        if (creep.memory.role == "Harvester") {
            Harvester.run(creep);
        }else {
            Upgrader.run(creep);
        }
    }
}

