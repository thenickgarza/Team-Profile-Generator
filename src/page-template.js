function renderManager(Manager){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="style.css">
        <title>Team Portfolio Generator</title>
    </head>
    <body>
        <!-- container holding the team members -->
        <main class="container">
            <div class="row">
            <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">${Manager.managersName}</h5>
                <h6 class="card-subtitle"><i class="fas fa-dragon"></i> Manager</h6>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${Manager.managerId}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${Manager.managerEmail}">${Manager.email}</a></li>
                    <li class="list-group-item">Office Number: ${Manager.managerOffice}</li>
                </ul>
            </div>
        </div>
    </div>`;
  }

  function renderEngineer(engineer) {
    return `
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">${engineer.engineerName}</h5>
                <h6 class="card-subtitle"><i class="fas fa-chess-knight"></i> Engineer</h6>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.engineerId}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${engineer.engineerEmail}">${engineer.engineerEmail}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.engineerGithub}" target="_blank">${engineer.engineerGithub}</a></li>
                </ul>
            </div>
        </div>
    </div>
    `;
  }

  function renderIntern(intern){
    return `
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">${intern.internName}</h5>
                <h6 class="card-subtitle"><i class="fas fa-baby"></i> Intern</h6>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.internId}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${intern.internEmail}">${intern.internEmail}</a></li>
                    <li class="list-group-item">School: ${intern.internSchool}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
  }

  function renderBottom(){
    return `                  
            </div>
        </main>
    </body>
    </html>`;
  }
  
  module.exports = { renderManager, renderEngineer, renderIntern, renderBottom};