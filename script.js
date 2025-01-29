const users = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@gmail.com' },
    { id: 3, name: 'Jim Bean', email: 'jim@gmail.com' }
  ];
  

  const source = `
    <ul>
      {{#each users}}
        <li>{{name}} - {{email}}</li>
      {{/each}}
    </ul>
  `;
  
  const template = Handlebars.compile(source);
  
  const context = { users: users };
  const html = template(context);
  
  document.getElementById('app').innerHTML = html;
  