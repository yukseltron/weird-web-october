function setupDragAndDropForToppings() {
    let toppings = document.querySelectorAll('.topping');
    toppings.forEach(topping => {
        topping.onmousedown = function(event) {
            let cloneTopping = topping.cloneNode(true);
            // (1) prepare to moving: make absolute and on top by z-index
            cloneTopping.style.position = 'absolute';
            cloneTopping.style.zIndex = 1000;
          
            // move it out of any current parents directly into body
            // to make it positioned relative to the body
            document.body.append(cloneTopping);
          
            // centers the topping at (pageX, pageY) coordinates
            function moveAt(pageX, pageY) {
                cloneTopping.style.left = pageX - cloneTopping.offsetWidth / 2 + 'px';
                cloneTopping.style.top = pageY - cloneTopping.offsetHeight / 2 + 'px';
            }
          
            // move our absolutely positioned topping under the pointer
            moveAt(event.pageX, event.pageY);
          
            function onMouseMove(event) {
              moveAt(event.pageX, event.pageY);
            }
          
            // (2) move the topping on mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // (3) drop the topping, remove unneeded handlers
            cloneTopping.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              cloneTopping.onmouseup = null;
            };
            cloneTopping.ondragstart = function() {
                return false;
              };
          };
    });
}

setupDragAndDropForToppings();