const videoInput = document.getElementById('their-video');
// const videoInput = document.getElementById('my-video');

const ctracker = new clm.tracker();
ctracker.init(pModel);
console.log(videoInput.width);
ctracker.start(videoInput);

const can = document.getElementById('video-canvas').getContext("2d");
const pos = document.getElementById("pos");
function positionLoop() {
  requestAnimationFrame(positionLoop);
  let positions = ctracker.getCurrentPosition();
  console.log(positions[0][0], positions[0][1]);
  // can.drawImage(videoInput, positions[0][0], positions[0][1], 70, 70);
  can.drawImage(videoInput, positions[0][0], positions[0][1], 200, 180, 0,0,240, 200);
  // pos.innerHTML = positions;

  // positions = [[x_0, y_0], [x_1,y_1], ... ]
}
positionLoop();

