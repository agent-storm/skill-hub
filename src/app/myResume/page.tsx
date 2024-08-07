// src/myResume/myResumeEditor.tsx

import { useEffect, useRef, useState } from 'react';
import * as monaco from 'monaco-editor';
import axios from 'axios';

const MyResumeEditor = () => {
  const editorRef = useRef(null);
  const [latex, setLatex] = useState(`\\documentclass{article}
\\begin{document}
Hello, World!
\\end{document}`);
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    if (editorRef.current) {
      const editor = monaco.editor.create(editorRef.current, {
        value: latex,
        language: 'latex',
      });

      editor.onDidChangeModelContent(() => {
        setLatex(editor.getValue());
      });
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      axios.post('/api/generatePdf', { latex })
        .then(response => {
          const url = URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
          setPreviewUrl(url);
        })
        .catch(error => console.error('Error generating PDF:', error));
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [latex]);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div ref={editorRef} style={{ width: '50%' }} />
      <iframe src={previewUrl} style={{ width: '50%', border: 'none' }} />
    </div>
  );
};

export default MyResumeEditor;
