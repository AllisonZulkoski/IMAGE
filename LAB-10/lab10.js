document.addEventListener("DOMContentLoaded", () => {
  const snowman = document.getElementById("snowman");

  // Create the snowman body
  const body = document.createElement("a-sphere");
  body.setAttribute("position", "0 1 -4");
  body.setAttribute("radius", "0.5");
  body.setAttribute("color", "#FFFFFF");

  const middle = document.createElement("a-sphere"); // Adjusted middle layer
  middle.setAttribute("position", "0 1.8 -4");
  middle.setAttribute("radius", "0.35");
  middle.setAttribute("color", "#FFFFFF");

  const head = document.createElement("a-sphere"); // Adjusted head position
  head.setAttribute("position", "0 2.3 -4");
  head.setAttribute("radius", "0.25");
  head.setAttribute("color", "#FFFFFF");

  // Adjusted eyes
  const leftEye = document.createElement("a-sphere");
  leftEye.setAttribute("position", "-0.1 2.4 -3.8"); // Moved back by 0.5px
  leftEye.setAttribute("radius", "0.05");
  leftEye.setAttribute("color", "#000000");

  const rightEye = document.createElement("a-sphere");
  rightEye.setAttribute("position", "0.1 2.4 -3.8"); // Moved back by 0.5px
  rightEye.setAttribute("radius", "0.05");
  rightEye.setAttribute("color", "#000000");

  // Add a carrot nose
  const nose = document.createElement("a-cone");
  nose.setAttribute("position", "0 2.3 -3.7");
  nose.setAttribute("radius-bottom", "0.05");
  nose.setAttribute("height", "0.2");
  nose.setAttribute("color", "#FFA500");
  nose.setAttribute("rotation", "90 0 0"); // Rotate the nose 90 degrees down

  // Add a tophat
  const hatBrim = document.createElement("a-cylinder");
  hatBrim.setAttribute("position", "0 2.6 -4");
  hatBrim.setAttribute("radius", "0.3");
  hatBrim.setAttribute("height", "0.05");
  hatBrim.setAttribute("color", "#000000");

  const hatTop = document.createElement("a-cylinder");
  hatTop.setAttribute("position", "0 2.8 -4");
  hatTop.setAttribute("radius", "0.2");
  hatTop.setAttribute("height", "0.3");
  hatTop.setAttribute("color", "#000000");

  // Adjusted arms
  const leftArm = document.createElement("a-cylinder");
  leftArm.setAttribute("position", "-0.45 2 -4"); // Moved closer by 0.05 units
  leftArm.setAttribute("radius", "0.03");
  leftArm.setAttribute("height", "0.8");
  leftArm.setAttribute("color", "#8B4513");
  leftArm.setAttribute("rotation", "0 0 30");

  const rightArm = document.createElement("a-cylinder");
  rightArm.setAttribute("position", "0.45 2 -4"); // Moved closer by 0.05 units
  rightArm.setAttribute("radius", "0.03");
  rightArm.setAttribute("height", "0.8");
  rightArm.setAttribute("color", "#8B4513");
  rightArm.setAttribute("rotation", "0 0 -30");

  // Add coal buttons
  const button1 = document.createElement("a-sphere");
  button1.setAttribute("position", "0 1.8 -3.665"); // Adjusted z-position forward by 0.05 units (0.5px)
  button1.setAttribute("radius", "0.05");
  button1.setAttribute("color", "#000000");

  const button2 = document.createElement("a-sphere");
  button2.setAttribute("position", "0 1.6 -3.75");
  button2.setAttribute("radius", "0.05");
  button2.setAttribute("color", "#000000");

  const button3 = document.createElement("a-sphere");
  button3.setAttribute("position", "0 1.4 -3.75"); // Adjusted z-position back by 0.05 units (0.5px)
  button3.setAttribute("radius", "0.05");
  button3.setAttribute("color", "#000000");

  // Adjusted red scarf
  const scarf = document.createElement("a-torus");
  scarf.setAttribute("position", "0 2.05 -4");
  scarf.setAttribute("radius", "0.35"); // Reduced radius to fit closer to the neck
  scarf.setAttribute("radius-tubular", "0.02"); // Reduced tubular radius for a thinner scarf
  scarf.setAttribute("color", "#FF0000");
  scarf.setAttribute("rotation", "90 150 0"); // Rotated so the tail is 30 degrees to the right

  // Adjusted scarf tail
  const scarfTail = document.createElement("a-box");
  scarfTail.setAttribute("position", "0.2 1.9 -3.75"); // Adjusted position to align with the new rotation
  scarfTail.setAttribute("width", "0.1");
  scarfTail.setAttribute("height", "0.4");
  scarfTail.setAttribute("depth", "0.02");
  scarfTail.setAttribute("color", "#FF0000");

  // Append all parts to the snowman entity
  snowman.appendChild(body);
  snowman.appendChild(middle);
  snowman.appendChild(head);
  snowman.appendChild(leftEye);
  snowman.appendChild(rightEye);
  snowman.appendChild(nose);
  snowman.appendChild(hatBrim);
  snowman.appendChild(hatTop);
  snowman.appendChild(leftArm);
  snowman.appendChild(rightArm);
  snowman.appendChild(button1);
  snowman.appendChild(button2);
  snowman.appendChild(button3);
  snowman.appendChild(scarf);
  snowman.appendChild(scarfTail);

  const scene = document.querySelector("a-scene");

  generateSnowballs();

  const rabbitSnowman = createRabbitSnowman();
  scene.appendChild(rabbitSnowman);

  const childSnowman = createChildSnowman();
  scene.appendChild(childSnowman);
});

function createSnowball() {
  const snowball = document.createElement("a-sphere");
  const x = (Math.random() * 10) - 5; // Random x position between -5 and 5
  const z = (Math.random() * -10); // Random z position between -10 and 0
  const startY = 5; // Start above the scene
  const endY = -1; // End below the scene

  snowball.setAttribute("position", `${x} ${startY} ${z}`);
  snowball.setAttribute("radius", "0.1");
  snowball.setAttribute("color", "#FFFFFF");
  snowball.setAttribute("animation", `
    property: position;
    to: ${x} ${endY} ${z};
    dur: 5000;
    easing: linear;
    loop: false;
  `);

  snowball.addEventListener("animationcomplete", () => {
    snowball.parentNode.removeChild(snowball); // Remove snowball after it falls
  });

  return snowball;
}

function generateSnowballs() {
  const scene = document.querySelector("a-scene");
  setInterval(() => {
    const snowball = createSnowball();
    scene.appendChild(snowball);
  }, 150); // Generate a snowball every 150ms (doubled frequency)
}

function createRabbitSnowman() {
  const rabbit = document.createElement("a-entity");

  // Rabbit body
  const body = document.createElement("a-sphere");
  body.setAttribute("position", "2 1 -4");
  body.setAttribute("radius", "0.5");
  body.setAttribute("color", "#FFFFFF");

  // Rabbit head
  const head = document.createElement("a-sphere");
  head.setAttribute("position", "2 1.8 -4");
  head.setAttribute("radius", "0.35");
  head.setAttribute("color", "#FFFFFF");

  // Rabbit ears
  const leftEar = document.createElement("a-cylinder");
  leftEar.setAttribute("position", "1.9 2.3 -4");
  leftEar.setAttribute("radius", "0.1");
  leftEar.setAttribute("height", "0.5");
  leftEar.setAttribute("color", "#FFFFFF");
  leftEar.setAttribute("rotation", "0 0 -10");

  const rightEar = document.createElement("a-cylinder");
  rightEar.setAttribute("position", "2.1 2.3 -4");
  rightEar.setAttribute("radius", "0.1");
  rightEar.setAttribute("height", "0.5");
  rightEar.setAttribute("color", "#FFFFFF");
  rightEar.setAttribute("rotation", "0 0 10");

  // Rabbit eyes (moved forward)
  const leftEye = document.createElement("a-sphere");
  leftEye.setAttribute("position", "1.95 1.9 -3.7");
  leftEye.setAttribute("radius", "0.05");
  leftEye.setAttribute("color", "#000000");

  const rightEye = document.createElement("a-sphere");
  rightEye.setAttribute("position", "2.05 1.9 -3.7");
  rightEye.setAttribute("radius", "0.05");
  rightEye.setAttribute("color", "#000000");

  // Bunny nose (sphere with nostrils)
  const nose = document.createElement("a-sphere");
  nose.setAttribute("position", "2 1.8 -3.65");
  nose.setAttribute("radius", "0.05");
  nose.setAttribute("color", "#FF69B4");

  const leftNostril = document.createElement("a-cylinder");
  leftNostril.setAttribute("position", "1.98 1.8 -3.63");
  leftNostril.setAttribute("radius", "0.01");
  leftNostril.setAttribute("height", "0.02");
  leftNostril.setAttribute("color", "#000000");
  leftNostril.setAttribute("rotation", "90 0 0");

  const rightNostril = document.createElement("a-cylinder");
  rightNostril.setAttribute("position", "2.02 1.8 -3.63");
  rightNostril.setAttribute("radius", "0.01");
  rightNostril.setAttribute("height", "0.02");
  rightNostril.setAttribute("color", "#000000");
  rightNostril.setAttribute("rotation", "90 0 0");

  // Rabbit tail
  const tail = document.createElement("a-sphere");
  tail.setAttribute("position", "2 1 -4.5");
  tail.setAttribute("radius", "0.15");
  tail.setAttribute("color", "#FFFFFF");

  // Append all parts to the rabbit entity
  rabbit.appendChild(body);
  rabbit.appendChild(head);
  rabbit.appendChild(leftEar);
  rabbit.appendChild(rightEar);
  rabbit.appendChild(leftEye);
  rabbit.appendChild(rightEye);
  rabbit.appendChild(nose);
  rabbit.appendChild(leftNostril);
  rabbit.appendChild(rightNostril);
  rabbit.appendChild(tail);

  return rabbit;
}

function createChildSnowman() {
  const childSnowman = document.createElement("a-entity");

  // Child snowman body
  const body = document.createElement("a-sphere");
  body.setAttribute("position", "-1 0.5 -4"); // Positioned to the left of the original snowman
  body.setAttribute("radius", "0.3");
  body.setAttribute("color", "#FFFFFF");

  // Child snowman head
  const head = document.createElement("a-sphere");
  head.setAttribute("position", "-1 1 -4");
  head.setAttribute("radius", "0.2");
  head.setAttribute("color", "#FFFFFF");

  // Child snowman eyes (moved further forward)
  const leftEye = document.createElement("a-sphere");
  leftEye.setAttribute("position", "-1.05 1.1 -3.8"); // Adjusted z-position for better visibility
  leftEye.setAttribute("radius", "0.03");
  leftEye.setAttribute("color", "#000000");

  const rightEye = document.createElement("a-sphere");
  rightEye.setAttribute("position", "-0.95 1.1 -3.8"); // Adjusted z-position for better visibility
  rightEye.setAttribute("radius", "0.03");
  rightEye.setAttribute("color", "#000000");

  // Child snowman nose (moved further forward)
  const nose = document.createElement("a-cone");
  nose.setAttribute("position", "-1 1 -3.75"); // Adjusted z-position for better visibility
  nose.setAttribute("radius-bottom", "0.03");
  nose.setAttribute("height", "0.1");
  nose.setAttribute("color", "#FFA500");
  nose.setAttribute("rotation", "90 0 0");

  // Child snowman arms
  const leftArm = document.createElement("a-cylinder");
  leftArm.setAttribute("position", "-1.2 0.8 -4");
  leftArm.setAttribute("radius", "0.02");
  leftArm.setAttribute("height", "0.5");
  leftArm.setAttribute("color", "#8B4513");
  leftArm.setAttribute("rotation", "0 0 30");

  const rightArm = document.createElement("a-cylinder");
  rightArm.setAttribute("position", "-0.8 0.8 -4");
  rightArm.setAttribute("radius", "0.02");
  rightArm.setAttribute("height", "0.5");
  rightArm.setAttribute("color", "#8B4513");
  rightArm.setAttribute("rotation", "0 0 -30");

  // Child snowman buttons
  const button1 = document.createElement("a-sphere");
  button1.setAttribute("position", "-1 0.7 -3.9");
  button1.setAttribute("radius", "0.03");
  button1.setAttribute("color", "#000000");

  const button2 = document.createElement("a-sphere");
  button2.setAttribute("position", "-1 0.5 -3.9");
  button2.setAttribute("radius", "0.03");
  button2.setAttribute("color", "#000000");

  // Child snowman scarf (smaller to fit better)
  const scarf = document.createElement("a-torus");
  scarf.setAttribute("position", "-1 0.8 -4"); // Positioned around the neck
  scarf.setAttribute("radius", "0.15"); // Reduced radius to fit better
  scarf.setAttribute("radius-tubular", "0.008"); // Reduced tubular radius for a thinner scarf
  scarf.setAttribute("color", "#FF0000");
  scarf.setAttribute("rotation", "90 150 0"); // Reset rotation

  const scarfTail = document.createElement("a-box");
  scarfTail.setAttribute("position", "-0.9 0.7 -3.95"); // Adjusted position to align with the new scarf position
  scarfTail.setAttribute("width", "0.05");
  scarfTail.setAttribute("height", "0.15"); // Adjusted height to match proportions
  scarfTail.setAttribute("depth", "0.01");
  scarfTail.setAttribute("color", "#FF0000");

  // Append all parts to the child snowman entity
  childSnowman.appendChild(body);
  childSnowman.appendChild(head);
  childSnowman.appendChild(leftEye);
  childSnowman.appendChild(rightEye);
  childSnowman.appendChild(nose);
  childSnowman.appendChild(leftArm);
  childSnowman.appendChild(rightArm);
  childSnowman.appendChild(button1);
  childSnowman.appendChild(button2);
  childSnowman.appendChild(scarf);
  childSnowman.appendChild(scarfTail);

  return childSnowman;
}
