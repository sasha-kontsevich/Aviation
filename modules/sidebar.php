<div class="sidebar" id="sidebar">
    <div class="header" id="sectionsHeader" onclick="sectionsTab()">Разделы</div>
    <div id="sections">
        <a href="<?= $_SESSION['path'] ?>catalog.php?section=military">
            <div class="item military       <?= $_SESSION['section'] == 'military' ? 'current-military' : '' ?>"> Военные самолёты</div>
        </a>
        <a href="<?= $_SESSION['path'] ?>catalog.php?section=helicopters">
            <div class="item helicopters    <?= $_SESSION['section'] == 'helicopters' ? 'current-helicopters' : '' ?>"> Вертолёты</div>
        </a>
        <a href="<?= $_SESSION['path'] ?>catalog.php?section=civil">
            <div class="item civil          <?= $_SESSION['section'] == 'civil' ? 'current-civil' : '' ?>"> Гражданские самолёты</div>
        </a>
        <a href="<?= $_SESSION['path'] ?>catalog.php?section=technology">
            <div class="item technology     <?= $_SESSION['section'] == 'technology' ? 'current-technology' : '' ?>"> Авиационные технологии</div>
        </a>
        <a href="<?= $_SESSION['path'] ?>catalog.php?section=weapon">
            <div class="item weapon         <?= $_SESSION['section'] == 'weapon' ? 'current-weapon' : '' ?>"> Авиационное вооружение</div>
        </a>
        <a href="<?= $_SESSION['path'] ?>catalog.php?section=small">
            <div class="item small          <?= $_SESSION['section'] == 'small' ? 'current-small' : '' ?>"> Малая авиация</div>
        </a>
        <a href="<?= $_SESSION['path'] ?>catalog.php?section=special">
            <div class="item special        <?= $_SESSION['section'] == 'special' ? 'current-special' : '' ?>"> Специальная авиация</div>
        </a>

    </div>
</div>