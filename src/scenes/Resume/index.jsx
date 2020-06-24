import React, { Component } from 'react';
import './index.css';

import { pdfjs, Page, Document } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {

  constructor(props) {
    super(props);
    console.log(this);
  }

  state = {
    file: './resume.pdf',
    numPages: null,
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { file, numPages } = this.state;
    console.log(this);
    // const width = this.container.offsetWidth;
    return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <Document
                  file={file}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  {
                    Array.from(
                      new Array(numPages),
                      (el, index) => (
                        <Page
                          key={`page_${index + 1}`}
                          pageNumber={index + 1}
                          className="center"
                        />
                      ),
                    )
                  }
      </Document>
    </div>
    );
  }
}
export default Resume;
