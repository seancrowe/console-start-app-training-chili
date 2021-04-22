import {program} from "commander";

program.requiredOption('-p, --password <string>', 'password to log into CHILI');
program.requiredOption('-u, --user <string>', 'username to log into CHILI');
program.requiredOption('-e, --environment <string>', 'environment to log into CHILI');
program.requiredOption('-a, --address <string>', 'address of CHILI server');
program.requiredOption('-d, --documentId <string>', 'document id to create PDF');

program.parse();

const options = program.opts();

console.log(options);