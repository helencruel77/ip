window.onload = () => {
  const modal = document.createElement('form');

  modal.className = 'main-card-sign-up';
  
  modal.innerHTML = `
    <div class="card-blank sign-up">
        <form>
            <div class="card-body text-center" style="padding: 30px;">
                <h4 class="card-text">Регистрация</h4>
                <br />

                <div class="form-group">
                    <input type="text" class="form-control" name="name" required placeholder="Имя пользователя" >
                </div>
                <br />
                <div class="form-group">
                    <input type="email" class="form-control" name="email" required placeholder="Почта" >
                </div>
                <br />
                <div class="form-group">
                    <input type="password" class="form-control" name="password" required placeholder="Пароль" >
                </div>
                <p class="card-text">
                    <small class="text-main">
                        Уже есть аккаунт?
                        <span>
                            <a class="text-link" href="signIn.html"> Вход!</a>
                        </span>
                    </small>
                </p>
                <button type="submit" class="btn btn-dark">Регистрация</button>
            </div>
        </form>
    </div>
  `;

  $(function() {
    document.getElementsByClassName('container')[0].appendChild(modal);  
    var tar = $('.main-card-sign-up');
    tar.animate({
      marginTop: "0.6in",
    }, 1500 );
  });
  modal.addEventListener("submit", function(event) {
    event.preventDefault();
    str = '';
    var register = false;
    const data = new FormData(modal);
    if(data.get('password').length < 10 && data.get('password').length != null){
      str = 'Пароль слишком короткий';
    }
    else {
      register = true;
      str = 'Регистрация прошла успешно';
    }
    Swal.fire({
      title: str,
      showConfirmButton: false,
      timer: 1500
  })
    if (register) {
      const inputs = Array.prototype.slice.call(document.getElementsByClassName('form-control'));
      inputs.map(input => {
        console.log(`${input.name}: ${input.value}`);
      });
      setTimeout(function () {
        window.location.href = "signIn.html";
    }, 1800);
  }
  });
}