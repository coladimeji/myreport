import React, { useEffect, useRef } from 'react';

const App = () => {
  const svgContainerRef = useRef();

  useEffect(() => {
    // Fetch the SVG from the public folder and inject it into the div
    fetch('assets/Report_1Final.svg')  
      .then(response => response.text())
      .then(svgString => {
        svgContainerRef.current.innerHTML = svgString;

        // Access the embedded SVG element
        const svgElement = svgContainerRef.current.querySelector('svg');

        // Function to update SVG text based on id
        const updateTextById = (id, newText) => {
          const element = svgElement.getElementById(id);
          if (element) element.textContent = newText;
        };

        // Update the SVG text fields
        updateTextById('textxto', 'Christopher Oladimeji');
        updateTextById('textTwenty', '2022/23');
        updateTextById('textTen', 'Ten');
        updateTextById('textSec', 'Second');
        updateTextById('textGradeLa', 'O');
        updateTextById('textGradeRe2', 'S');
        updateTextById('textGradePre3' , 'FS');
        updateTextById('textGradeGeo4', 'NSH');
        updateTextById('textGrade5Earth', 'S');
        updateTextById('textSocial', 'O');
        updateTextById('textArtGrade7', 'S');
        updateTextById('textGrade2attentive', 'S');
        updateTextById('textGrade2Puntual', 'O');
        updateTextById('textGrade2NeatO', 'S');
        updateTextById('textGrade2Polite', 'O');

        // Function to update image based on id (commented out)
        /*
        const updateImageById = (id, newImageSrc) => {
          const imageElement = svgElement.getElementById(id);
          if (imageElement) {
            // Using 'xlink:href' since 'href' might not work for embedded SVGs
            imageElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', newImageSrc);
          }
        };

        // Update the SVG image (commented out)
        // The new image is 'manImage.jpg' and is located in the Public folder
        // updateImageById('ladyImage', '/manImage.jpg');
        */
      })
      .catch(error => {
        console.error("Error fetching SVG:", error);
      });
  }, []);

  return (
    <div ref={svgContainerRef}>
      {/* SVG will be injected here */}
    </div>
  );
};

export default App;
