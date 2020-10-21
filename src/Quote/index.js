import './style.css';

export const Quote = () => {
  return `
  <div class="inner-box">
    <i class="fas fa-quote-left fa2"></i>
  </div>
  <div class="wrapper">
    <i class="fas fa-quote-right fa1"></i>
    <div class="wrapper__text">
      <h3 class="headline">Quote the day</h3>
      <p class="text">
        Always code as if the guy who ends up maintaining your code will be
        a violent psychopath who knows where you live
      </p>
      <em>― John Woods</em>
    </div>
  </div>
  `;
};
Quote();
