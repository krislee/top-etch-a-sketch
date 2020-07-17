 //1) Create a 16x16 grid:
 const container = document.getElementById("container")
 container.setAttribute("style", "grid-template-columns:repeat(16, 27px); grid-template-rows:repeat(16, 27px);")
  for(let i=1; i<17; i++){
      for(let j=1; j<17; j++){
          const div = document.createElement('div');
          div.classList.add('divClass');
          container.appendChild(div);
      }
  }
  const selectDiv = document.querySelectorAll('.divClass')
  for(let i=0; i<256; i++){
      selectDiv[i].setAttribute("style", 
          "padding:5px; border: 1px solid black;");
  }
//2) 16x16 grid with hover effects:
  container.addEventListener("mouseover", function(e){
      e.target.style.backgroundColor = "black"
      // console.log(e.target)
  });
  container.addEventListener("mouseout", function(e){
      e.target.style.backgroundColor = "white"
  });
//3) Clear the 16x16 grid:   
  const button = document.getElementById('clear')
  button.addEventListener('click', function clear(){
      container.remove()
  })
     
//4) Create a new grid according to user's inputs:  
function outer(){
  let number = Number(prompt("Please give number"))
  function create (input){
      const grid = document.createElement('div')
      let widthRows = 12*number
      grid.setAttribute('style', `width: ${widthRows}px; margin: 0 auto; display: grid; grid-template-rows:repeat(${input}, auto); grid-template-columns:repeat(${input}, auto)`)
      document.body.append(grid)
      for(let i = 0; i<input; i++){
          for(let j = 0; j<input; j++){
          const newDivs = document.createElement('div')
          grid.appendChild(newDivs)
          newDivs.setAttribute('style', 'padding: 5px; border: 1px solid black;')
          }
      }
      grid.addEventListener("mouseover", function(e){
          e.target.style.backgroundColor = "black"
      })
      grid.addEventListener("mouseout", function(e){
          e.target.style.backgroundColor = "white"
      })
      grid.style.marginBottom = '20px'
      
      function remove(){
          grid.remove()
      }
      button.addEventListener('click', remove)
  }
  create(number)
}
//5) Click to create new grid:   
 const newGridButton = document.getElementById('new')
 newGridButton.addEventListener('click', outer)

