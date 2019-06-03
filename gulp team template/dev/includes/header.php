<!DOCTYPE html>
<html lang="uk">

<head>

	<meta charset="utf-8">

	<title>Nordica</title>
	<meta name="description" content="">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	
	<!-- Custom Browsers Color Start -->
	<meta name="theme-color" content="#000">
	<!-- Custom Browsers Color End -->

	<link rel="stylesheet" href="css/style.css">

</head>

<body>

<?php include('./img/icons-sprite/symbol_sprite.php'); ?>
<?php include('includes/loader.php'); ?>
<header class="header">
  <a href="/" class="logo"><img src="./img/logo-nordica.svg" alt="" title=""></a>
  <ul class="header-menu tablet--hidden">
      <li class="has-children" >
          <span class="menu__title">Про комплекс:</span>
          <ul class="sub-menu">
              <li><a  href="./about.php">Про комплекс</a></li>
              <li><a  href="#">Розташування</a></li>
              <li><a  href="#">Генплан</a></li>
              <li><a  href="./doc.php">Документи</a></li>
              <li><a  href="./character.php">Характеристики</a></li>
          </ul>
      </li>
      <li class="has-children" >
          <span class="menu__title">Галерея</span>
          <ul class="sub-menu">
              <li><a  href="./gallery.php">Галерея</a></li>
              <li><a  href="#">Рендери ЖК</a></li>
              <li><a  href="#">3-D тур</a></li>
          </ul>
      </li>
      <li class="has-children" >
          <span class="menu__title">Планування</span>
          <ul class="sub-menu">
              <li><a  href="./develop.php">Застройщик</a></li>
              <li><a  href="./stage.php">Ход строительства</a></li>
              <li><a  href="./news.php">Новости</a></li>
              <li><a  href="#">Вебкамера</a></li>
              <li><a  href="./doc.php">Документация</a></li>
          </ul>
      </li>
      <li class="has-children" >
          <span class="menu__title">Ціни</span>
          <ul class="sub-menu">
              <li><a  href="#">Ціни на квартири</a></li>
              <li><a  href="#">Ціни на комерційні приміщення</a></li>
              <li><a  href="#">Ціни на паркінг</a></li>
              <li><a  href="#">Умови придбання</a></li>
          </ul>
      </li>
      <li  >
          <span class="menu__title"><a href="./news.php">Новини</a></span>
      </li>
      <li  >
          <span class="menu__title"><a href="./location.php">Контакти</a></span>
      </li>
  </ul>
  <!-- /.menu-list -->
  <div class="header-adress mobile--hidden">
    <a href="tel:+380939168777" class="header-adress__tel">+38(044)91-68-777</a>
    <div class="header-adress__time">
      <b>Пн-Пт:</b> 9:00-20:00 <b>СБ-ВС:</b> Выходной
    </div>
    <!-- /.header-adress-wrap -->
  </div>
  <!-- /.header-adress -->
  <div class="header-leng">
    <a href="tel:+380939168777" class="svg-wrap from-mobile--hidden">
      <svg>
        <use xlink:href="#icon-tel"></use>
      </svg>
    </a>
    <a href="#" class="svg-wrap mobile--hidden">
      <svg>
        <use xlink:href="#icon-facebook"></use>
      </svg>
    </a>
    <div class="language">
      <a class="lang--active" href="/">Рус</a>
      <ul class="lang_dropdown">
        <li class="lang__item"><a class="hover-underline underline-color--white" href="/">Укр</a></li>
        <li class="lang__item"><a class="hover-underline underline-color--white" href="/">En</a></li>
      </ul>
      <button  type="button" class="language-btn"></button>
    </div>
    <button class="menu-btn desctop--hidden menu-btn-js" type="button">
      <span class="menu-btn-text">Меню</span>
      <span class="menu-btn-line">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </span>
    </button>
    <button class="close-menu-btn close-menu-btn-js visible--hidden" title="Закрыть" type="button"></button>
  </div>
  <!-- /.header-leng -->
</header>
<!-- /.header -->
<div class="menu-wrap menu-wrap-js visible--hidden">
<div class="main-titles">
  <svg class="ribbon ">
    <use class="wow fadeInDown" xlink:href="#icon-line"></use>
  </svg>
  <div class="banner-heading">
    <span class="title-line">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
    <h2 class="main-title">Меню Nordica</h2>
  </div>
  <!-- /.banner-heading -->
</div>

<ul class="mobile-menu">
      <li class="has-children" >
          <span class="menu__title">Про комплекс</span>
          <ul class="sub-menu">
              <li><a class="hover-underline underline-color--white" href="./location.php">Переваги</a></li>
              <li><a class="hover-underline underline-color--white" href="./location.php">Розташування</a></li>
              <li><a class="hover-underline underline-color--white" href="./features.php">Генплан</a></li>
              <li><a class="hover-underline underline-color--white" href="./doc.php">Документи</a></li>
          </ul>
      </li>
      <li class="has-children" >
          <span class="menu__title">Галерея</span>
          <ul class="sub-menu">
              <li><a class="hover-underline underline-color--white" href="./gallery.php">Галерея</a></li>
              <li><a class="hover-underline underline-color--white" href="./check-appartment.php">Рендери ЖК</a></li>
              <li><a class="hover-underline underline-color--white" href="./filter.php">3-D тур</a></li>
          </ul>
      </li>
      <li class="has-children" >
          <span class="menu__title">Квартири</span>
          <ul class="sub-menu">
              <li><a class="hover-underline underline-color--white" href="./develop.php">Будинок 1/2/3/4/5</a></li>
              <li><a class="hover-underline underline-color--white" href="./stage.php">1-Кімнатні</a></li>
              <li><a class="hover-underline underline-color--white" href="./stage.php">2-Кімнатні</a></li>
              <li><a class="hover-underline underline-color--white" href="./stage.php">3-Кімнатні</a></li>
              <li><a class="hover-underline underline-color--white" href="./stage.php">4-Кімнатні</a></li>
          </ul>
      </li>
      <li class="has-children" >
          <span class="menu__title">Ціни</span>
          <ul class="sub-menu">
              <li><a class="hover-underline underline-color--white" href="./location.php">Ціни на квартири</a></li>
              <li><a class="hover-underline underline-color--white" href="./contact.php">Ціни на комерційні приміщення</a></li>
              <li><a class="hover-underline underline-color--white" href="./contact.php">Ціни на паркінг</a></li>
              <li><a class="hover-underline underline-color--white" href="./contact.php">Умови придбання</a></li>
          </ul>
      </li>
      <li>
          <a href="./develop.php" class="menu__title hover-underline underline-color--white">Забудовник</a>
      </li>
      <li >
          <a href="#" class="menu__title hover-underline underline-color--white">Комерційна нерухомість</a>
      </li>
      <li >
          <a href="./stage.php" class="menu__title hover-underline underline-color--white">Хід будівництва </a>
      </li>
      <li >
          <a href="./news.php" class="menu__title hover-underline underline-color--white">Новини</a>
      </li>
      <li >
          <a href="./location.php" class="menu__title hover-underline underline-color--white">Контакти</a>
      </li>
  </ul>
  <!-- /.menu-list -->
</div>
<!-- /.site-section-block -->
<?php include('./includes/forms.php'); ?>
<main class="main">

