<?php
$activePage = "/projecten";
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>website</title>
    <link rel="stylesheet" href="/css/projecten.css"
</head>

<body class="body">

<h1>Dit zijn wat projecten die ik heb gemaakt in of buiten school</h1>

<div class="link-wrapper">
    <div class="inline">
        <a href="/onepager" target="new" class="link">
            <img src="/img/onepagerCode.png" alt="onePager" class="image">
            <div class="text">
                <p class="title">Onepager</p>
                <p2 class="subText">opracht van school om een irritante pagina te maken</p2>
            </div>
        </a>
        <a href="https://github.com/Plivbot/Committee-Public" target="new" class="link">
            <img src="/img/committee.png" alt="Committee" class="image">
            <div class="text">
                <p class="title">Committee</p>
                <p2 class="subText">een minecraft utility mod die ik heb gemaakt samen met wat</p2>
                <p2 class="subText">vrienden</p2>
            </div>
        </a>

        <h2>Vindt hier meer</h2>

        <a href="https://github.com/yDekker02" target="new" class="link">
            <img src="/img/githubSchool.png" alt="Github" class="image">
            <div class="text">
                <p class="title">Github School</p>
                <p2 class="subText">all mijn school projecten</p2>
            </div>
        </a>
        <a href="https://github.com/Plivbot" target="new" class="link">
            <img src="/img/githubPublic.png" alt="Github" class="image">
            <div class="text">
                <p class="title">Github Public</p>
                <p2 class="subText">all mijn projecten buiten school</p2>
            </div>
        </a>
    </div>
</div>

<?php require 'nav.php' ?>
</body>
<script src="/js/main.js"></script>
</html>