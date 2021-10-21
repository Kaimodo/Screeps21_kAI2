import * as logger from "utils/logger/logger";

/**
 *
 * @param creep A Creep
 */
export function run(creep: Creep): void
{
    logger.log.info("Upgrader run");
    //let TestCap = creep.store.getCapacity();
    // logger.log.debug("TestCap: "+ TestCap);
    /*
    if (creep.store[RESOURCE_ENERGY] == 0){
        let sources = creep.room.find(FIND_SOURCES);
        creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#4cff00'}});
        creep.harvest(sources[0]);
    } else {
        let pos = creep.room.controller?.pos as RoomPosition;
        creep.moveTo(pos, {visualizePathStyle: {stroke: '#4cff00'}});
        creep.upgradeController(creep.room.controller as StructureController);
        creep.say("Upgrading");
    }
    */
    if(creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
        creep.memory.working = false;
        creep.say('🔄 harvest');
    }
    if(!creep.memory.working && creep.store.getFreeCapacity() == 0) {
        creep.memory.working = true;
        creep.say('upgrade');
    }

    if(creep.memory.working) {
        //let pos = creep.room.controller?.pos as RoomPosition;
        if(creep.upgradeController(creep.room.controller as StructureController) == ERR_NOT_IN_RANGE){
            creep.moveTo(creep.room.controller as StructureController)
        }
    } else {
        let source = creep.room.find(FIND_SOURCES);
        if (creep.harvest(source[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            creep.say("Harvesting");
        }
    }

}
