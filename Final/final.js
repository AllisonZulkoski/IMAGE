document.addEventListener("DOMContentLoaded", () => {
  const whales = [
    { id: "whale", speedMultiplier: 1.5, resetX: -40, direction: 1 },
    { id: "whale2", speedMultiplier: 1, resetX: 40, direction: -1 },
    { id: "baby-whale", speedMultiplier: 2, resetX: -42, direction: 1 },
    { id: "whale3", speedMultiplier: 1.2, resetX: 30, direction: 1 },
    { id: "whale4", speedMultiplier: 1.1, resetX: -35, direction: -1 },
    { id: "whale5", speedMultiplier: 1.4, resetX: 20, direction: 1 },
    { id: "whale6", speedMultiplier: 1.3, resetX: -25, direction: -1 },
    { id: "whale7", speedMultiplier: 1.5, resetX: 45, direction: 1 },
    { id: "whale8", speedMultiplier: 1.2, resetX: -50, direction: -1 },
    { id: "whale9", speedMultiplier: 1.3, resetX: 10, direction: 1 },
    { id: "whale10", speedMultiplier: 1.1, resetX: -15, direction: -1 },
    { id: "whale11", speedMultiplier: 1.4, resetX: 35, direction: 1 },
    { id: "whale12", speedMultiplier: 1.5, resetX: -30, direction: -1 },
  ];

  function createWhaleMovement(whale, speedMultiplier, resetX, direction) {
    let angle = 0;

    function moveWhale() {
      const amplitude = 1; // Reduced amplitude for less vertical motion
      const frequency = 0.05 * speedMultiplier; // Adjust wave speed
      const forwardSpeed = 0.1 * speedMultiplier; // Adjust forward speed

      // Calculate new position
      let x = whale.object3D.position.x + forwardSpeed * direction;
      const y = 5 + Math.sin(angle) * amplitude; // Wave-like motion
      let z = whale.object3D.position.z;

      // Ensure the whale does not enter the square area
      if (x > -10 && x < 10 && z > -10 && z < 10) {
        x = resetX; // Reset position if entering the square
      }

      // Update the whale's position and rotation
      whale.setAttribute("position", `${x} ${y} ${z}`);
      whale.object3D.rotation.set(
        THREE.MathUtils.degToRad(Math.sin(angle + Math.PI / 4) * -10), // Tilt around the X-axis
        THREE.MathUtils.degToRad(direction > 0 ? 90 : -90), // Face the correct direction
        0
      );

      // Increment the angle for the wave motion
      angle += frequency;

      // Reset position if the whale moves too far
      if ((direction > 0 && x > 50) || (direction < 0 && x < -50)) {
        whale.setAttribute("position", `${resetX} ${y} ${z}`); // Reset position
      }
    }

    // Move the whale every frame
    setInterval(moveWhale, 150); // Faster interval (200ms -> 150ms)
  }

  whales.forEach(({ id, speedMultiplier, resetX, direction }) => {
    const whale = document.querySelector(`#${id}`);
    if (whale) {
      createWhaleMovement(whale, speedMultiplier, resetX, direction);
    }
  });
});