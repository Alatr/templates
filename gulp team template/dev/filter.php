<?php include('./includes/header.php') ?>

<div class="container">
  </div>
  <!-- /.container  -->
  <div class="filter-block section-indent" style="background: #ccc url('./img/page-bg.jpg') center repeat-y;background-size: cover;">
  <div class="container">
      <div class="heading">
        <span class="title-line">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <h1 class="section__title">
          Фильтр
        </h1>
        <span class="title-line">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <!-- /.heading -->
      <ul class="breadcrumb">
        <li><a class="hover-underline underline-color--white" href="/">Главная</a></li>
        <li><a class="hover-underline underline-color--white" href="/">Выбор дома</a></li>
        <li>Фильтр</li>
      </ul>
      <!-- /.breadcrumb -->

      <div class="option-block">
        <div class="option-block__title">Подбор по параметрам</div>
        <!-- /.option-block__title -->
          <div class="option__rooms js_checkboxes__rooms checkbox-item">
              <div class="range-item__title">Кількість кімнат</div>
              <input id="checkbox__room1" class="checkbox__room filter__checkbox" type="checkbox" value="1">
              <label for="checkbox__room1" class="checkbox__text">1</label>
              <input id="checkbox__room2" class="checkbox__room filter__checkbox" type="checkbox" value="2">
              <label for="checkbox__room2" class="checkbox__text">2</label>
              <input id="checkbox__room3" class="checkbox__room filter__checkbox" type="checkbox" value="3">
              <label for="checkbox__room3" class="checkbox__text">3</label>
              <input id="checkbox__room4" class="checkbox__room filter__checkbox" type="checkbox" value="4">
              <label for="checkbox__room4" class="checkbox__text">4</label>
          </div>
          <!-- /.checkbox-wrap -->

          <div class="option__entrance range-item ">
              <div class="range-item__title">Під`їзд</div>
              <input class="js_val_entrance_min slider__currentMin" type="number" min="1" value="1" max="4" id="entrance_min">
              <input class="js_val_entrance_max slider__currentMax" type="number" min="1" value="4" max="4" id="entrance_max">
              <input type="hidden" class="range-init irs-hidden-input" id="val_entrance" value="1;4">
          </div>
          <!-- /.range-item -->


          <div class="option__floor range-item">
              <div class="range-item__title">Поверх</div>
              <input class="js_val_floor_min slider__currentMin" type="number" min="4" value="4" max="23" id="floor_min">
              <input class="js_val_floor_max slider__currentMax" type="number" min="4" value="23" max="23" id="floor_max">
              <input type="hidden" class="range-init irs-hidden-input" id="val_floor" value="4;23">
          </div>
          <!-- /.range-item -->



          <div class="option__square range-item">
              <div class="range-item__title">Загальна площа, м</div>
              <input class="js_val_square_min slider__currentMin" type="number" min="15" value="15" max="400" id="square_min">
              <input class="js_val_square_max slider__currentMax" type="number" min="15" value="400" max="400" id="square_max">
              <input type="hidden" class="range-init irs-hidden-input" id="val_square" value="15;400">
          </div>
          <!-- /.range-item -->


          <div class="option__live range-item">
              <div class="range-item__title">Житлова площа, м.кв</div>
              <input class="js_val_squareLiv_min slider__currentMin" type="number" min="8" value="8" max="222" id="squareLiv_min">
              <input class="js_val_squareLiv_max slider__currentMax" type="number" min="8" value="222" max="222" id="squareLiv_max">
              <input type="hidden" class="range-init irs-hidden-input" id="val_squareLiv" value="8;222">
          </div>
          <!-- /.range-item -->
          <div class="search-wrapper">
            <button class="button  option__search-btn js-button_search" >Шукати</button>
            <button class="option__reset-btn js-reset_button text hover-underline underline-color--white">Зкинути параметри</button>
          </div>
          <!-- /.search-wrapper -->
          <p class="option__results text">*За вашим параметрам знайдено <span class="number_flats ">0</span> квартир</p>
          <!-- /.option__results -->
      </div>
      <!-- /.option-block -->


    <div class="filter-info">
      <!--
      <p class="filter-info__text">Найдено типов квартир: <span class="count_filter">146</span></p>
       /.filter-info__text -->
      <!-- <div class="filter-info--wrap"> -->
        <a href="#" class="button filter-info-btn">1-комнатные</a>
        <a href="#" class="button filter-info-btn">2-комнатные</a>
        <a href="#" class="button filter-info-btn">3-комнатные</a>
        <a href="#" class="button filter-info-btn">4-комнатные</a>
        <a href="#" class="button filter-info-btn">Пентхаусы</a>
      <!-- </div> -->
      <!-- /.filter-info--wrap -->
    </div>
    <!-- /.filter-info -->
    <ul class="filter-results" data-pagination="10">
      <li class="filter-item js-result__item " data-floor="3" data-rooms="1" data-area="59.71" data-larea="30" data-build="1">
        <a href="./appartment.php" class="filter-item__link">
          <div class="filter-item__img">
            <img src="img/filter/5.png" alt="" title="">
          </div>
          <table class="filter-item__table text">
            <tbody>
              <tr>
                <td class="table-title">Секция:</td>
                <td class="table-result">1</td>
              </tr>
              <tr>
                <td class="table-title">Кол-во комнат:</td>
                <td class="table-result">1</td>
              </tr>
              <tr>
                <td class="table-title">Общая площадь:</td>
                <td class="table-result">29.71</td>
              </tr>
              <tr>
                <td class="table-title">Жилая площадь:</td>
                <td class="table-result">0</td>
              </tr>
            </tbody>
          </table>
          <span class="  filter-item__button" >
            Смотреть
          </span>
        </a>
      </li>
      <li class="filter-item js-result__item " data-floor="4" data-rooms="2" data-area="59.71" data-larea="30" data-build="1">
        <a href="./appartment.php" class="filter-item__link">
          <div class="filter-item__img">
            <img src="img/filter/4.png" alt="" title="">
          </div>
          <table class="filter-item__table text">
            <tbody>
              <tr>
                <td class="table-title">Секция:</td>
                <td class="table-result">1</td>
              </tr>
              <tr>
                <td class="table-title">Кол-во комнат:</td>
                <td class="table-result">1</td>
              </tr>
              <tr>
                <td class="table-title">Общая площадь:</td>
                <td class="table-result">29.71</td>
              </tr>
              <tr>
                <td class="table-title">Жилая площадь:</td>
                <td class="table-result">0</td>
              </tr>
            </tbody>
          </table>
          <span class="  filter-item__button" >
            Смотреть
          </span>
        </a>
      </li>
      <li class="filter-item js-result__item " data-floor="7" data-rooms="3" data-area="59.71" data-larea="30" data-build="1">
        <a href="./appartment.php" class="filter-item__link">
          <div class="filter-item__img">
            <img src="img/filter/3.png" alt="" title="">
          </div>
          <table class="filter-item__table text">
            <tbody>
              <tr>
                <td class="table-title">Секция:</td>
                <td class="table-result">1</td>
              </tr>
              <tr>
                <td class="table-title">Кол-во комнат:</td>
                <td class="table-result">1</td>
              </tr>
              <tr>
                <td class="table-title">Общая площадь:</td>
                <td class="table-result">29.71</td>
              </tr>
              <tr>
                <td class="table-title">Жилая площадь:</td>
                <td class="table-result">0</td>
              </tr>
            </tbody>
          </table>
          <span class="  filter-item__button" >
            Смотреть
          </span>
        </a>
      </li>
      <li class="filter-item js-result__item " data-floor="10" data-rooms="2" data-area="100" data-larea="100" data-build="1">
        <a href="./appartment.php" class="filter-item__link">
          <div class="filter-item__img">
            <img src="img/filter/2.png" alt="" title="">
          </div>
          <table class="filter-item__table text">
            <tbody>
              <tr>
                <td class="table-title">Секция:</td>
                <td class="table-result">1</td>
              </tr>
              <tr>
                <td class="table-title">Кол-во комнат:</td>
                <td class="table-result">1</td>
              </tr>
              <tr>
                <td class="table-title">Общая площадь:</td>
                <td class="table-result">29.71</td>
              </tr>
              <tr>
                <td class="table-title">Жилая площадь:</td>
                <td class="table-result">0</td>
              </tr>
            </tbody>
          </table>
          <span class="  filter-item__button" >
            Смотреть
          </span>
        </a>
      </li>
      <li class="filter-item js-result__item " data-floor="3" data-rooms="4" data-area="59.71" data-larea="30" data-build="1">
        <a href="./appartment.php" class="filter-item__link">
          <div class="filter-item__img">
            <img src="img/filter/1.png" alt="" title="">
          </div>
          <table class="filter-item__table text">
            <tbody>
              <tr>
                <td class="table-title">Секция:</td>
                <td class="table-result">1</td>
              </tr>
              <tr>
                <td class="table-title">Кол-во комнат:</td>
                <td class="table-result">1</td>
              </tr>
              <tr>
                <td class="table-title">Общая площадь:</td>
                <td class="table-result">29.71</td>
              </tr>
              <tr>
                <td class="table-title">Жилая площадь:</td>
                <td class="table-result">0</td>
              </tr>
            </tbody>
          </table>
          <span class="  filter-item__button" >
            Смотреть
          </span>
        </a>
      </li>
    </ul>
    <button class="filter-more-appartment">Дивитися бiльше планувань</button>
  </div>
</div>
<!-- /.filter-block --> 

<!-- /.container -->
<?php include('./includes/footer.php') ?>
<script src="js/assets/filter.js"></script>
</body>
</html>