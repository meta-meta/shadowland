﻿using UnityEngine;
using System.Collections;

public class OrbitPlayer : MonoBehaviour
{

    public Transform target;
    public float orbitDistance = 10.0f;
    public float orbitDegreesPerSec = 90.0f;
    public Vector3 relativeDistance = Vector3.zero;
    public float tick = 0;
    //public float direction

    // Use this for initialization
    void Start()
    {

        if (target != null)
        {
            relativeDistance = transform.position - target.position;
        }
    }

    void Orbit()
    {
        if (target != null)
        {
            
            if (tick >= 20)
            {
                transform.position = target.position + relativeDistance;
                transform.RotateAround(target.position, Vector3.forward, orbitDegreesPerSec * Time.deltaTime);
                relativeDistance = transform.position - target.position;
                if(tick >= 40)
                {
                    tick=0;
                }
                
            }
            else
            {
                // Keep us at the last known relative position
                transform.position = target.position + relativeDistance;
                transform.RotateAround(target.position, Vector3.down, orbitDegreesPerSec * Time.deltaTime);
                // Reset relative position after rotate
                relativeDistance = transform.position - target.position;
                tick += 1;
            }         
        }
    }

    void LateUpdate()
    {

        Orbit();

    }
}