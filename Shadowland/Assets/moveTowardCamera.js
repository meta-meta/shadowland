#pragma strict


var Player : Transform;
var MoveSpeed = 4;
var MaxDist = 10;
var MinDist = 5;
     
     
     
     
function Start () 
{
     
}
function Orbit(){
    var orbitDistance = 10.0;
    var orbitDegreesPerSec = 90.0;
    var relativeDistance = Vector3.zero;
           
   
        // Keep us at the last known relative position
        transform.position = Player.position + relativeDistance;
        transform.RotateAround(Player.position, Vector3.down, orbitDegreesPerSec * Time.deltaTime);
        // Reset relative position after rotate
        relativeDistance = transform.position - Player.position;
        Update();
          
}

function Update () 
{
    transform.LookAt(Player);
         
    if(Vector3.Distance(transform.position,Player.position) >= MinDist){
         
        transform.position += transform.forward*MoveSpeed*Time.deltaTime;
     
               
               
        if(Vector3.Distance(transform.position,Player.position) <= MaxDist)
        {
                

                

            transform.position += transform.forward*MoveSpeed*2*Time.deltaTime;

                
            }
        } 
        
    }