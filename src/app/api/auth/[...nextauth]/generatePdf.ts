// src/api/generatePdf.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const generatePdf = (req: NextApiRequest, res: NextApiResponse) => {
  const { latex } = req.body;
  const texFilePath = path.join(process.cwd(), 'temp', 'resume.tex');
  const pdfFilePath = path.join(process.cwd(), 'temp', 'resume.pdf');

  fs.writeFileSync(texFilePath, latex);

  exec(`pdflatex -output-directory=temp ${texFilePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing pdflatex: ${stderr}`);
      res.status(500).send('Error generating PDF');
      return;
    }

    const pdf = fs.readFileSync(pdfFilePath);
    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdf);

    // Cleanup
    fs.unlinkSync(texFilePath);
    fs.unlinkSync(pdfFilePath);
    fs.unlinkSync(texFilePath.replace('.tex', '.aux'));
    fs.unlinkSync(texFilePath.replace('.tex', '.log'));
  });
};

export default generatePdf;
