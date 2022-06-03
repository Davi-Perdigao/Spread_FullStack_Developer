<html>

    <head>
        <title>Teste em PHP!!!</title>

        <script scr="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        
        <style type="text/class"> 
            .linha {
                font-weight: bold;
                color: green;
                padding-left: 10px;
                line-height: 50px;
            }
        </style>
    </head>

    <body>
        <?php
        for ($i=1; $i<11; $i++){
            print("<span class=\"linha\">Linha número ". $i . "</span><br />");
        }
        ?>
    </body>

    <script type="text/javascrpit">
        $(document).ready(function() {
            alert("Se chegou até aqui, é porque funcionou!");
        });
    </script>

</html>