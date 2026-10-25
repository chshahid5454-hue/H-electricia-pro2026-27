import { DiagramItem, FormulaItem } from '../types';

/**
 * Professional printable PDF exporter for electrical diagrams and engineering sheets.
 * Generates an isolated, print-optimized document and triggers the browser's native Save to PDF dialog.
 */
export const exportDiagramToPdf = (diag: DiagramItem) => {
  // Create a printable hidden iframe
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = '0';
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow?.document;
  if (!doc) return;

  // Find the rendered SVG if available in current DOM for high-fidelity vector output
  const existingSvg = document.querySelector(`[data-diagram-id="${diag.id}"] svg`) ||
                      document.querySelector(`.diagram-${diag.diagramType} svg`) ||
                      document.querySelector('svg');

  const svgContent = existingSvg ? existingSvg.outerHTML : '';

  const componentsHtml = diag.componentsUsed
    .map((c, idx) => `
      <li style="margin-bottom: 6px; display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px dashed #CBD5E1; padding-bottom: 4px;">
        <span style="font-weight: 600; color: #1E293B;">• ${c}</span>
        <span style="direction: rtl; font-family: 'Noto Nastaliq Urdu', Tahoma, sans-serif; color: #B45309; font-size: 13px;">${diag.componentsUsedUrdu[idx] || ''}</span>
      </li>
    `)
    .join('');

  const stepsHtml = diag.wiringSteps
    .map((s, idx) => `
      <li style="margin-bottom: 10px; padding-left: 8px; border-left: 3px solid #0284C7;">
        <div style="font-weight: 600; color: #0F172A; font-size: 13px;">${s}</div>
        <div style="direction: rtl; font-family: 'Noto Nastaliq Urdu', Tahoma, sans-serif; color: #475569; font-size: 12px; margin-top: 2px;">
          ${diag.wiringStepsUrdu[idx] || ''}
        </div>
      </li>
    `)
    .join('');

  const safetyHtml = diag.safetyNotes
    .map((n, idx) => `
      <div style="margin-bottom: 6px; padding: 6px 10px; background-color: #FEF2F2; border-left: 4px solid #DC2626; border-radius: 4px;">
        <div style="font-weight: 700; color: #991B1B; font-size: 12px;">⚠️ ${n}</div>
        <div style="direction: rtl; font-family: 'Noto Nastaliq Urdu', Tahoma, sans-serif; color: #B91C1C; font-size: 12px; margin-top: 2px;">
          ${diag.safetyNotesUrdu[idx] || ''}
        </div>
      </div>
    `)
    .join('');

  const printHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>${diag.title} - H Electrician Pro</title>
      <style>
        @page {
          size: A4 portrait;
          margin: 12mm 15mm;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #0F172A;
          background: #FFFFFF;
          margin: 0;
          padding: 0;
          font-size: 13px;
          line-height: 1.5;
        }
        .header {
          border-bottom: 2px solid #0284C7;
          padding-bottom: 10px;
          margin-bottom: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brand {
          font-size: 18px;
          font-weight: 800;
          color: #0369A1;
          letter-spacing: -0.5px;
        }
        .sub-brand {
          font-size: 11px;
          color: #D97706;
          font-family: 'Noto Nastaliq Urdu', Tahoma, sans-serif;
          margin-top: 2px;
        }
        .meta-badges {
          text-align: right;
          font-size: 11px;
          color: #64748B;
        }
        .title-box {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 12px 16px;
          margin-bottom: 15px;
        }
        .title {
          font-size: 17px;
          font-weight: 700;
          color: #0F172A;
          margin: 0;
        }
        .title-urdu {
          font-size: 14px;
          color: #B45309;
          font-family: 'Noto Nastaliq Urdu', Tahoma, sans-serif;
          direction: rtl;
          margin-top: 4px;
        }
        .desc {
          font-size: 12px;
          color: #475569;
          margin-top: 6px;
        }
        .badges {
          display: flex;
          gap: 8px;
          margin-top: 8px;
        }
        .badge {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          background: #E0F2FE;
          color: #0369A1;
          border: 1px solid #BAE6FD;
        }
        .section-title {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #0369A1;
          border-bottom: 1px solid #E2E8F0;
          padding-bottom: 4px;
          margin-top: 14px;
          margin-bottom: 8px;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 16px;
          margin-top: 10px;
        }
        ul, ol {
          margin: 0;
          padding-left: 18px;
        }
        .footer {
          margin-top: 25px;
          border-top: 1px solid #E2E8F0;
          padding-top: 8px;
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #94A3B8;
        }
        .svg-container {
          background: #0B172E;
          border-radius: 8px;
          padding: 8px;
          margin-bottom: 14px;
          page-break-inside: avoid;
        }
        .svg-container svg {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <div class="brand">⚡ H ELECTRICIAN PRO · شاہد الیکٹریشن</div>
          <div class="sub-brand">انڈسٹریل و رہائشی الیکٹریکل انسائیکلوپیڈیا (Technical Engineering Schematic)</div>
        </div>
        <div class="meta-badges">
          <div>Ref: ${diag.id}</div>
          <div>Date: ${new Date().toLocaleDateString('en-GB')}</div>
        </div>
      </div>

      <div class="title-box">
        <h1 class="title">${diag.title}</h1>
        <div class="title-urdu">${diag.titleUrdu}</div>
        <div class="desc">${diag.description}</div>
        <div class="desc" style="direction: rtl; font-family: 'Noto Nastaliq Urdu', Tahoma, sans-serif; color: #B45309;">${diag.descriptionUrdu}</div>
        <div class="badges">
          ${diag.voltageRating ? `<span class="badge">⚡ Voltage: ${diag.voltageRating}</span>` : ''}
          ${diag.standardRef ? `<span class="badge">📜 Standard: ${diag.standardRef}</span>` : ''}
          <span class="badge">Category: ${diag.category.replace(/_/g, ' ').toUpperCase()}</span>
        </div>
      </div>

      ${svgContent ? `<div class="svg-container">${svgContent}</div>` : ''}

      <div class="grid-2">
        <div>
          <div class="section-title">Components & Specs (پرزہ جات)</div>
          <ul style="list-style-type: none; padding-left: 0;">
            ${componentsHtml}
          </ul>
        </div>

        <div>
          <div class="section-title">Wiring Steps (تاریں جوڑنے کا طریقہ)</div>
          <ol style="list-style-type: none; padding-left: 0;">
            ${stepsHtml}
          </ol>
        </div>
      </div>

      <div style="margin-top: 14px;">
        <div class="section-title" style="color: #DC2626;">Safety & Warning (حفاظتی اصول)</div>
        ${safetyHtml}
      </div>

      <div class="footer">
        <span>Generated from H Electrician Pro App (شاہد الیکٹریشن)</span>
        <span>Verified Educational Schematic • Licensed Electrician Installation Only</span>
      </div>
    </body>
    </html>
  `;

  doc.open();
  doc.write(printHtml);
  doc.close();

  setTimeout(() => {
    iframe.contentWindow?.focus();
    iframe.contentWindow?.print();
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 2000);
  }, 400);
};

/**
 * Professional printable PDF exporter for electrical formulas and engineering calculations.
 */
export const exportFormulaToPdf = (formula: FormulaItem) => {
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = '0';
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow?.document;
  if (!doc) return;

  const varsHtml = formula.variables
    .map(
      (v) => `
      <tr style="border-bottom: 1px solid #E2E8F0;">
        <td style="padding: 6px 10px; font-weight: 700; font-family: monospace; color: #0284C7;">${v.symbol}</td>
        <td style="padding: 6px 10px; font-weight: 600; color: #1E293B;">${v.name}</td>
        <td style="padding: 6px 10px; font-family: monospace; color: #64748B;">${v.unit}</td>
        <td style="padding: 6px 10px; direction: rtl; font-family: 'Noto Nastaliq Urdu', Tahoma, sans-serif; color: #B45309;">${v.nameUrdu}</td>
      </tr>
    `
    )
    .join('');

  const printHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>${formula.title} - Formula Sheet</title>
      <style>
        @page { size: A4 portrait; margin: 15mm; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #0F172A;
          margin: 0;
          padding: 0;
          font-size: 13px;
          line-height: 1.5;
        }
        .header {
          border-bottom: 2px solid #0284C7;
          padding-bottom: 10px;
          margin-bottom: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brand { font-size: 18px; font-weight: 800; color: #0369A1; }
        .sub-brand { font-size: 11px; color: #D97706; font-family: 'Noto Nastaliq Urdu', Tahoma, sans-serif; }
        .formula-card {
          border: 2px solid #0284C7;
          border-radius: 8px;
          background: #F0F9FF;
          padding: 16px;
          margin-bottom: 16px;
          text-align: center;
        }
        .formula-code {
          font-size: 24px;
          font-weight: 800;
          font-family: monospace;
          color: #0369A1;
          letter-spacing: 1px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 12px;
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 6px;
          overflow: hidden;
        }
        th {
          background: #F1F5F9;
          padding: 8px 10px;
          text-align: left;
          font-size: 11px;
          text-transform: uppercase;
          color: #475569;
        }
        .example-box {
          background: #ECFDF5;
          border-left: 4px solid #10B981;
          padding: 12px 14px;
          border-radius: 4px;
          margin-top: 16px;
        }
        .footer {
          margin-top: 30px;
          border-top: 1px solid #E2E8F0;
          padding-top: 8px;
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: #94A3B8;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <div class="brand">⚡ H ELECTRICIAN PRO · فارمولا دستاویز</div>
          <div class="sub-brand">شاہد الیکٹریشن · مستند برقی حسابی کلیات و مثالیں</div>
        </div>
        <div style="text-align: right; font-size: 11px; color: #64748B;">
          <div>Category: ${formula.category.toUpperCase()}</div>
          <div>Date: ${new Date().toLocaleDateString('en-GB')}</div>
        </div>
      </div>

      <h1 style="font-size: 20px; font-weight: 800; color: #0F172A; margin-bottom: 2px;">${formula.title}</h1>
      <div style="font-size: 14px; color: #B45309; font-family: 'Noto Nastaliq Urdu', Tahoma, sans-serif; direction: rtl; margin-bottom: 12px;">${formula.titleUrdu}</div>

      <div class="formula-card">
        <div style="font-size: 11px; font-weight: 700; color: #0284C7; text-transform: uppercase; margin-bottom: 6px;">Mathematical Formula</div>
        <div class="formula-code">${formula.formula}</div>
      </div>

      <div style="margin-bottom: 14px;">
        <h3 style="font-size: 13px; font-weight: 700; color: #0369A1; text-transform: uppercase;">Formula Explanation</h3>
        <p style="color: #334155; margin-top: 4px;">${formula.explanation}</p>
        <p style="color: #64748B; direction: rtl; font-family: 'Noto Nastaliq Urdu', Tahoma, sans-serif; margin-top: 4px;">${formula.explanationUrdu}</p>
      </div>

      <h3 style="font-size: 13px; font-weight: 700; color: #0369A1; text-transform: uppercase; margin-top: 16px;">Variables & Units (علامات)</h3>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Variable Name</th>
            <th>Standard Unit</th>
            <th style="direction: rtl;">اردو نام</th>
          </tr>
        </thead>
        <tbody>
          ${varsHtml}
        </tbody>
      </table>

      <div class="example-box">
        <div style="font-weight: 700; color: #065F46; font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">Worked Practical Example (عملی مثال)</div>
        <div style="font-family: monospace; font-size: 12px; color: #064E3B;">${formula.example}</div>
        <div style="direction: rtl; font-family: 'Noto Nastaliq Urdu', Tahoma, sans-serif; color: #047857; font-size: 12px; margin-top: 4px;">${formula.exampleUrdu}</div>
      </div>

      <div class="footer">
        <span>H Electrician Pro · Shahids Engineering Pocket Guide</span>
        <span>Accredited Electrical Calculation Document</span>
      </div>
    </body>
    </html>
  `;

  doc.open();
  doc.write(printHtml);
  doc.close();

  setTimeout(() => {
    iframe.contentWindow?.focus();
    iframe.contentWindow?.print();
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 2000);
  }, 400);
};
