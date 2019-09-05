var lightSource : Light;
var FlashLightSound : AudioClip;
private static var energy : float = 100;
private static var turnedOn : boolean = false;
var drainSpeed : float = 0.4;

function Update ()
{
	if (Input.GetKeyDown(KeyCode.Mouse1)) ToggleFlashlight();
	
		if (Input.GetKeyDown(KeyCode.Mouse1))
		{
			GetComponent.<AudioSource>().PlayOneShot(FlashLightSound);
		
		}

}

function ToggleFlashlight ()
{
	turnedOn =!turnedOn;
	if (turnedOn && energy > 0)
	{
		TurnOnAndDrainEnergy();
	}
	else
	{
		lightSource.enabled = false;
	
	}

}

function TurnOnAndDrainEnergy ()
{
	lightSource.enabled = true;
	
	while (turnedOn && energy > 0) {
		energy -= drainSpeed*Time.deltaTime;
		yield;
}
	lightSource.enabled = false;
}

static function AlterEnergy (amount : int)
{
	energy = Mathf.Clamp(energy+amount, 0, 100);

}