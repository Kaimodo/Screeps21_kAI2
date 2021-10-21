import * as logger from "utils/logger/logger";

/**
 *
 * @param creep A Creep
 */
export function run(creep: Creep): void
{
    logger.log.info("Harvester run");
    let TestCap = creep.store.getCapacity();
    // logger.log.debug("TestCap: "+ TestCap);

    if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()){
        let sources = creep.room.find(FIND_SOURCES);
        if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            creep.say("Harvesting");
        }else {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1'], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
}
