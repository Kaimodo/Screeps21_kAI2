import * as logger from "utils/logger/logger";

export function run(creep: Creep): void
{
    logger.log.info("Harvester run");
    let TestCap = creep.store.getCapacity();
    logger.log.debug("TestCap: "+ TestCap);

    if (creep.store[RESOURCE_ENERGY] == 0){
        let sources = creep.room.find(FIND_SOURCES);
        creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
        creep.harvest(sources[0]);
    } else {
        let controller = creep.room.controller;

    }

}
