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
  console.log(myHeight, myWidth);

  function getCurrentDate() {
    let dateObj = new Date()

    return dateObj.toLocaleString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '/')
  }

  function getPositionName() {
    if (myHeight === 757 && myWidth === 1600) {
      console.log('getPositionName1');
      return '19%';
    } else if (myHeight === 900 && myWidth === 1600) {
      console.log('getPositionName2');
      return '25%'
    } else if (myHeight >= 400 && myHeight <= 722) {
      console.log('getPositionName3');
      return '18%';
    } else if (myHeight >= 723 && myHeight <= 901) {
      console.log('getPositionName4');
      return '23%';
    }
  }

  function getPositionDate() {
    if (myHeight === 757 && myWidth === 1600) {
      console.log('getPositionDate1');
      return '31%';
    } else if (myHeight === 900 && myWidth === 1600) {
      console.log('getPositionDate2');
      return '27%'
    } else if (myWidth >= 1280 && myWidth <= 1340) {
      console.log('getPositionDate3');
      return '28%';
    } else if (myWidth >= 1350 && myWidth <= 1550) {
      console.log('getPositionDate4');
      return '29%';
    }
  }

  function getBottomDate() {
    if (myHeight === 757 && myWidth === 1600) {
      console.log('getBottomDate1');
      return '32%';
    } else if (myHeight === 900 && myWidth === 1600) {
      console.log('getBottomDate2');
      return '30%'
    } else if (myWidth >= 1280 && myWidth <= 1340) {
      console.log('getBottomDate3');
      return '32%';
    } else if (myWidth >= 1350 && myWidth <= 1550) {
      console.log('getBottomDate4');
      return '32%';
    }
  }

  function dimensionWidth() {
    if (myHeight === 757 && myWidth === 1600) {
      console.log('dimensionWidth1');
      return {
        x: -40,
        w: 376
      };
    } else if (myHeight === 900 && myWidth === 1600) {
      console.log('dimensionWidt2');
      return {
        x: -52.5,
        w: 397
      };
    } else if (myWidth >= 1280 && myWidth <= 1340) {
      return {
        x: -48,
        w: 393
      };
    } else if (myWidth >= 1350 && myWidth <= 1550) {
      return {
        x: -52.5,
        w: 397
      };
    }
    return {
      x: -4,
      w: 305
    };
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
    const dimens = dimensionWidth();
    doc.addImage(url, "PNG", dimens.x, 1, dimens.w, 208);

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
          bottom: getBottomDate(),
          right: getPositionDate(),
        }}> {date} </h2>
      </div>

      <div className="button-container">
        <button className="button" type="submit" onClick={captureScreen}>Salvar</button>
      </div>

    </div>
  );
}

export default Certificate;
