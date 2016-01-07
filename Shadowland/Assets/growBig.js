#pragma strict
var scaleRate = 1.0;
var minScale = 775.0;
var maxScale = 1.0;
 
function ApplyScaleRate() {
    transform.localScale += Vector3.one * scaleRate;
}
  
function main() {
    //if we exceed the defined range then correct the sign of scaleRate.
    if(transform.localScale.x < minScale) {
        scaleRate = Mathf.Abs(scaleRate);
    }
    else if(transform.localScale.x > maxScale) {
        scaleRate = -Mathf.Abs(scaleRate);
    }
    ApplyScaleRate();
}
  

function Start () {

}

function Update () {
    main();
}