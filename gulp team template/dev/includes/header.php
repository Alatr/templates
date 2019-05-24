<!DOCTYPE html>
<html lang="uk">

<head>

	<meta charset="utf-8">

	<title>Franklin</title>
	<meta name="description" content="">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	
	<!-- Custom Browsers Color Start -->
	<meta name="theme-color" content="#000">
	<!-- Custom Browsers Color End -->

	<link rel="stylesheet" href="css/style.css">

</head>

<body>
<button class="menu-btn">

    <span class="menu-btn-text">Меню</span>
    <span class="menu-btn-line">
        <span></span>
        <span></span>
    </span>
<!--    <span class="menu-btn-line"></span>-->
    <!-- /.menu-line -->
</button>
<?php include('./img/icons/symbol_sprite.php'); ?>

<header class="header">
  <div class="container">
    <div class="row">
      <a href="/" class="logo">
        <img src="img/logo.svg" alt="" title="">
      </a>
      <div class="header-left-wrapper">
        <a href="./web.php" class="webcam-link">
          <svg class="icon">
            <use xlink:href="#icon-webcam"></use>
          </svg>
          Веб камера
        </a>
        <a href="tel:+38011111111" class="header__tel-link ringo">
          <svg class="icon">
            <use xlink:href="#icon-tel"></use>
          </svg>
          <span class="header__tel-text">(044) 324-23-23</span>
        </a>
        <a href="#popup-form" class="button button-size--md header__btn-call popup-with-form-js" data-modal-class="mfp-bg--purple" data-effect="mfp-3d-unfold">
          <svg class="icon header-icon-envelop">
            <use xlink:href="#icon-envel"></use>
          </svg>
          <span class="header__tel-text">Заказать звонок</span>
          <span class="span-animation-1 span-animation"></span>
          <span class="span-animation-2 span-animation"></span>
          <span class="span-animation-3 span-animation"></span>
          <span class="span-animation-4 span-animation"></span>
        </a>
        <div class="language">
          <a class="lang--active" href="/">Рус</a>
          <ul class="lang_dropdown">
            <li class="lang__item"><a class="hover-underline underline--black" href="/">Укр</a></li>
            <li class="lang__item"><a class="hover-underline underline--black" href="/">En</a></li>
          </ul>
          <button  type="button" class="language-btn"></button>
        </div>
        <button type="button" class="menu-btn header__menu-btn">
            <span class="menu-btn-text">Меню</span>
            <span class="menu-btn-line">
                <span></span>
                <span></span>
            </span>
        </button>
      </div>
      <!-- /.header-left-wrapper -->
    </div>
  </div>
</header>
<!-- /.header -->
<div class="menu-wrap visible--hidden background-animate-menu">
    <aside class="menu-aside">
      <h2 class="section__title menu-aside__title bg-section-title">
        <?php include('./includes/latter.php') ?>
        <span class="wow fadeInUp">Меню</span></h2>
      <ul class="menu-aside__list">
        <li><a class="hover-underline underline-color--white" href="#">Главная</a></li>
        <li><a class="hover-underline underline-color--white" href="#">Новости</a></li>
        <li><a class="hover-underline underline-color--white" href="#">Галерея</a></li>
      </ul>
      <!-- /.menu-aside__title -->
    </aside>
    <!-- /.menu-aside -->
    <ul class="menu-list">
        <li class="has-children" >
            <span class="menu__title">О проекте:</span>
            <ul class="sub-menu">
                <li><a class="hover-underline underline-color--dark" href="/build/location.php">О комплексе</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/location.php">Расположение</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/features.php">Преимущества</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/values.php">Ценности</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/infrastructure.php">Инфраструктура</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/gallery.php">Галерея</a></li>
            </ul>
        </li>
        <li class="has-children" >
            <span class="menu__title">Выбрать квартиру:</span>
            <ul class="sub-menu">
                <li><a class="hover-underline underline-color--dark" href="/build/check-build.php">Выбор дома</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/check-appartment.php">Выбрать по этажу</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/filter.php">Выбрать по параметрам</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/home.php">Однокомнатные квартиры</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/home.php">Двухкомнатные квартиры</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/home.php">Трехкомнатные квартиры</a></li>

            </ul>
        </li>
        <li class="has-children" >
            <span class="menu__title">Строительство:</span>
            <ul class="sub-menu">
                <li><a class="hover-underline underline-color--dark" href="/build/develop.php">Застройщик</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/stage.php">Ход строительства</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/news.php">Новости</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/camera.php">Вебкамера</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/doc.php">Документация</a></li>
            </ul>
        </li>
        <li class="has-children" >
            <span class="menu__title">Контакты:</span>
            <ul class="sub-menu">
                <li><a class="hover-underline underline-color--dark" href="/build/location.php">Расположение</a></li>
                <li><a class="hover-underline underline-color--dark" href="/build/contact.php">Контакты</a></li>
            </ul>
        </li>
    </ul>
    <!-- /.menu-list -->
  <button class="close-menu-btn close-menu-btn-js" title="Закрыть" type="button"></button>
</div>
<!-- /.site-section-block -->
<?php include('./includes/forms.php'); ?>
<main class="main">

