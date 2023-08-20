import html2pdf from "html2pdf.js"

export default function DownloadButton({name}) {

    const handleDownload = () => {
        const cvElement = document.getElementById('preview-container'); 

        const height = cvElement.offsetHeight;
        const width = cvElement.offsetWidth;
        const filename = name + '_CV.pdf'

        var opt = {
            filename:     filename,
            enableLinks: true,
            image:        { type: 'png'},
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'px', format: [width, height], hotfixes: 'px_scaling'}
        };
        html2pdf(cvElement, opt);        
    };

    return (
        <button className="header-button" onClick={handleDownload}>Download</button>
    )
}