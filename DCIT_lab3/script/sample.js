const contents = [{
    image: './images/Lime.webp',
    description: "Lime Serenity is a Holy Knight from the island of Holy who fights using a massive Power Hammer to crush her enemies.",
},
{
    image: './images/lime_rbg.png',
    description: "She serves as a powerful support character, utilizing divine auras to heal her teammates and cleanse them of harmful status effects.",
},
{
    image: './images/lime_rbg2.png',
    description: "Despite her small and cute appearance, she is a deeply serious warrior with a strict sense of justice and an unwavering devotion to the Prime God.",
},
{
    image: './images/lime_rbg3.png',
    description: "Interestingly, Lime has a major weakness for sweet candies and was the first 'hybrid' hero introduced to the Grand Chase roster.",
}]

let boxexhtml = '';


contents.forEach((content) => {
    
    boxexhtml += `
    <div class="box-wrapper">
        <div class="box-img">
            <img src="${content.image}" alt="box">
        </div>
        <p class="img-description">${content.description}</p>
    </div>
   `;   
});
document.querySelector('.boxes').innerHTML = boxexhtml;

