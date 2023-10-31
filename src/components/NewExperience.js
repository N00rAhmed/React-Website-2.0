import React from "react";
import Tabs from "../components/Tabs";
import "../styles/tabs.css";

function NewExperience() {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div className="tab-list-item" label="GirlsandBoysinTech">
            <div className="tab-content">
                <div className="tab-content-item">
                    See ya later, <em>Alligator</em>!
                </div>
            </div>
        </div>

        <div className="tab-list-item" label="Flytag Flight Support">
        <div className="tab-content">
            <div className="tab-content-item">
                  After 'while, <em>Crocodile</em>!

        </div>
        </div>
        </div>


        <div className="tab-list-item" label="Suhbah Collective">
        <div className="tab-content">
        <div className="tab-content-item">
            <li>Made CRUD API using Node.js, Express.js and MongoDB/Mongoose</li>
            <li>Used GET, POST, PUT and DELETE requests to manipulate data</li>
            <li>Designed UI using React.js and fetched data from API here</li>
            <li>Created user authentication for admin using json web tokens</li>
            <li>Added functionaluty such as adding announcements, add businesses and delete businesses etc.</li>
        </div>
        </div>
        </div>

        
        <div className="tab-list-item" label="Opengenus">
        <div className="tab-content">
        <div className="tab-content-item">
            <li>Authored 10 highly-viewed blog articles on diverse topics, reaching a wide audience of thousands on the OpenGenus IQ platform: https://iq.opengenus.org/author/noor/</li>
            <li>Designed and implemented a Python language translation program by making API calls to Google Translate API</li>
            <li>Developed a Python, Flask, and HTML-based prime number generator which accepts user input</li>
            <li>Made substantial contributions to OpenGenus IQ, including articles covering essential algorithmic topics, such as using adjacency lists and matrices in Python</li>
        </div>
        </div>
        </div>


      </Tabs>
    </div>
  );
}

export default NewExperience;