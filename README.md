# Smart Devices API
APIS that serve CRUD operations to be consumed on this [repository](https://github.com/wambugudavis/smart-devices/tree/deploy)
## Demo
[App Demo](https://dwambugu-smart-devices.netlify.com/)

## Getting Started
Clone the repository
```
git clone https://github.com/wambugudavis/smart-devices-app.git
```
Install AdonisJS CLI globally via ``npm``
```
npm i -g @adonisjs/cli
```

Copy the example env file and make the required configuration changes in the .env file
```bash
cp .env.example .env
```

Generate a new application key
```bash
npx adonis key:generate
```

Run migration
```bash
adonis migration:run
```

Start the local development server
```bash
adonis serve --dev
```

Run tests
```bash
adonis test
```

  For more information run
```bash
node ace --help
```

## API Specification

> [Full API Spec](https://github.com/wambugudavis/smart-devices/blob/master/APISpec.md)

## Built With

* [AdonisJS](https://adonisjs.com/) - The node framework used

## Authors

* **[Davis Wambugu](https://github.com/wambugudavis)**
