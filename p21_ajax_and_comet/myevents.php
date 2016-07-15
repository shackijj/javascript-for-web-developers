<?php

header("Content-type: text/event-stream");

for ($i = 0; $i < 15; $i++) {
    echo "data: {'msg' : 'hello world'}\n\n";
    flush();
    sleep(1);  
}

?>