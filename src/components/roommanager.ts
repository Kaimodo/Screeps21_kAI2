import * as logger from "utils/logger/logger";

import * as Inscribe from "screeps-inscribe";

import * as Harvester from "components/harvester";

export const RoomLoop = () => {
    // Check memory for null or out of bounds custom objects
    if (!Memory.uuid || Memory.uuid > 1000)
    {
        Memory.uuid = 0;
    }

    for (const i in Game.rooms) {
        const room: Room = Game.rooms[i];
        run(room);
    }
}

export function run(room: Room): any
{
    // Main-Loop
    logger.log.info("RoomManager run gestartet");
    for(const c in Game.creeps) {
        const creep: Creep = Game.creeps[c];
        Harvester.run(creep);
    }


}

