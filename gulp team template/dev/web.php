<?php include('includes/header.php'); ?>
<div class="container">
  <h1 class="section__title bg-section-title">
    <?php include('./includes/latter.php') ?>
    <span class="wow fadeInUp">Веб камера</span>
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
    <li>Веб камера</li>
  </ul>
</div>
<!-- /.container  -->

<div class="container">
  <div class="webcamera">
    <div class="video video--enabled">
      <a href="https://www.youtube.com/watch?v=Bumj1_bZGog" class="video__link" target="_blank">
        <picture>
          <source srcset="https://img.youtube.com/vi_webp/Bumj1_bZGog/maxresdefault.webp" type="image/webp">
          <img class='video__embed' src="https://img.youtube.com/vi/Bumj1_bZGog/maxresdefault.jpg" alt="Картинка с ютуба">
        </picture>
      </a>
      <button class="video__btn" aria-label='Запустить видео'>
        <svg>
          <path class="video-btn-shape" d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill-opacity=".8"></path>
          <path class="video-btn-icon" d="M45 24L27 14v20"></path>
        </svg>
      </button>
    </div>
    <!-- /.video -->
    <div class="webсamera-descr">
      <h3 class="webсamera-descr__title section-title">Web Camera:</h3>
      <!-- /.descr__title -->
      <h4 class="webсamera-descr__subtitle">Запланированное время завершения строительства: IV квартал 2018 года</h4>
      <!-- /.descr__subtitle -->
      <a href="/dist/stage-building.php" class="button button-size--md webсamera-descr__btn">
        Ход строительства
        <span class="span-animation-1 span-animation"></span>
        <span class="span-animation-2 span-animation"></span>
        <span class="span-animation-3 span-animation"></span>
        <span class="span-animation-4 span-animation"></span>
      </a>
      <!-- /.btn -->
    </div>
    <!-- /.webCamera__descr -->
  </div>
  <!-- /.webCamera -->
</div>
<!-- /.container -->


<?php include('./includes/footer.php') ?>

<script src="js/libs.min.js"></script>
<script src="js/assets/web.js"></script>
</body>
</html>