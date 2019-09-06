using UnityEngine;
using UnityEngine.Events;
using UnityEngine.SceneManagement;


public class TriggerEvent : MonoBehaviour
{
    public string hitTag = "Player";

    private void OnTriggerEnter(Collider collision)
    {
        if (collision.CompareTag(hitTag))
        {
            int activeScene = SceneManager.GetActiveScene().buildIndex;
            SceneManager.LoadScene(activeScene);
        }
    }
}


