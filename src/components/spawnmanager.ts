import * as logger from "utils/logger/logger";

import * as config from "settings/config";

import * as Inscribe from "screeps-inscribe";


export var harvesters =_.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
export var builders =_.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
export var upgraders =_.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

export function run(room:Room) {

    // Calculate and Spawn Creeps
    var harvesters =_.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders =_.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var upgraders =_.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    if(harvesters.length < config.MANAGER_MAX_HARVESTERS) {
        var neName = room.name +'Har' + Memory.uuid;
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY, MOVE, MOVE],
                                        neName,
                                        {memory: {role: 'harvester',
                                        room: room.name}});
    } else if(upgraders.length < config.MANAGER_MAX_UPGRADERS) {
        var neName = room.name +'Upg' + Memory.uuid;
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY, MOVE, MOVE],
                                        neName,
                                        {memory: {role: 'upgrader',
                                        room: room.name}});
    }else if(builders.length < config.MANAGER_MAX_BUILDERS) {
        var neName = room.name +'Bui' + Memory.uuid;
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY, MOVE, MOVE],
                                        neName,
                                        {memory: {role: 'builder',
                                        room: room.name}});
    }
}
