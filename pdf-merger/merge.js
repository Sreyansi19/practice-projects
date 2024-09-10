
  const mergePdfs = async (p1,p2) => {
    try {
      const pdfMergerModule = await import('pdf-merger-js');
      const PDFMerger = pdfMergerModule.default;
  
      const merger = new PDFMerger();
  
      await merger.add(p1);
      await merger.add(p2);
      // Add more files or pages as needed
      let d = new Date().getTime();
      await merger.save(`public/${d}.pdf`);
      console.log('PDF files merged successfully!');
    } catch (error) {
      console.error('Error merging PDF files:', error);
    }
  };
  
  module.exports = { mergePdfs };
  