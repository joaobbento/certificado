import React from 'react';
import { Page, Document, PDFViewer, Font, Image, Text, View } from '@react-pdf/renderer';
import template from '../../assets/template.png';

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

function getCurrentDate() {
  let dateObj = new Date()

  return dateObj.toLocaleString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '/')
}

const Certification = () => {
  const name = localStorage.getItem("#user");
  const date = getCurrentDate();

  return (
    <Document >
      <Page orientation="landscape" size="A4" >
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          src={template}
        />
        <View style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
          <View style={{
            top: 200,
            right: '10%',
            left: '10%',
            position: 'absolute',
          }}>
            <Text style={{
              alignSelf: 'center', fontSize: 31, fontWeight: 'bold',
            }}>{name}</Text>
          </View>

          <View style={{
            bottom: 122,
            right: '15%',
            left: '71%',
            position: 'absolute',
          }}>
            <Text style={{ alignSelf: 'center', fontSize: 18 }}>{date}</Text>
          </View>

        </View>
      </Page>
    </Document>
  );
};

const vWidth = window.innerWidth;
const vHeight = window.innerHeight;

const App = () => (
  <PDFViewer style={{ width: vWidth, height: vHeight }}>
    <Certification />
  </PDFViewer>
);

export default App;
