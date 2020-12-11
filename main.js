window.onload = () => {
    const table = document.createElement('div');

    table.className = 'main-card';
    table.style = 'position: absolute; left: 30px ;top: 100px;';

    table.innerHTML = `
    <div class="card-blank" >
        <div class="card-body text-center" style="width: 1250px; height: 500px">
            <div class="card-day" style="left: 15px">
                <div class="card-header text-dark">
                    <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#ModalCenter">
                        Понедельник
                    </button>
                </div>
                <p class="card-text">
                    <ul class="list-group">
                        <li class="list-group-item text-main">Выгулять собаку</li>
                        <li class="list-group-item text-main">Отправить отчет</li>
                    </ul>
                </p>
            </div>
            <div class="card-day" style="left: 190px">
                <div class="card-header text-light">
                    <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#ModalCenter">
                        Вторник
                    </button>
                </div>
                <p class="card-text">
                    <ul class="list-group">
                        <li class="list-group-item text-main">Сходить в магазин</li>
                    </ul>
                </p>
            </div>
            <div class="card-day" style="left: 365px">
                <div class="card-header text-light">
                    <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#ModalCenter">
                        Среда
                    </button>
                </div>
            </div>
            <div class="card-day" style="left: 540px">
                <div class="card-header text-light">
                    <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#ModalCenter">
                        Четверг
                    </button>
                </div>
            </div>
            <div class="card-day" style="left: 715px">
                <div class="card-header text-light">
                    <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#ModalCenter">
                        Пятница
                    </button>
                </div>
                <p class="card-text">
                    <ul class="list-group">
                        <li class="list-group-item text-main">Сделать лабу</li>
                    </ul>
                </p>
            </div>
            <div class="card-day" style="left: 890px">
                <div class="card-header text-light">
                    <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#ModalCenter">
                        Суббота
                    </button>
                </div>
                <p class="card-text">
                    <ul class="list-group">
                        <li class="list-group-item text-main">Полить цветы</li>
                    </ul>
                </p>
            </div>
            <div class="card-day" style="left: 1065px">
                <div class="card-header text-light">
                    <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#ModalCenter">
                        Воскресенье
                    </button>
                    </div>
            </div>
        </div>
    </div>
    `;

    $(function() {
        document.getElementsByClassName('container')[0].appendChild(table);  
        var tar = $('.main-card');
        tar.animate({
          marginTop: "0.2in",
        }, 1000 );
      });
}