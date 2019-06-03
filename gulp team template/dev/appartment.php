<?php include('includes/header.php'); ?>
<div class="container">
  <h1 class="section__title bg-section-title">
    <span class="wow fadeInUp _color--gold">5а</span>
    <span class="wow fadeInUp">квартира</span>
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
    <li><a class="hover-underline underline-color--white" href="./check-build.php">Выбрать этаж</a>
    <svg class="svg-arrow">
      <use xlink:href="#icon-arrow"></use>
    </svg>
    <svg class="svg-arrow">
      <use xlink:href="#icon-arrow"></use>
    </svg>
    </li>
    <li><a class="hover-underline underline-color--white" href="./check-appartment.php">Выбрать квартиру</a>
    <svg class="svg-arrow">
      <use xlink:href="#icon-arrow"></use>
    </svg>
    <svg class="svg-arrow">
      <use xlink:href="#icon-arrow"></use>
    </svg>
    </li>
    <li>5а квартира</li>
  </ul>
</div>
<!-- /.container  -->
<div class="container">
    <div class="appartment-block">
    		<div class="appartment-block__left">
          <a href="#" class="button-string back-to-link">
            <svg class="svg-arrow">
              <use xlink:href="#icon-arrow"></use>
            </svg>
            <svg class="svg-arrow">
              <use xlink:href="#icon-arrow"></use>
            </svg>
            <span class="back-to-link-text hover-underline underline-color--white">Выбрать этаж</span>
          </a>
    			<div class="plan-floor">
    				<p class="plan-floor__title">План поверху</p>
            <svg id="floor" 
               viewBox="0 0 828 238" style="enable-background:new 0 0 828 238;">
              <image style="overflow:visible;" width="100%" height="100%" xlink:href="img/appartment/full-plan.png"></image>
    
    
              <a class="plan-floor-appartment-link" xlink:href="./check-appartment.php" data-number="380" data-square="75.95" data-livsquare="39.61" data-flats="2">
                <polygon class="plan-appartment color--purple" points="4.5,5.5 4.5,232.5 116.5,232.5 116.5,125.5 124.5,125.5 124.5,92.5 140.5,92.5 140.5,5.5 "/>
              </a>
    
    
              <a class="plan-floor-appartment-link" xlink:href="./check-appartment.php" data-number="3" data-square="7.95" data-livsquare="3.61" data-flats="7">
                <polygon class="plan-appartment color--blue" points="222,233 222,135 169,135 169,125 158,125 158,93 142,93 142,6 278,6 278,233 "/>
              </a>
    
    
              <a class="plan-floor-appartment-link" xlink:href="./check-appartment.php" data-number="15" data-square="15.95" data-livsquare="15.61" data-flats="15">
                <polygon class="plan-appartment color--gray" points="391,233 391,125 399,125 399,94 414,94 414,6 280,6 280,233 "/>
              </a>
    
    
              <a class="plan-floor-appartment-link color--gray" xlink:href="./appartment.php" data-number="38" data-square="71.95" data-livsquare="39.61" data-flats="2">
                <polygon class="plan-appartment color--current" points="416,6 416,93 431,93 431,124 443,124 443,134 495,134 495,233 552,233 552,6 "/>
              </a>
    
    
              <a class="plan-floor-appartment-link" xlink:href="./check-appartment.php" data-number="22" data-square="22.95" data-livsquare="22.61" data-flats="22">
                <polygon class="plan-appartment color--green" points="556,233 556,6 690,6 690,92 674,92 674,124 667,124 667,233 "/>
              </a>
    
    
              <a class="plan-floor-appartment-link" xlink:href="./check-appartment.php" data-number="77" data-square="77.95" data-livsquare="77.61" data-flats="77">
                <polygon class="plan-appartment color--blue" points="824,233 824,6 690,6 690,92 706,92 706,124 717,124 717,134 769,134 769,233 "/>
              </a>
            </svg>
    			</div>
    		</div>
    		<!-- /.appartment-block__left -->
    		<div class="appartment-block__center">
          <a href="img/appartment/plan.png" data-modal-class="mfp-bg--white" class="appartment-img">
            <img src="img/appartment/plan.png" alt="" title="">
          </a>
          <div class="appartment-btn-wrap">
            <a href="#" download class="button appartment-button appartment-dowmload-btn">
              Скачать PDF
              <svg>
                <use xlink:href="#icon-pdf"></use>
              </svg>
              <span class="span-animation-1 span-animation"></span>
              <span class="span-animation-2 span-animation"></span>
              <span class="span-animation-3 span-animation"></span>
              <span class="span-animation-4 span-animation"></span>
            </a>
            <a href="#price-form" class="button appartment-button price-popup-with-form-js" >
              Узнать цену
              <svg>
                <use xlink:href="#icon-key"></use>
              </svg>
              <span class="span-animation-1 span-animation"></span>
              <span class="span-animation-2 span-animation"></span>
              <span class="span-animation-3 span-animation"></span>
              <span class="span-animation-4 span-animation"></span>
            </a>
          </div>
        </div>
    		<!-- /.appartment-block__center -->
    		<div class="appartment-block__right">
    			<div class="compass-img">
    				<img src="img/appartment/compass.png" alt="" title="">
    			</div>
    			<div class="appartment-table">
    				<table>
    					<tbody>
    						<tr>
    							<td>Этаж:</td>
    							<td>3</td>
    						</tr>
    						<tr>
    							<td>Общая площадь:</td>
    							<td>13.4 м<sub>2</sub></td>
    						</tr>
    						<tr>
    							<td>Жилая площадь</td>
    							<td>13.4 м<sub>2</sub></td>
    						</tr>
    						<tr>
    							<td>Прихожая:</td>
    							<td>13.4 м<sub>2</sub></td>
    						</tr>
    						<tr>
    							<td>Кухня</td>
    							<td>13.4 м<sub>2</sub></td>
    						</tr>
    						<tr>
    							<td>Гостиная</td>
    							<td>13.4 м<sub>2</sub></td>
    						</tr>
    						<tr>
    							<td>Ванная комната</td>
    							<td>13.4 м<sub>2</sub></td>
    						</tr>
    						<tr>
    							<td>С/у:</td>
    							<td>13.4 м<sub>2</sub></td>
    						</tr>
    						<tr>
    							<td>Лоджия:</td>
    							<td>13.4 м<sub>2</sub></td>
    						</tr>
    						<tr>
    							<td>Балкон</td>
    							<td>13.4 м<sub>2</sub></td>
    						</tr>
    					</tbody>
    				</table>
    			</div>
    			<!-- /.appartment-table -->
    		</div>
    		<!-- /.appartment-block__right -->
    	</div>
    	<!-- /.appartment-block -->
  </div>
  <!-- /.appartment -->

<?php include('./includes/footer.php') ?>

<script src="js/libs.min.js"></script>
<!-- <script src="js/assets/appartment.js"></script> -->
</body>
</html>