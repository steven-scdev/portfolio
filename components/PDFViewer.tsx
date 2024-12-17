"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Button } from "./ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";

interface PDFViewerProps {
  url: string;
  title: string;
}

export default function PDFViewer({ url, title }: PDFViewerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Initialize worker only on client side
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-screen bg-gray-100">Loading PDF viewer...</div>
    );
  }

  return (
    <div className="w-full h-screen relative">
      <Document file={url} className="w-full h-full">
        <Page
          pageNumber={1}
          renderTextLayer={true}
          renderAnnotationLayer={true}
          scale={1.0}
        />
      </Document>
      <div className="absolute bottom-4 right-4">
        <a
          href={url}
          download={`${title}.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="flex items-center gap-2 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm">
            <DownloadIcon className="h-4 w-4" />
            Download PDF
          </Button>
        </a>
      </div>
    </div>
  );
}
