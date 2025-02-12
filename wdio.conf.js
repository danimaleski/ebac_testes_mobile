export const config = {
    //Via emualtor com appium cmd
   
    runner: 'local',
    port: 4723,


    // Via SauceLabs


    // user: 'oauth-daniella.maleski-6865e',
    // key: '329621af-67ab-49fe-a2dc-abd3a0f3aa7c',
    // hostname: 'ondemand.us-west-1.saucelabs.com',
    // port: 443,
    // baseUrl: 'wd/hub',
   
    
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [
        {
        //Via SauceLabs


        // platformName: 'Android',
        // 'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
        // 'appium:deviceName': 'Samsung.*',
        // //'appium:platformVersion': '10.0',
        // 'appium:automationName': 'UiAutomator2',
        // 'appium:disableIdLocatorAutocompletion': true,
        // 'sauce:options': {
        //     build: 'appium-build-test-ebacshop',
        //     name: 'EBAC Shop Test',
        //     deviceOrientation: 'PORTRAIT',
        //     appiumVersion: 'latest'
        //     },
       
       
        // Via emulator com appium cmd
       
        platformName: 'Android',
        'appium:deviceName': 'ebacqe',
        'appium:platformVersion': '9.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        'appium:appWaitActivity': '.MainActivity',
        'appium:disableIdLocatorAutocompletion': true
        
    }
],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true, //colocar falso caso queira tirar print dos testes.
    
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    //caso for true o disableWebdriverScreenshotsReporting, pode colocar um if(erro)
    afterTest: async function(test, context, {error, result, duration, passed, retries}){
            await driver.takeScreenshot();
    }
}

//allure serve para fazer relatórios
//para instalar o allure: npm install @wdio/allure-reporter --save-dev
//comando para gerar automaticamente o reporte: npm i allure-commandline
//é criado entao uma pasta allure-results, onde podemos tirar screenshots. 
//para visualizar o relatório sem todo o html, pode ser usado o npx allure serve
//allure-report cria uma pasta com todo o html
//npx allure generate allure-results
//npx allure open (com o html final gerado)
