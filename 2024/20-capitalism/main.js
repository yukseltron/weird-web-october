function handleClick() {
    const money = document.getElementById('money');
    
    money.innerHTML = parseInt(money.innerHTML) + 1000;
    
    const clickCount = parseInt(money.innerHTML/1000);
    const redValue = Math.max(50, 255 - clickCount * 0.05);
    const greenValue = Math.max(205, 255-clickCount * 0.05);
    const blueValue = Math.max(50, 255 - clickCount * 0.05);


    console.log(`rgb(${redValue}, ${greenValue}, ${blueValue})`);
    // Apply the new background color
    document.body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}
