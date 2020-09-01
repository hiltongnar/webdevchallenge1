let myButton = $('.open-button');
let closeButton = $('.close-button');
let bonusComponent = $('.bonus-component');
// let bonusComponent - document.querySelector('.bonus-component'); // js equivalent


myButton.click(function() {
  bonusComponent.toggle();
});
