<?php include('includes/header.php'); ?>
<div class="container">
  <h1 class="section__title bg-section-title">
    <?php include('./includes/latter.php') ?>
    <span class="wow fadeInUp">Контакты</span>
  </h1>
  <ul class="breadcrumb">
    <li><a class="hover-underline underline-color--white" href="/">Главная</a>
    <svg class="svg-arrow">
      <use xlink:href="#icon-arrow"></use>
    </svg>
    <svg class="svg-arrow">
      <use xlink:href="#icon-arrow"></use>
    </svg>
    </li>
    <li>Контакты</li>
  </ul>
</div>
<!-- /.container  -->



  <div class="container tabs-container">
    <div class="tabs">
      <ul class="tabs__header">
        <li data-page="0"><button type="button" class="text">Контактные данные</button></li>
        <li class="active-li" data-page="1"><button type="button" class="text">Заказать звонок</button> </li>
        <li data-page="2"><button type="button" class="text">Форма обратной связи</button></li>
      </ul>
      <div class="tabs__content">
        <div class="tabs__inner">
          <h3 class="tabs-inner__title">Наши контактные данные</h3>
            <ul class="contact-list">
              <li class="contact-list__item">
                <h4 class='contact-list__title phone-icon'>Наш телефон</h4>
                <a class="text ringo" href="tel:+38000000000">(044)299-49-61</a>
              </li>
              <!-- /.contact-list__item -->
              <li class="contact-list__item">
                <h4 class='contact-list__title location-icon'>Наш адрес</h4>
                <a class="text" href="#" >Киев, улица Златоустівська, 24А</a>
              </li>
              <!-- /.contact-list__item -->
              <li class="contact-list__item">
                <h4 class='contact-list__title email-icon'>Наш e-mail</h4>
                <a href="mailto:info@saga-development.com.ua" class="text">info@franklin.kiev.ua</a>
              </li>
              <!-- /.contact-list__item -->
              <li class="contact-list__item width--all">
                <h4 class='contact-list__title clock-icon'>Время работы отдела продаж:</h4>
                <span class="text">Пн-пт: 09.00 - 19.00		Сб-нд: 10.00 - 18.00</span>
              </li>
              <!-- /.contact-list__item -->
              <li class="contact-list__item width--all">
                <h4 class='contact-list__title location-icon'>Адрес отдела продаж</h4>
                <span class="text">улица Златоустівська, 24А</span>
              </li>
              <!-- /.contact-list__item -->
            </ul>
            <!-- /.contact-block-list -->
        </div>
        <!-- /.tabs__inner -->
        <div class="tabs__inner active-js">
          <h3 class="tabs-inner__title   ">Заказать телефонный звонок</h3>
          <p class="tabs-form-sublitle text">Отправьте заявку на звонок и менеджер отдела продаж свяжется с вами в ближайшее время.</p>
          <form class="mainForm" id="contact-1">
            <div class="mainForm-wrap requaired">
              <span class="mainForm__text" data-defaultMessage="Имя:" data-errorMessage="Имя не заполнено">
                
              <svg class="wrap-icon">
                <use xlink:href="#icon-avatar"></use>
              </svg>
              Имя:
              </span>
              <input name="name" type="text" class="mainForm__input mainForm__input-requaired">
            </div>
            <!--  </mainForm-wrap> -->
            <div class="mainForm-wrap requaired">
              <span class="mainForm__text position--left" data-defaultMessage="Ваш телефон:" data-errorMessage="Телефон не заполнен"></span>
              <input name="tel" type="text" placeholder="Ваш телефон:" class="mainForm__input mainForm__input-requaired inputtelmask">
            </div>
            <!--  </mainForm-wrap> -->
            <div class="mainForm-wrap">
              <span class="mainForm__text display--mobile" data-defaultMessage="В какое удобное время вам перезвонить:" data-errorMessage="Заполните сообщение">
                <svg class="wrap-icon">
                  <use xlink:href="#icon-clock"></use>
                </svg>
                <span>В какое удобное время вам перезвонить:</span>
              </span>
              <input name="message" type="text" autocomplete="off" class="datetimepicker_dark mainForm__input">
            </div>
            <!--  </mainForm-wrap> -->
            <button class="button button--purple sand-form">Отправить
              <span class="span-animation-1 span-animation"></span>
              <span class="span-animation-2 span-animation"></span>
              <span class="span-animation-3 span-animation"></span>
              <span class="span-animation-4 span-animation"></span>
            </button>
          </form>
          <!-- /form -->
        </div>
        <!-- /.tabs__inner -->
        <div class="tabs__inner ">
          <h3 class="tabs-inner__title   ">Форма обратной связи</h3>
          <form class="mainForm" id="contact-2">
            <div class="mainForm-wrap requaired">
              <span class="mainForm__text" data-defaultMessage="Имя:" data-errorMessage="Имя не заполнено">
              <svg class="wrap-icon">
                <use xlink:href="#icon-avatar"></use>
              </svg>
              Имя:
              </span>
              <input name="name" type="text" class="mainForm__input mainForm__input-requaired">
            </div>
            <!--  </mainForm-wrap> -->
            <div class="mainForm-wrap requaired">
              <span class="mainForm__text" data-defaultMessage="Ваш телефон:" data-errorMessage="Email не заполнен">
                <svg class="wrap-icon">
                  <use xlink:href="#icon-envel"></use>
                </svg>
              Ваш Email:</span>
              <input name="email" type="text" class="mainForm__input mainForm__input-requaired">
            </div>
            <!--  </mainForm-wrap> -->
            <div class="mainForm-wrap">
              <span class="mainForm__text " data-defaultMessage="В какое удобное время вам перезвонить:" data-errorMessage="Заполните сообщение">
                <svg class="wrap-icon">
                  <use xlink:href="#icon-tel"></use>
                </svg>
                Ваш вопрос:
              </span>
              <input placeholder="" name="message" type="text" class="mainForm__input">
            </div>
            <!--  </mainForm-wrap> -->
            <button class="button button--purple sand-form">Отправить
              <span class="span-animation-1 span-animation"></span>
              <span class="span-animation-2 span-animation"></span>
              <span class="span-animation-3 span-animation"></span>
              <span class="span-animation-4 span-animation"></span>
            </button>
          </form>
          <!-- /form -->
        </div>
        <!-- /.tabs__inner -->
      </div>
      <!-- /.tabs__content -->
    </div>
    <!-- /.tabs -->
  </div>
  <!-- /.container -->
  <div class="main-map">
    <div id="map"></div>
    <!-- /#map -->
  </div>
  <!-- /.main-map -->

  <?php include('includes/footer.php'); ?>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3v4tMpbXGrrr2GY00coDwi9YeP4aqyA4"></script>
	<script src="js/assets/conta.js"></script>

	</body>
</html>