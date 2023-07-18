const cp=require("child_process");

switch(process.argv[2]){
    case "save":
        cp.exec(`pg_dump --username=${process.argv[3]} --host=${process.argv[4]} --dbname=${process.argv[5]} -f ./${process.argv[6]} -F t`);
        break;
    case "load":
        cp.exec(`pg_restore -c -U ${process.argv[3]} --host=${process.argv[4]} -d ${process.argv[5]} -v "./${process.argv[6]}" -W`);
        break;
}