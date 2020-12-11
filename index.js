window.onload = () => {
  const modal = document.createElement('div');

  modal.className = 'main-card-index';

  modal.innerHTML = `
      <div class="card-blank index">
          <div class="card-body text-center">
              <h4 class="card-text text-main">Добро пожаловать в 
                  <span>
                      <img src="images/logo.png" class="img-fluid">
                  </span>
              </h4>
              <br/>
              <a href="signIn.html" class="btn btn-dark">Начать</a>
          </div>
      </div>
  `;

  $(function() {
      document.getElementsByClassName('container')[0].appendChild(modal);  
      var tar = $('.main-card-index');
      tar.animate({
        marginTop: "0.6in",
      }, 1500 );
    });
}