<?php

header("Content-type: text/event-stream");

for ($i = 0; $i < 15; $i++) {
    echo "data: {'msg' : 'hello world'}\n\n";
    ob_flush();
    flush();
    sleep(1);  
}

?>