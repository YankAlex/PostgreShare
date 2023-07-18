const cp=require("child_process");
const fs = require('fs');
const conf = JSON.parse(fs.readFileSync('config.json', 'utf8'));
switch(process.argv[2]){
    case "save":
        cp.exec(`pg_dump --username=${conf.user} --host=${conf.host} --dbname=${conf.dbname} -f ./${conf.file}.tar -F t`);
        break;
    case "load":
        cp.exec(`pg_restore -c -U ${conf.user} --host=${conf.host} -d ${conf.dbname} -v "./${conf.file}.tar" -W`);
        break;
}