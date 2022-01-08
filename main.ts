
function setup() {
   createCanvas()
   textAlign("center")
   textBaseline("middle")
   fontFamily("sans-seift")
   fontSize(20)
   lineJoin("round")
   lineCap("round")
}

let MAX = 13
let value = 0

function draw() {
   let WIDTH = Math.min( cw / 2, ch / 2 )
   if ( value != MAX ) {
      value += sin(MAX - value) * 4
   }
   
   let OFFSET = WIDTH / 30
   fontSize( WIDTH / (150/20) )
   clear()
   background(3)
   restore
   save
   save
      begin
         lineWidth(7)
         shadowOffset(0, 0)
         shadowColor("#d4f4fb")
         shadowBlur(20)
         circle(center.x, center.y, WIDTH + 7)
         stroke("#d3f4fb")
      close
   restore
   
   // @draw number and line cap
   for (let index of range(0, 26)) {
      let angle = map(index, 0, 26, 0, map(26, 0, 40, 0, 360))
      begin
         let height = OFFSET * 2
         let width = OFFSET
         if (index % 2 != 0) {
            height = OFFSET
            width = OFFSET * 3/5
         }
         if ( index <= 11 * 2 || index % 2 == 0 ) {
            lineWidth(width)
            line(
               center.x - sin(angle) * (WIDTH - OFFSET),
               center.y + cos(angle) * (WIDTH - OFFSET),
               center.x - sin(angle) * ((WIDTH - OFFSET) - height),
               center.y + cos(angle) * ((WIDTH - OFFSET) - height)
            )
            
            if ( index >= 11 * 2 ) {
               stroke("#dc3545")
            } else {
               stroke(233)
            }
         }
      close
      
      if ( index % 2 == 0 && index / 2 % 2 != 0 || index == 0 ) {
         //printf text
         // set default height
         begin
            fill(index >= 11 * 2 ? "#dc3545" : 233)
            let offset = (WIDTH - OFFSET) - height - OFFSET - parseInt(fontSize()) / 2
            fillText(
               index / 2,
               center.x - sin(angle) * offset,
               center.y + cos(angle) * offset
            )
         close
      }
   }
   
   
   /* @draw content: function(attribute) {
      
   }*/
   save
      begin
         lineWidth(1)
         translate( center.x, center.y )
         rotate(-45)
         rectRadius(-WIDTH / 3.75 / 2, -WIDTH / 3.75 / 2, WIDTH / 3.75, WIDTH / 3.75, "15px")
         fill("#777576")
      close
   restore
   
   begin
      lineWidth(7)
      let angle = map( value, 0, 20, 0, 360 )
      line( center.x, center.y, center.x - sin(angle) * (WIDTH - OFFSET), center.y + cos(angle) * (WIDTH - OFFSET) )
      stroke("#99293c")
   close
   
   /* @draw n */
   begin
      lineWidth(5)
      rect( center.x + WIDTH / 15 + WIDTH / 3.75 / 2, center.y, WIDTH * 3/5, WIDTH * 2 / OFFSET )
      fill("#4d4b46")
      stroke("#6d6b6c")
   close
   
   save
      begin
         shadowOffset(0, 0)
         shadowColor("#36e769")
         shadowBlur(20)
         fill("#36e769") 
         fontSize( WIDTH * 2 / OFFSET )
         fillText("N", center.x + WIDTH / 15 + WIDTH / 3.75 / 2 + WIDTH * 3/5 / 2, center.y + WIDTH * 2/5 / 2 + OFFSET / 2)// 2.5 = lineWidth / 2
      close
   restore
}
