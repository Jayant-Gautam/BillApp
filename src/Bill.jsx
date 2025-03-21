import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

let accountNo = 41687809184;
let selfAdd = {
    name: "M/s  A.D. TRADERS",
    address: "B 124, APEX GREEN APARTMENT SEC - 8, GT ROAD, SONEPAT - 131001 (HR)",
    ph: 8708698580
};

export default function Bill({ Products, add }) {
    const billRef = useRef();

    function handlePrint() {
        const input = billRef.current;
        html2canvas(input, { scale: 3 }) // Increase scale for better quality
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png', 1.0); // Highest quality PNG
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, '', 'FAST'); // 'FAST' improves rendering
                pdf.save('invoice.pdf');
            });
    }
    

    return (
        <>
        <div ref={billRef} style={{ width: '210mm', height: '297mm', padding: '20mm', border: '1px solid black', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center', marginBottom: '15mm' }}>
                <h1>Invoice</h1>
                <h2>{selfAdd.name}</h2>
                <p>{selfAdd.address}</p>
                <p>Phone: {selfAdd.ph}</p>
                <p>Account No: {accountNo}</p>
            </div>
            <div style={{ marginBottom: '15mm' }}>
                <h3>Billing To:</h3>
                <p>Name: {add.name}</p>
                <p>Address: {add.address}</p>
                <p>Phone: {add.ph}</p>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '15mm' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Product Name</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Price</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Quantity</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>GST</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {Products.map((product, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{product.pName}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{(product.price / (1 + (product.GST / 100))).toFixed(2)}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{product.quantity}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{product.GST}%</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{product.price * product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ textAlign: 'right' }}>
                <h3>Total Amount: {Products.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2)}</h3>
            </div>
        </div>
        <button onClick={handlePrint}>Download</button>
        </>
    );
}