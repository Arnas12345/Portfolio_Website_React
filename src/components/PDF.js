import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "../CSS/Resume.css";
import pdf from "../Images/Arnas-Juravicius-CV.pdf";

export default function SinglePage() {
  const [PDFSize, setPDFSize] = useState(() => {
    if (window.innerWidth > 796) return 770;
    else if (window.innerWidth <= 796 && window.innerWidth > 530) return 500;
    else if (window.innerWidth <= 530 && window.innerWidth > 440) return 400;
    else if (window.innerWidth <= 440 && window.innerWidth > 320) return 300;
    else if (window.innerWidth <= 320) return 200;
  });
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

  function handleResize() {
    if (window.innerWidth > 796) setPDFSize(770);
    else if (window.innerWidth <= 796 && window.innerWidth > 530)
      setPDFSize(500);
    else if (window.innerWidth <= 530 && window.innerWidth > 440)
      setPDFSize(400);
    else if (window.innerWidth <= 440 && window.innerWidth > 320)
      setPDFSize(300);
    else if (window.innerWidth <= 320) setPDFSize(200);
  }

  window.addEventListener("resize", handleResize);
  return (
    <>
      <div className="DownloadButton">
        <button className="download">
          <a
            href={pdf}
            download={true}
            style={{ textDecoration: "none", color: "white" }}
          >
            DOWNLOAD RESUME
          </a>
        </button>
      </div>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
        className="PDF"
      >
        <Page pageNumber={pageNumber} width={PDFSize} />
      </Document>
      <div className="Buttons">
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          className="pageChangeButton"
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          className="pageChangeButton"
        >
          Next
        </button>
      </div>
    </>
  );
}
