import exp from "constants";
import * as logger from "utils/logger/logger";

/*
export function defend(room: Room, tower: STRUCTURE_TOWER[]){
    let roomName = room.name;
    tower
    //let tower: STRUCTURE_TOWER = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
    let tower: AnyOwnedStructure[] = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);

    }
    }
}
*/
