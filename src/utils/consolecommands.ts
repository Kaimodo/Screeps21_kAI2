import * as Inscribe from "screeps-inscribe";

const Colors = ["cyan", "red", "green", "yellow", "white", "purple", "pink", "orange"];

export const ConsoleCommands = {
  removeConstructionSites(roomName: string, leaveProgressStarted = true, structureType?: string) {
    Game.rooms[roomName].find(FIND_MY_CONSTRUCTION_SITES).forEach(site => {
      if (
        (!structureType || (site as ConstructionSite).structureType === structureType) &&
        (!leaveProgressStarted || (site as ConstructionSite).progress === 0)
      ) {
        (site as ConstructionSite).remove();
      }
    });
  },

  rc(roomName: string, leaveProgressStarted: boolean, structureType: string) {
    this.removeConstructionSites(roomName, leaveProgressStarted, structureType);
  },

  test() {
    console.log(`[${Inscribe.color("CC", "red")}] Commands working`);
  },


  killall(roomName?: string) {
    _.forEach(Game.creeps, (c: Creep) => {
      if ((roomName && c.room.name === roomName) || !roomName) {
        c.suicide();
      }
    });
  }
};
