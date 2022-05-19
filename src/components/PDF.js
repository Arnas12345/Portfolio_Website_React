import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "../CSS/Resume.css";
import pdf from "../Images/Arnas-Juravicius-CV.pdf";

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
        className="PDF"
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="Buttons">
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
