<?php

for ($i = 0; $i < 10; $i++) {
    echo "CHUNK " . $i . "\n";
    ob_flush();
    usleep(5000);  
}

?>