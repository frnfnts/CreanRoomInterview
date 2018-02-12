const videoInput = document.getElementById('their-video');
// const videoInput = document.getElementById('my-video');

const ctracker = new clm.tracker();
ctracker.init(pModel);
console.log(videoInput);
ctracker.start(videoInput);

const pos = document.getElementById("pos");
function positionLoop() {
  requestAnimationFrame(positionLoop);
  let positions = ctracker.getCurrentPosition();
  console.log(positions);
  pos.innerHTML = positions;
  // positions = [[x_0, y_0], [x_1,y_1], ... ]
}
// positionLoop();

