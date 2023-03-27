<?php
$pages = array();
$pages["/portofolio"] = "Portofolio";
$pages["/httpdocs"] = "Home";
$pages["/projecten"] = "Projecten";

$icons = ["person-sharp", "home-sharp", "code-sharp"];
$counter = 0;
?>

<link rel="stylesheet" href="/css/nav.css">
<div class="wrapper">
    <div class="nav" id="center">
        <ul>
            <?php foreach ($pages as $url => $title): ?>
                <li <?php if ($url === $activePage): ?>class="list active"<?php else: ?> class="list"<?php endif ?>>
                    <a href="<?php echo $url ?>">
                        <div class="indicator"></div>
                        <span class="icon"><ion-icon name="<?php echo $icons[$counter]; ?>"></ion-icon></span>
                        <span class="text"><?php echo $title; ?></span>
                    </a>
                </li>
                <?php $counter++ ?>
            <?php endforeach; ?>
        </ul>
    </div>
</div>
