<div class="sidebar" id="sidebar">
    <div class="header">Разделы</div>
    <a href="<?= $_SESSION['path'] ?>catalog.php?section=military">
        <div class="item military       <?=  $_SESSION['section'] == 'military' ? 'current' : '' ?>"> Военные самолёты</div>
    </a>
    <a href="<?= $_SESSION['path'] ?>catalog.php?section=helicopters">
        <div class="item helicopters    <?= $_SESSION['section'] == 'helicopters' ? 'current' : '' ?>"> Вертолёты</div>
    </a>
    <a href="<?= $_SESSION['path'] ?>catalog.php?section=civil">
        <div class="item civil          <?= $_SESSION['section'] == 'civil' ? 'current' : '' ?>"> Гражданские самолёты</div>
    </a>
    <a href="<?= $_SESSION['path'] ?>catalog.php?section=technology">
        <div class="item technology     <?= $_SESSION['section'] == 'technology' ? 'current' : '' ?>"> Авиационные технологии</div>
    </a>
    <a href="<?= $_SESSION['path'] ?>catalog.php?section=weapon">
        <div class="item weapon         <?= $_SESSION['section'] == 'weapon' ? 'current' : '' ?>"> Авиационное вооружение</div>
    </a>
    <a href="<?= $_SESSION['path'] ?>catalog.php?section=small">
        <div class="item small          <?= $_SESSION['section'] == 'small' ? 'current' : '' ?>"> Малая авиация</div>
    </a>
    <a href="<?= $_SESSION['path'] ?>catalog.php?section=special">
        <div class="item special        <?= $_SESSION['section'] == 'special' ? 'current' : '' ?>"> Специальная авиация</div>
    </a>
</div>