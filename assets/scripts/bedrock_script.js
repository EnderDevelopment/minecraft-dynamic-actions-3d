// Script API for additional functionality

// Example: Play animation based on player movement

const system = server.registerSystem(0, 0);

system.initialize = function() {
  // Register event listeners
  this.listenForEvent("minecraft:entity_created", (eventData) => this.onEntityCreated(eventData));
  this.listenForEvent("minecraft:entity_moved", (eventData) => this.onEntityMoved(eventData));
};

system.onEntityCreated = function(eventData) {
  // Handle entity creation
  const entity = eventData.data.entity;
  // Play idle animation
  system.playAnimation(entity, "animation.idle");
};

system.onEntityMoved = function(eventData) {
  // Handle entity movement
  const entity = eventData.data.entity;
  // Play walk animation
  system.playAnimation(entity, "animation.walk");
};

system.playAnimation = function(entity, animation) {
  // Play animation on entity
  system.executeCommand(`/playanimation @e[type=${entity.__identifier__}] ${animation}`, (commandResult) => {
    console.log(`Played animation ${animation} on entity ${entity.__identifier__}`);
  });
};