import React, { useState, useEffect } from "react";
import "./Upload.css";
import Tesseract from "tesseract.js";

const Upload = () => {
  const [imageFile, setImageFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [recognizedText, setRecognizedText] = useState(null);
  const [medicalTerms, setMedicalTerms] = useState([
    { term: "WBCs", description: "White blood cells are a part of the immune system and help fight infections." },
    { term: "Neutrophils", description: "Neutrophils are a type of white blood cell that helps the body fight bacterial infections." },
    // Add more medical terms and their descriptions as needed
  ]);
  const [identifiedTerms, setIdentifiedTerms] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);

  const handleFile = (e) => {
    let fileTypes = ["image/jpeg", "image/png", "image/gif"];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        setImageFile(selectedFile);
      } else {
        setTypeError("Please select only image file types");
        setImageFile(null);
      }
    } else {
      console.log("Please select your file");
    }
  };

  const performOCR = () => {
    Tesseract.recognize(imageFile, "eng")
      .then(({ data }) => {
        setRecognizedText(data.text);
        identifyMedicalTerms(data.text);
      })
      .catch((error) => {
        console.error("Error during OCR:", error);
      });
  };

  const identifyMedicalTerms = (text) => {
    const foundTerms = medicalTerms.filter(termObj => text.toLowerCase().includes(termObj.term.toLowerCase()));
    setIdentifiedTerms(foundTerms);
  };

  useEffect(() => {
    window.handleTermClick = handleTermClick;
  }, []);

  const handleTermClick = (term) => {
    console.log("Clicked term:", term);
    const termObj = medicalTerms.find(termObj => termObj.term.toLowerCase() === term.toLowerCase());
    if (termObj) {
      setSelectedTerm(termObj);
    } else {
      console.log("Description not found for term:", term);
    }
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (imageFile !== null) {
      performOCR();
    }
  };

  const highlightMedicalTerms = () => {
    const lines = recognizedText.split('\n');
    let highlightedText = '';
  
    lines.forEach((line, index) => {
      const foundTerms = medicalTerms.filter(termObj => line.toLowerCase().includes(termObj.term.toLowerCase()));
      let highlightedLine = line;
  
      foundTerms.forEach((termObj) => {
        const termRegex = new RegExp(`(${termObj.term})`, "gi");
        highlightedLine = highlightedLine.replace(termRegex, `<span class="highlighted-term" onClick="handleTermClick('${termObj.term}')">${termObj.term}</span>`);
      });
  
      highlightedText += `<div class="line" key=${index}><span>${highlightedLine}</span></div>`;
    });
  
    return { __html: highlightedText };
  };

  const closePopUp = () => {
    setSelectedTerm(null);
  };

  return (
    <div className="wrapper" style={{ marginTop: "100px" }}>
      <h3>Upload & View Images</h3>
      <form className="form-group custom-form" onSubmit={handleFileSubmit}>
        <input
          type="file"
          accept="image/*"
          className="form-control"
          required
          onChange={handleFile}
        />
        <button type="submit" className="btn btn-success btn-md">
          UPLOAD
        </button>
        {typeError && (
          <div className="alert alert-danger" role="alert">
            {typeError}
          </div>
        )}
      </form>
      <div className="viewer">
        {recognizedText ? (
          <div>
            <h4>Recognized Text:</h4>
            <div dangerouslySetInnerHTML={highlightMedicalTerms()} />
          </div>
        ) : (
          <div>No Image is uploaded yet!</div>
        )}
      </div>
      {selectedTerm && (
        <div className="dialog-box">
          <div className="dialog-box-content">
            <span className="close" onClick={closePopUp}>&times;</span>
            <h4>{selectedTerm.term}</h4>
            <p>{selectedTerm.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
