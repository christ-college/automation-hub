## automation-hub
Automation hub

### Contributors
- [contributors](./contributors.md)

## Initial setup

```bash
# git clone https://github.com/christ-college/automation-hub.git
cd automation-hub
npm install
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
### simple API check
GET http://localhost:3000/

# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

### Example: nest CLI to add module controller & service
- https://docs.nestjs.com/cli/usages
```bash
# Generates schematic
# from the root ot the repository
# nest generate <schematic> <name> [options]
# or
# nest g <schematic> <name> [options]
# if no test needed, then specify option --no-spec

# Generate a module declaration
nest generate module <mondule name>
# eg:
# cd c:\work\automation-hub
nest generate module home-automation  --no-spec

# Generate a controller declaration
nest generate controller [name]
# eg:
nest generate controller home-automation --no-spec

# Similarly: Generate a service declaration.
nest generate service home-automation  --no-spec
```


### First time project creation
```bash
# To skip git repository initialization: --skip-git
npm i -g @nestjs/cli
nest new automation-hub --skip-git

# for validation
npm install class-validator
npm install --save-dev @types/class-validator
npm install @nestjs/swagger

# npm run lint --fix
```