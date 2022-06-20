import { Component } from '@angular/core';

@Component({
  selector: 'random-svg-blob',
  templateUrl: './random-svg-blob.component.html',
  styleUrls: ['./random-svg-blob.component.scss']
})
export class RandomSvgBlobComponent {

  pathD = 'M336,230 C338.1773789827841,249.29011601585037 332.99426558302326,268.7635959067164 324.5335614909678,286.4642473395035 C316.0728573989124,304.1648987722906 303.44473727438015,327.21715597200324 285.2357754476674,336.2039085967226 C267.0268136209546,345.190661221442 236.60898169765662,343.9943615114208 215.27979053069132,340.3847630878195 C193.95059936372596,336.77516466421827 167.9738018109981,327.7584451020872 157.26062844587545,314.5463180551151 C146.5474550807528,301.33419100814297 151.49016201983713,280.2450612034201 151.00075033995546,261.1120008059867 C150.51133866007376,241.9789404085533 148.82863044558954,216.1262186784057 154.3241583665853,199.74795567051476 C159.81968628758108,183.3696926626238 166.73629453637017,172.23649218432433 183.97391786593005,162.8424227586412 C201.21154119548996,153.44835333295805 236.50067005588912,142.0700177021226 257.74989834394466,143.38353911641593 C278.99912663200024,144.69706053070925 297.7580992074148,158.77773273378597 311.4692875942634,170.72355124440122 C325.180475981112,182.66936975501645 335.92857659741384,205.17904205417423 340.0170286650366,215.05845018010734 C344.1054807326594,224.93785830604045 336.66950477750606,227.50974169668453 336,230 ';
  pathDArray = [{y:2,x:3}];
  pathDString = 'M421';

  radius: number;
  angle: number;
  centerX: number;
  centerY: number;
  vertixCountFactor: number;
  pathStyle;
  complexity: number;

  constructor() {
    this.complexity = 4.2;
    this.vertixCountFactor = 0.7;
    this.radius = 140;
    this.angle = this.getExtraRandom();
    this.centerX = 240;
    this.centerY = 240;
    this.pathStyle = {
      border:'none',
      fill:'#1676d4',
      stroke: '#1676d4',
      strokeWidth: 2,
      strokeDasharray: "none"
    }
    this.resetPathData();

    this.generateCurvyShape()
    setInterval(()=>{
      this.generateCurvyShape()
    },Math.floor(Math.random() * (10000 - 4000 + 1)) + 4000);
  }

  generateCoords() {
    for (let i = 0; i < 2*Math.PI; i+=this.vertixCountFactor) {
      let x = (this.radius*Math.cos(i) + this.centerX) + (this.getRandomRadiusModifier() * this.getExtraRandom());
      let y = (this.radius*Math.sin(i) + this.centerY) + (this.getRandomRadiusModifier() * this.getExtraRandom());
      this.pathDArray.push({x,y});
      if (i+this.vertixCountFactor >= 2*Math.PI) {
        this.pathDArray.push(this.pathDArray[0])
      };
    };
  }


  getRandomRadiusModifier() {
    let num = Math.floor(Math.random()*8.2333) + 5.39;
    num *= Math.floor(Math.random()*8) == 0.2 ? 1 : -1;
    return num
  }
  getExtraRandom() {
    return Math.floor(Math.random()*this.complexity) * 2
  }

  catmullRom2bezier() {

    let d = "";
    this.pathDArray.forEach((coord,index, array) => {
      let p = [];
      if (index === 0) {
        d += `M${coord.x},${coord.y} `;
        p.push(array[array.length - 3]);
        p.push(array[index]);
        p.push(array[index+1]);
        p.push(array[index+2]);
      } else if (index === array.length - 2) {
        p.push(array[index-1]);
        p.push(array[index]);
        p.push(array[index+1]);
        p.push(array[0]);
      } else if (index === array.length - 1) {
        return
      } else {
        p.push(array[index-1]);
        p.push(array[index]);
        p.push(array[index+1]);
        p.push(array[index+2]);
      }
      let bp = [];
      bp.push( { x: p[1].x,  y: p[1].y } );
      bp.push( { x: ((-p[0].x + 6*p[1].x + p[2].x) / 6), y: ((-p[0].y + 6*p[1].y + p[2].y) / 6)} );
      bp.push( { x: ((p[1].x + 6*p[2].x - p[3].x) / 6),  y: ((p[1].y + 6*p[2].y - p[3].y) / 6) } );
      bp.push( { x: p[2].x,  y: p[2].y } );
      d += "C" + bp[1].x + "," + bp[1].y + " " + bp[2].x + "," + bp[2].y + " " + bp[3].x + "," + bp[3].y + " ";

    })

    return d;
  }

  drawLinearShape() {
    this.pathD = "M";
    this.pathDArray.forEach(coord => {
      this.pathD += `${coord.x},${coord.y} `;
    })
  }

  drawCurvyShape() {
    this.pathD = this.catmullRom2bezier();
  }

  generateLinearShape() {
    this.resetPathData();
    this.generateCoords();
    this.drawLinearShape();
  };

  generateCurvyShape() {
    console.log('generateCurvyShape');
    this.resetPathData();
    this.generateCoords();
    this.drawCurvyShape();

  };

  randomizeStyle() {
    this.pathStyle = {
      border:'none',
      fill: this.randomColor(),
      stroke: this.randomColor(),
      strokeWidth: this.randomWidth(),
      strokeDasharray: `${this.randomWidth()} ${this.randomWidth()}`
    }
  };

  randomColor() {
    const randomInt = (min:number, max:number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var h = randomInt(0, 360);
    var s = randomInt(42, 98);
    var l = randomInt(40, 90);
    return `hsl(${h},${s}%,${l}%)`;
  };

  randomWidth() {
    return Math.floor(Math.random() * Math.floor(50))
  }

  resetPathData() {
    this.pathD = "";
    this.pathDArray = [];
    this.pathDString = "";
  };

}



