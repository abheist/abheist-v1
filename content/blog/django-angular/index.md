---
title: Angular and Django integration into one project
date: '2020-05-01'
description: For those times, when you ought to do things which you don’t want to do.
tags: ['django', 'angular']
type: 'book'
image: './django-angular.jpeg'
---

![Django and Angular](./django-angular.jpeg)

Requirements: Django > 1.8, Angular 8, 9 or above. I’ve done this Angular 9.

Let’s jump directly into a pool, I’m guessing, you already have a basic Django setup, which is:

```bash
- Vritualenv setup
- Django project
- Static files and template files setup
```

Start by installing [angular cli](https://cli.angular.io/) into your local.

```bash
npm install -g @angular/cli
```

if you are on windows’, please set the path of the `ng` command. Otherwise, you can use `npm run ng <your ng command>` for the rest of the article.

1. In Django, create a Landing view and URL pointing to that view. And render a template which you’re going to use for Angular. Let’s say `angular_index.html` which is residing into Django templates dir.
2. Now, from command-line, create a new angular project into a Django static directory. `ng new frontend`
3. Now your Angular apps\` basic structure is done, for testing, run `ng build`. This will compile your code and produce some files into dist directory which will be created into a frontend (your angular app) directory.
4. Now go into `angular_index.html` and include these compiled files `runtime-es2015.js`, `polyfills.js`, `styles-es2015.js`, `vendor-es2015.js`, `main-es2015.js` into Django template `js block`.

```django
<script type="type/javascript" src="{% static 'frontend/dist/runtime-es2015.js' %}"></script>
<script type="type/javascript" src="{% static 'frontend/dist/polyfills-es2015.js' %}"></script>
<script type="type/javascript" src="{% static 'frontend/dist/styles-es2015.js' %}"></script>
<script type="type/javascript" src="{% static 'frontend/dist/vendor-es2015.js' %}"></script>
<script type="type/javascript" src="{% static 'frontend/dist/main-es2015.js' %}"></script>
```

And now you’re almost done, just add `<app-root></app-root>` into `angular_index.html` and run your python server by `python manage.py runserver`. Goto your defined URL for your angular app and you’ll be seeing the app.

Up until now, everything is working fine, but the problem is every time you do some code change, you have run `ng build` to compile the angular code and then see the changes reflect in the browser.

So you might be thinking, why not use `ng serve`, yes `ng serve` is a great option. But the sad part is, it does not provide us with the compiled files. it saves those files in the memory. So we need to use `watch` option in `ng build` for development purpose.

Run `ng build --watch` into a terminal and it will run hot reload your project with every file change. But now, your browser will not show anything. Because at watch state, `ng build --watch` produces different filenames without postfix of `es2015` . So you need to change those files names in the `angular_index.html` and include the following files.

```django
<script type="type/javascript" src="{% static 'frontend/dist/runtime.js' %}"></script>
<script type="type/javascript" src="{% static 'frontend/dist/polyfills.js' %}"></script>
<script type="type/javascript" src="{% static 'frontend/dist/styles.js' %}"></script>
<script type="type/javascript" src="{% static 'frontend/dist/vendor.js' %}"></script>
<script type="type/javascript" src="{% static 'frontend/dist/main.js' %}"></script>
```

For better configuration, you can get the environment from `settings.py` and with the help of `if condition`, you can set the files according to the environment.

Just in case, if you add support for IE, there will extra file which will generate. You need to add that file to render everything perfectly.

🙏
