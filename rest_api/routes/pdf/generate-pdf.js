const PdfPrinter = require( "pdfmake" );
const path = require( "path" );
const fs = require( "mz/fs" );

const directory = path.resolve( __dirname, "..", "..", "data", "pdf" );

async function generatePdf( data ) {
  const company = data.company;
  const client = data.client;
  const convention = data.convention;
  const dpo = data.dpo;

  const fonts = {
    Roboto: {
      normal: path.resolve( __dirname, './fonts/Roboto-Regular.ttf' ),
      bold: path.resolve( __dirname, './fonts/Roboto-Medium.ttf' ),
    }
  };
  const printer = new PdfPrinter( fonts );

  const texts = {
    en: [
      { text: `Written consent for the collection of personal data at the ${convention.name} by the company ${company.name}`, style: [ "title", "doubleMargin" ] },
      { text: `I agree that the company ${company.name} is allowed to collect and store my personal data and to contact me in order to maintain the connection after the ${convention.name}.`, style: "doubleMargin" },
      { text: `Your rights regarding data collection:`, style: "bold" },
      { text: `inquiry, correction, deletion, blockage and the right to object.`, style: "botMargin" },
      { text: `In accordance with § 34 BDSG, you are at any time permitted to inquire ${company.name} about the data stored about you.`, style: "botMargin" },
      { text: `According to § 35 BDSG you can at any time demand the correction, deletion and blockage of individual personal data from the ${company.name}.`, style: "botMargin" },
      { text: `You are granted the right to completely withdraw the given declaration of consent at any time without any incurring costs. You can send the revocation either by post or by e-mail to the Data Protection Officer (DPO) or to the company.`, style: "botMargin" },
      { text: `Your contact for questions regarding data protection:`, style: "bold" },
      { text: `If you have any questions or concerns, please contact ${dpo.name}, your Data Protection Officer (DPO): ${dpo.email}, ${dpo.tel}, ${dpo.addr}`, style: "botMargin" },
      { text: `Hereby I agree that the company ${company.name} is allowed to`, style: "bold" },
      { ul: [
        `contact me in the future via e-mail/telephone/fax/SMS regarding the presented products.`,
        `My given data, including e-mail address, telephone number, mobile phone number, company name, job title, address can be collected and stored.`,
        `I have acknowledged and understood my rights regarding the ${company.name} and the data wich is stored about me.`,
      ] },
      { image: `data:image/png;base64,${client.signature}` },
      `${client.name}, ${convention.place}`,
    ],
    de: [
      { text: `Schriftliche Einwilligung zur Erhebung Personenbezogener Daten auf der ${convention.name} durch das Unternehmen ${company.name}`, style: [ "title", "doubleMargin" ] },
      { text: `Ich bin damit einverstanden, dass das Unternehmen ${company.name} zur aufrecht Erhaltung des Kontaktes nach der ${convention.name} meine Personenbezogener Daten erfassen, speichern und mich kontaktieren darf.`, style: "doubleMargin" },
      { text: `Rechte des Betroffenen:`, style: "bold" },
      { text: `Auskunft, Berichtigung, Löschung, Sperrung und Widerspruchsrecht.`, style: "botMargin" },
      { text: `Sie sind gemäß § 34 BDSG jederzeit berechtigt, gegenüber der ${company.name} um umfangreiche Auskunftserteilung zu den zu Ihrer Person gespeicherten Daten zu ersuchen.`, style: "botMargin" },
      { text: `Gemäß § 35 BDSG können Sie jederzeit gegenüber der ${company.name} die Berichtigung, Löschung und Sperrung einzelner Personenbezogener Daten verlangen.`, style: "botMargin" },
      { text: `Sie können ohne das kosten entstehen jederzeit von Ihrem Recht Gebrauch machen und die erteilte Einwilligungserklärung abändern oder gänzlich widerrufen. Sie können den Widerruf entweder postalisch oder per E-Mail an den Datenschutz Ansprechpartner oder das Unternehmen übermitteln.`, style: "botMargin" },
      { text: `Ihr Ansprechpartner zu Fragen des Datenschutzes:`, style: "bold" },
      { text: `Für Fragen und Anliegen steht Ihnen ${dpo.name} zur Verfügung. ${dpo.email}, ${dpo.tel}, ${dpo.addr}`, style: "botMargin" },
      { text: `Hiermit willige ich ein, dass`, style: "bold" },
      { ul: [
        `mich das Unternehmen ${company.name} bezüglich der vorgestellten Produkte in Zukunft über E-Mail/Telefon/Fax/SMS kontaktieren darf.`,
        `Meine angegeben Daten, darunter zählen E-Mail-Adresse, Telefon- Handynummer, Unternehmensname, Berufsbezeichnung, Adresse erfasst und gespeichert werden dürfen.`,
        `Ich meine Rechte gegenüber der ${company.name} wahrgenommen und verstanden habe.`,
      ] },
      { image: `data:image/png;base64,${client.signature}` },
      `${client.name}, ${convention.place}`,
    ]
  }
  const text = texts[client.lang];

  const documentDefinition = {
    content: text,
    styles: {
      title: {
        bold: true,
        fontSize: 16,
      },
      botMargin: {
        margin: [0,0,0,10],
      },
      doubleMargin: {
        margin: [0,0,0,20],
      },
      bold: {
        bold: true,
      }
    },
    defaultStyle: {
      fontSize: 14,
      margin: [0,0,0,10],
    }
  }
  const pdfDoc = printer.createPdfKitDocument( documentDefinition );

  const filePath = path.resolve( directory, `${client.name}.pdf` );
  pdfDoc.pipe( fs.createWriteStream( filePath ) );

  pdfDoc.end();
}

module.exports = generatePdf;

