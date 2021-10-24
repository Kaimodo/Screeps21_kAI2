import * as logger from "utils/logger/logger";


/*

var extensionCount = 0;
for(var roomName in Game.rooms) {
    extensionCount += Game.rooms[roomName].find(FIND_MY_STRUCTURES,{
        filter: function(object){return object.structureType === STRUCTURE_EXTENSION;
    }).length;
}
var extensions = Game.spawns.Spawn1.room.find(FIND_MY_STRUCTURES, {
  filter: { structureType: STRUCTURE_EXTENSION }
});
console.log(extensions.length);

*/

export function getLevel(room: Room): number{
    let level = room.controller?.level
    switch (level){
        default:
            // Not set
            return 1;
        case 1:
            return 1;
        case 2:
            let sumOfExt =room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION
                    )}
            })
            if (sumOfExt.length < 5) {
                return 1;
            } else {
                return 2;
            }
        case 3:
            return 3;
    }
}
