import React, { useState } from 'react';

  export default function PhotoUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  
    return (
    <>

      <form id="new-form" action="/schematic" method="POST">
        <h2>Create a Schematic Post</h2>

        <label>* Name of the build:</label>
    <input type="text" name="title"></input>
    <br></br>
    <br></br>

    <label>* Description:</label>
    <input type="text" name="description"></input>
    <br></br>
    <br></br>

    <label>Amount of blocks:</label>
    <input type="number" name="blocks"></input>
    <br></br>
    <br></br>

    <label>Preview Photo:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        {selectedFile && (
           <div>
            <h3>Build Preview:</h3>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Selected"
              width="300"
              height="300"
            />
          </div>
        )}

          <input class="addButton" type="submit" value="Post Schematic"></input>
      </form>
    </>
    );
  }