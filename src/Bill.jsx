import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import image from '../public/Logo.png'

let selfAdd = {
    address: "B 124, APEX GREEN APARTMENT SEC - 8, GT ROAD, SONEPAT - 131001 (HR)",
    ph: 8708698580
};

export default function Bill({ Products, add, name }) {
    selfAdd.name = name;
    const billRef = useRef();

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

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
        <div ref={billRef} style={{ width: '210mm', height: '297mm', padding: '10mm', paddingTop: '0mm', border: '1px solid black', boxSizing: 'border-box', position: 'relative' }}>
        <img className='logo' src={image} alt="Company Logo" style={{ width: '100px', height: '100px', filter: 'brightness(1.2)' }} />
            <div style={{ textAlign: 'center', marginBottom: '5mm', marginTop: '-25mm' }}>
                <h1>Invoice</h1>
                <h2>{selfAdd.name}</h2>
                <p style={{ margin: '0mm', padding: '0mm' }}>{selfAdd.address}</p>
                <p style={{ margin: '0mm', padding: '0mm' }}>Phone: {selfAdd.ph}</p>
            </div>
            <div>
                Date : {formatDate(new Date())}
            </div>
            <div style={{ marginBottom: '5mm' }}>
                <h3>Billing To:</h3>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                    paddingLeft: '0px',
                    paddingRight: '80px',
                }} className='billingTo'>   
                    <div><b>Name: </b>{add.name}</div>
                    <div><b>Invoice No. : </b>{add.billNo}</div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                    paddingLeft: '0px',
                    paddingRight: '80px',
                    // width: '160mm',
                }} className='billingTo'>   
                    <div style={{wordWrap : 'break-word', width : '100mm'}}><b>Address: </b>{add.address}</div>
                    <div><b>No. of Boxes : </b>{add.boxNo}</div>
                </div>
                <p><b>Phone: </b>{add.ph}</p>

            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '5mm' }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left', border: '1px solid black', padding: '6px' }}>Product Name</th>
                        <th style={{ textAlign: 'center', border: '1px solid black', padding: '6px' }}>Unit Price</th>
                        <th style={{ textAlign: 'center', border: '1px solid black', padding: '0px' }}>Qty.</th>
                        {/* <th style={{ textAlign: 'center', border: '1px solid black', padding: '6px' }}>GST</th> */}
                        <th style={{ textAlign: 'center', border: '1px solid black', padding: '6px' }}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {Products.map((product, index) => (
                        <tr key={index}>
                            <td style={{ textAlign: 'left', border: '1px solid black', padding: '6px' }}>{product.pName}</td>
                            <td style={{ textAlign: 'center', border: '1px solid black', padding: '6px' }}>{(product.price)}.00</td>
                            <td style={{ textAlign: 'center', border: '1px solid black', padding: '6px' }}>{product.quantity}</td>
                            {/* <td style={{ textAlign: 'center', border: '1px solid black', padding: '6px' }}>{product.GST}%</td> */}
                            <td style={{ textAlign: 'center', border: '1px solid black', padding: '6px' }}>{product.price * product.quantity}.00</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ textAlign: 'right', margin: '0mm', padding: '0mm' }}>
                <h3 style={{margin: '0mm', padding: '0mm' }}>Total Amount: {Products.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2)}</h3>
            </div>
        </div>
        <button onClick={handlePrint}>Download</button>
        </>
    );
}