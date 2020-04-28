const BroadlinkRMATNPlatform = require('./platform')

module.exports = (homebridge) => {
  global.Service = homebridge.hap.Service;
  global.Characteristic = homebridge.hap.Characteristic;

  BroadlinkRMATNPlatform.setHomebridge(homebridge);

  homebridge.registerPlatform("homebridge-broadlink-rm-atn", "BroadlinkRMATN", BroadlinkRMATNPlatform);
}
