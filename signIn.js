window.onload = () => {
  const modal = document.createElement('form');

  modal.className = 'main-card-sign-in';
  
  modal.innerHTML = `
  <div class="card-blank sign-in">
    <div class="card-body text-center">
        <form>
            <h3 class="card-text text-main">Вход</h3>
            <br />
            <div class="form-group">
                <input type="text" class="form-control" name="name" required placeholder="Имя пользователя">
            </div>
            <br />
            <div class="form-group">
                <input type="password" class="form-control" name="password" required placeholder="Пароль">
            </div>
            <p class="card-text">
                <small class="text-main">
                    Нет аккаунта?
                    <a class="text-link" href="signUp.html"> Регистрация!</a>
                </small>
            </p>
            <a href="main.html" class="btn btn-dark">Вход</a>
        </form>
    </div>
  </div>
  `;

  $(function() {
    document.getElementsByClassName('container')[0].appendChild(modal);  
    var tar = $('.main-card-sign-in');
    tar.animate({
      marginTop: "0.6in",
    }, 1500 );
  });
}