 const downloadBtn = document.querySelector('.resume-btn-contact');

  downloadBtn.addEventListener('click', () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'pdf/Hitesh-Shrivastava-Resume.pdf';
    link.download = 'Hitesh_Shrivastava_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
  });