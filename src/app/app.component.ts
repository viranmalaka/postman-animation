
import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentObject = {};
  currentPreCode = [];
  currentTestCode = [];

  stringifyData = '';
  params = [];
  header = [];
  body = [];
  simpleDataChange: boolean;

  public read() {
    this.data = JSON.parse(this.stringifyData);
  }

  public write() {
    this.stringifyData = JSON.stringify(this.data);
  }

  public addNewRequest(path: any): void {
    const name = 'Default Name';
    let currentArr = this.data.item;
    let previous;
    path.slice(1).forEach((x) => {
      previous = currentArr[x];
      currentArr = previous.item;
    });
    if (currentArr) {
      currentArr.push({
        'name': name,
        'event': [
          {
            'listen': 'test',
            'script': {
              'type': 'text/javascript',
              'exec': []
            }
          },
          {
            'listen': 'prerequest',
            'script': {
              'type': 'text/javascript',
              'exec': []
            }
          }
        ],
        'request': {
          'url': '',
          'method': 'GET',
          'header': [],
          'body': {
            'mode': 'raw',
            'raw': ''
          },
          'description': ''
        },
        'response': []
      });
    } else {
      previous['children'] = [
        {
          'name': name,
          'event': [
            {
              'listen': 'test',
              'script': {
                'type': 'text/javascript',
                'exec': []
              }
            },
            {
              'listen': 'prerequest',
              'script': {
                'type': 'text/javascript',
                'exec': []
              }
            }
          ],
          'request': {
            'url': '',
            'method': 'GET',
            'header': [],
            'body': {
              'mode': 'raw',
              'raw': ''
            },
            'description': ''
          },
          'response': []
        }
      ];
    }
    this.simpleDataChange = !this.simpleDataChange;
  }

  public removeRequest(path: any): void {
    if (path.length > 1) {
      let currentArr = this.data.item;
      let previous;
      path.slice(1, path.length - 1).forEach((x) => {
        previous = currentArr[x];
        currentArr = previous.item;
      });
      console.log(previous);
      console.log(currentArr);
      const removeIndex = path[path.length - 1];
      currentArr.splice(removeIndex, 1);
      this.simpleDataChange = !this.simpleDataChange;
    }
  }

  public selectNode(path: any): void {
    let currentArr = this.data.item;
    path.slice(1, path.length - 1).forEach((x) => {
      currentArr = currentArr[x]['item'];
    });
    const obj = currentArr[path[path.length - 1]];
    if (!obj['item']) {
      this.currentObject = obj;
      this.setCode();
    }
  }

  public setCode(): void{
    if (this.currentObject) {
      if (this.currentObject['event']) {
        this.currentObject['event'].forEach((x) => {
          if (x.listen === 'test') {
            this.currentTestCode = x.script.exec;
          }else if(x.listen === 'prerequest') {
            this.currentPreCode = x.script.exec;
          }
        });
      }
    }
  }

  strData = 'test';

  public setStrData(){
    this.strData = JSON.stringify(this.currentObject,null,4);
  }
  data = {
    'variables': [],
    'info': {
      'name': 'mcq-app',
      '_postman_id': '81df6785-cc7b-608f-1358-ef7f49199525',
      'description': '',
      'schema': 'https://schema.getpostman.com/json/collection/v2.0.0/collection.json'
    },
    'item': [
      {
        'name': 'admin',
        'description': '',
        'item': [
          {
            'name': 'admin login',
            'event': [
              {
                'listen': 'test',
                'script': {
                  'type': 'text/javascript',
                  'exec': [
                    'tests["Status code is 200"] = responseCode.code === 200;',
                    '',
                    '',
                    'var jsonData = JSON.parse(responseBody);',
                    'tests["Your test name"] = jsonData.user.username === "admin";',
                    '',
                    'postman.setEnvironmentVariable("token", jsonData.token);',
                    '',
                    ''
                  ]
                }
              }
            ],
            'request': {
              'url': '{{domain}}user/login',
              'method': 'POST',
              'header': [
                {
                  'key': 'Content-Type',
                  'value': 'application/x-www-form-urlencoded',
                  'description': ''
                },
                {
                  'key': 'token2',
                  'value': 'this is test-token',
                  'description': 'testing token description'
                }
              ],
              'body': {
                'mode': 'urlencoded',
                'urlencoded': [
                  {
                    'key': 'username',
                    'value': 'admin',
                    'description': '',
                    'type': 'text'
                  },
                  {
                    'key': 'password',
                    'value': 'test',
                    'description': '',
                    'type': 'text'
                  }
                ]
              },
              'description': 'this is descriptions'
            },
            'response': []
          }
        ]
      },
      {
        'name': 'new-folder',
        'description': '',
        'item': [
          {
            'name': 'test get request',
            'event': [
              {
                'listen': 'test',
                'script': {
                  'type': 'text/javascript',
                  'exec': [
                    '// post test request in here'
                  ]
                }
              },
              {
                'listen': 'prerequest',
                'script': {
                  'type': 'text/javascript',
                  'exec': [
                    '// pre-request code gose here in get request'
                  ]
                }
              }
            ],
            'request': {
              'url': '{{domain}}test_link',
              'method': 'GET',
              'header': [
                {
                  'key': 'headervalue',
                  'value': '1',
                  'description': 'descrip'
                },
                {
                  'key': 'headervalue2',
                  'value': '2',
                  'description': 'asdfadf'
                }
              ],
              'body': {
                'mode': 'raw',
                'raw': ''
              },
              'description': 'description of get request'
            },
            'response': []
          },
          {
            'name': 'name of post request',
            'event': [
              {
                'listen': 'test',
                'script': {
                  'type': 'text/javascript',
                  'exec': [
                    '// test code here'
                  ]
                }
              },
              {
                'listen': 'prerequest',
                'script': {
                  'type': 'text/javascript',
                  'exec': [
                    '// pre-reqest code here'
                  ]
                }
              }
            ],
            'request': {
              'url': '{{domain}}test_link',
              'method': 'POST',
              'header': [
                {
                  'key': 'hed',
                  'value': '1',
                  'description': 'des'
                },
                {
                  'key': 'hed2',
                  'value': '2',
                  'description': 'des 2'
                },
                {
                  'key': 'Content-Type',
                  'value': 'application/x-www-form-urlencoded',
                  'description': ''
                }
              ],
              'body': {
                'mode': 'urlencoded',
                'urlencoded': [
                  {
                    'key': 'bodyvalue',
                    'value': '1',
                    'description': 'des',
                    'type': 'text'
                  },
                  {
                    'key': 'bodyvalue2',
                    'value': '2',
                    'description': 'des2',
                    'type': 'text'
                  }
                ]
              },
              'description': 'description of post request'
            },
            'response': []
          }
        ]
      },
      {
        'name': 'testing Api started',
        'event': [
          {
            'listen': 'test',
            'script': {
              'type': 'text/javascript',
              'exec': [
                'tests["Status code is 200"] = responseCode.code === 200;',
                '',
                'var jsonData = JSON.parse(responseBody);',
                'tests["Your test name"] = jsonData.status === 1;',
                'tests["message is exist"] = jsonData.message !== undefined;'
              ]
            }
          },
          {
            'listen': 'prerequest',
            'script': {
              'type': 'text/javascript',
              'exec': [
                '// pre-request code gese here'
              ]
            }
          }
        ],
        'request': {
          'url': '{{domain}}test_link',
          'method': 'GET',
          'header': [],
          'body': {
            'mode': 'raw',
            'raw': ''
          },
          'description': ''
        },
        'response': []
      }
    ]
  };
}
