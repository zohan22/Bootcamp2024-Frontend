class Seat {
    isAvailable
    constructor() {
      this.isAvailable = true;
    }
}
  
  class Cinema {
    columns
    rows
    seats
  
    constructor(rows, columns) {
      this.columns = columns;
      this.rows = rows;
      this.seats = [];
  
      for(let i=0; i<rows; i++) {
        this.seats[i] = []
        for(let j=0; j<columns; j++){
          this.seats[i][j] = new Seat();
        }
      }
    }
  
    reserve(row, column) {
        if(row >= 0 && row < this.rows && column >= 0 && column < this.columns){
            if(this.seats[row][column].isAvailable) {
                this.seats[row][column].isAvailable = false;
                console.log(`Seat at row ${row} and column ${column} has been reserved.`);
            } else {
                console.log(`Seat at row ${row} and column ${column} is already reserved.`);
            } 
        } else {
            console.log(`Invalid seat position: row ${row} and column ${column}.`);
        }
    }
  
    showCine() {
        let header = "   "; 
        for (let j = 0; j < this.columns; j++) {
            header += `  ${String.fromCharCode(65 + j)}  `;
        }
        console.log(header);
        console.log("  +" + "----+".repeat(this.columns));

        for (let i = 0; i < this.rows; i++) {
            let rowDisplay = `${i + 1} `; 
            for (let j = 0; j < this.columns; j++) {
                rowDisplay += this.seats[i][j].isAvailable ? "| X  " : "| R  ";
            }
            rowDisplay += "|";
            console.log(rowDisplay);
            console.log("  +" + "----+".repeat(this.columns));
        }
    } 
  }
  
  const cine = new Cinema(4, 3);
  console.log(cine);

  cine.reserve(2,2);
  cine.showCine();
  cine.reserve(2,2);
  cine.showCine();