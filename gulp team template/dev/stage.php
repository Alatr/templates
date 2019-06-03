<?php include('./includes/header.php') ?>
<!-- На это стр. идёт includ footer с class="footer--grey" по вёрстке он идентичен разница только в добавлении класса и src картинки нашего логотипа в footer -->
<div class="site-wrapper">
  <div class="stage-wrapper">
    <div class="heading--gray">

    
    <div class="container">
      <div class="heading">
        <span class="title-line wow fadeInDown">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <h1 class="section__title wow fadeInUp">
          Ход строительства
        </h1>
        <span class="title-line wow fadeInDown">
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
        <li><a class="hover-underline underline-color--dark" href="/">Главная</a></li>
        <li>Ход строительства</li>
      </ul>
      <!-- /.breadcrumb -->
    </div>
    <!-- /.container -->
    </div>
    <!-- /.heading--gray -->
  </div>
  <!-- /.wrapper -->
  
  <div class="stage-count-block" style="background: #ccc url('./img/page-bg.jpg') center repeat-y;background-size: cover;">
    <div class="container">
      <div class="progressbar-range">
        <div class="progressbar-item" data-value="25">
          <p class="progressbar-item__title">Строительство:</p>
          <div class="wrapper">
              <div class="progressbar-line line--white"></div>
              <div class="progressbar-line line--accent"></div>
              <span class="count"></span>
          </div>
        </div>
        <!-- /.progressbar-item -->
        <div class="progressbar-item" data-value="85">
          <p class="progressbar-item__title">Фасад:</p>
          <div class="wrapper">
              <div class="progressbar-line line--white"></div>
              <div class="progressbar-line line--accent"></div>
              <span class="count"></span>
          </div>
        </div>
        <!-- /.progressbar-item -->
        <div class="progressbar-item" data-value="10">
          <p class="progressbar-item__title">Готовность очереди:</p>
          <div class="wrapper">
              <div class="progressbar-line line--white"></div>
              <div class="progressbar-line line--accent"></div>
              <span class="count"></span>
          </div>
        </div>
        <!-- /.progressbar-item -->
      </div>
      <!-- /.progressbar-range -->
      <div class="progressbar-content">
        <p>1я очередь</p>
        <p>завершение строительства: Введение в эксплуатацию - IV квартал 2020г.</p>
      </div>
      <!-- /.progressbar-content -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.stage-count-block -->
  
    <div class="container">
      <div class="stage-list">
        <!-- добавлять при каждой итерации data-wow-delay="0.10s"+ 0,1s -->
        <div class="stage-item site-section__img wow fadeInUp"
            data-wow-delay="0.10s" 
            data-wow-duration="0.5s">
          <a href="img/stage/1.jpg" class="stage-item__img photo-stage-group-js" data-group="1">
            <img src="./img/stage/1.jpg" alt="" title="">
            <div class="hover-overlay">
              <svg class="stage-item__icon">
                <use xlink:href="#icon-eye"></use>
              </svg>
            </div>
            <!-- /.hover-overlay -->
            <div class="data-wrapper">
              <span class="stage-item__data" ></span>
              <time class="time-text" datetime="2018-11-01">
                <svg class="stage-item__icon">
                  <use xlink:href="#icon-event"></use>
                </svg>
                2018-11-01
              </time>
            </div>
            <!-- /.data-wrapper -->
          </a>
          <a class="photo-stage-group-js" data-group="1" href="img/stage/2.jpg"></a>
          <a class="photo-stage-group-js" data-group="1" href="img/stage/3.jpg"></a>
          <a class="photo-stage-group-js" data-group="1" href="img/stage/4.jpg"></a>
        </div>
        <!-- /.stage-news-item -->
      </div>
      <!-- /.stage-news-list -->
    </div>
    <!-- /.container -->
</div>
<!-- /.site-wrapper -->



<?php include('./includes/footer.php') ?>

<script src="js/assets/stage.js"></script>
</body>
</html>