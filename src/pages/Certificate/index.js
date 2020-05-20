import React from 'react';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'

import template from '../../assets/template.png';
import './styles.css';

function Certificate() {
  const name = localStorage.getItem("#user");
  const date = getCurrentDate();
  const myWidth = window.innerWidth;
  const myHeight = window.innerHeight;

  function getCurrentDate() {
    let dateObj = new Date()

    return dateObj.toLocaleString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '/')
  }

  function getPositionName() {
    if (myHeight >= 400 && myHeight <= 722) {
      return '18%';
    } else if (myHeight >= 723 && myHeight <= 900) {
      return '20%';
    }
    return '25%';
  }

  function getPositionDate() {
    if (myWidth <= 1280) {
      return '28%';
    }
    return '31%';
  }

  async function captureScreen() {
    const url = await html2canvas(document.querySelector("#capture"), {
      backgroundColor: 'transparent',
      removeContainer: true,
    }).then(canvas => {
      return canvas.toDataURL();
    });

    var doc = new jsPDF({
      orientation: 'landscape'
    })
    doc.addImage(url, "PNG", -50, 1, 397, 208);

    const certicate_name = name.split(' ').join('_');
    doc.save(`certificado_${certicate_name}.pdf`)
  }


  return (
    <div className="logon-container" >
      <div id="capture" className="back-image" style={{
        backgroundImage: `url(${template})`,
      }}>
        <h2 style={{
          fontSize: 40,
          marginTop: getPositionName(),
          textAlign: 'center'
        }}> {name} </h2>
        <h2 style={{
          fontSize: 'large',
          position: 'absolute',
          bottom: '32%',
          right: getPositionDate(),
        }}> {date} </h2>
      </div>

      <div className="button-container">
        <button class="button" type="submit" onClick={captureScreen}>Salvar</button>
      </div>

    </div>
  );
}

export default Certificate;
