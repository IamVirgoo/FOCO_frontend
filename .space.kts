/**
* JetBrains Space Automation
* This Kotlin-script file lets you automate build activities
* For more info, see https://www.jetbrains.com/help/space/automation.html
*/

job("Basic setup") {
    container(image = "flumine.registry.jetbrains.space/p/flumine/docker-images/ansible:0.1.0") {
        shellScript {
            content = """
                apt-get install -y nodejs npm
                npm i --dev
            """
        }
    }
}
