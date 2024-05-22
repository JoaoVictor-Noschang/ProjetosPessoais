function download() {
    const docPdf = document.querySelector(".content");

    let opt = {
        margin:      1,
        filename:    'file.pdf',
        html2canvas: { scale: 2 },
        jsPDF:       { unit: 'in', format: 'letter', oriantatio: 'portrait' }
    };

    html2pdf().set(opt).from(docPdf).save();
}