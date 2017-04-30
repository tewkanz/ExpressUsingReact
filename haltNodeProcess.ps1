$processes = & netstat -ano | FindStr "LISTENING" | FindStr "3000"
$processes = -split $processes[0]
kill $processes[4]