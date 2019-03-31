const PdfPrinter = require( "pdfmake" );
const path = require( "path" );
const fs = require( "mz/fs" );

const texts = {
  en: {

  },
  de: {

  }
}

const directory = path.resolve( __dirname, "..", "..", "data", "pdf" );

async function generatePdf( data ) {
  const company = data.company;
  const client = data.client;
  const convention = data.convention;
  const dpo = data.dpo;

  const text = texts[client.lang];

  const fonts = {
    Roboto: {
      normal: path.resolve( __dirname, './fonts/Roboto-Regular.ttf' ),
      bold: path.resolve( __dirname, './fonts/Roboto-Medium.ttf' ),
    }
  };
  const printer = new PdfPrinter( fonts );

  const documentDefinition = {
    content: 'This is an sample PDF printed with pdfMake'
  }
  const pdfDoc = printer.createPdfKitDocument( documentDefinition );

  const filePath = path.resolve( directory, `${client.name}.pdf` );
  pdfDoc.pipe( fs.createWriteStream( filePath ) );

  pdfDoc.end();
}

module.exports = generatePdf;

