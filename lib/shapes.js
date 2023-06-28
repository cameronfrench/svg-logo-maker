class shape {
    constructor(shapeColor, shapeText) {
        this.shapeColor = shapeColor; 
        this.shapeText = shapeText;
    }
  }

class circle extends shape {
constructor(shapeColor, shapeText) {
    super(shapeColor, shapeText)
    this.shapeCode = `circle cx="25" cy="75" r="20"`
    }
  }

class square extends shape {
constructor(shapeColor, shapeText) {
    super(shapeColor, shapeText)
    this.shapeCode = `rect x="10" y="10" width="30" height="30"`
    }
    }

class triangle extends shape {
constructor(shapeColor, shapeText) {
    super(shapeColor, shapeText)
    this.shapeCode = `polygon points="0, 50, 220, -50, 60, 0"`
    }
    }

module.exports = { shape, circle, square, triangle }