API Points yang saya buat adalah users, articles, dan portofolios

User
getAllUser untuk memperoleh data seluruh user dari database

GET: /users

response:
[
    {
        "id"            : "",
        "email"         : "",
        "name"          : "",
        "motto"         : "",
        "ig_url"        : "",
        "fb_url"        : "",
        "gh_url"        : "",
        "yt_url"        : "",
        "avatar_url"    : ""
    },
    ...
]

getUserById untuk memperoleh data user berdasarkan id

GET: /users/[id]

reponse:
{
    "id"            : "",
    "email"         : "",
    "name"          : "",
    "motto"         : "",
    "ig_url"        : "",
    "fb_url"        : "",
    "gh_url"        : "",
    "yt_url"        : "",
    "avatar_url"    : ""
}

createUser untuk membuat data baru yang disimpan ke api points

POST: /users

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "name"          : "",
    "email"         : "",
    "motto"         : "",
    "ig_url"        : "",
    "fb_url"        : "",
    "gh_url"        : "",
    "yt_url"        : "",
    "avatar_url"    : ""
}

response:
true    // if success
false   // if failure

updateUser untuk mengubah data pada api points

PUT: /users

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "id"            : "",
    "name"          : "",
    "motto"         : "",
    "ig_url"        : "",
    "fb_url"        : "",
    "gh_url"        : "",
    "yt_url"        : "",
    "avatar_url"    : ""
}

response:
true    // if success
false   // if failure

deleteUser untuk menghapus data user pada api points

DELETE: /users/[id]

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

response:
true    // if success
false   // if failure

Articles

getAllArticle untuk memperoleh data seluruh article dari api points

GET: /articles

response:
[
    {
        "id"            : "",
        "author_id"     : "",
        "author_name"   : "",
        "title"         : "",
        "content"       : "",
        "thumbnail_url" : "",
        "author_id"     : "",
        "created_date"  : ""
    }
]

getArticleById untuk memperoleh data article berdasarkan id

GET: /articles/author/[author_id]

response:
[
    {
        "id"            : "",
        "author_id"     : "",
        "author_name"   : "",
        "title"         : "",
        "content"       : "",
        "thumbnail_url" : "",
        "author_id"     : "",
        "created_date"  : ""
    },
    ...
]

createArticle untuk manambahkan data article ke api points

POST: /articles

data:
{       
    "title"         : "",
    "author_id"     : "",
    "content"       : "",
    "thumbnail_url" : "",
    "author_id"     : "",
    "created_date"  : ""
}

response:
true    // if success
false   // if failure

updateArticle untuk mengubah data pada server yang telah ada pada api points

PUT: /articles

data:
{      
    "id"            : "", 
    "author_id"     : "",
    "title"         : "",
    "content"       : "",
    "thumbnail_url" : "",
    "author_id"     : "",
    "created_date"  : ""
}

response:
true    // if success
false   // if failure

deleteArticle untuk menghapus data article yang telah ada pada api points

DELETE: /articles/[id]

response:
true    // if success
false   // if failure

Portofolios

getAllPortofolios untuk menampilkan semua portofolio yang ada di api points

GET: /portfolios

response:
[
    {
        "id"            : "",
        "author_id"     : "",
        "author_name"   : "",
        "title"         : "",
        "description    : "",
        "thumbnail_url" : "",
        "technologies"  : ["", "", ...],
        "project_url"   : "",
        "project_start" : "",
        "project_end"   : ""
    },
    ...
]

getPortofolioByAuthor untuk menampilkan portofolio berdasarkan id author

GET: /portfolios/author/author_id

response:
[
    {
        "id"            : "",
        "author_id"     : "",
        "author_name"   : "",
        "title"         : "",
        "description    : "",
        "thumbnail_url" : "",
        "technologies"  : ["", "", ...],
        "project_url"   : "",
        "project_start" : "",
        "project_end"   : ""
    },
    ...
]

getPortofolioById untuk menampilkan data portofolio berdasarkan id portofolio

GET: /portfolios/[id]

response:

{
    "id"            : "",
    "author_id"     : "",
    "author_name"   : "",
    "title"         : "",
    "description    : "",
    "thumbnail_url" : "",
    "technologies"  : ["", "", ...],
    "project_url"   : "",
    "project_start" : "",
    "project_end"   : ""
}

createPortofolio untuk membuat data portofolio baru

POST: /portfolios

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{
    "author_id"     : "",
    "title"         : "",
    "description    : "",
    "thumbnail_url" : "",
    "technologies"  : ["", "", ...],
    "project_url"   : "",
    "project_start" : "",
    "project_end"   : ""
}

updatePortofolio untuk mengubah data portofolio yang ada

PUT: /portfolios/[id]

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

body:
{    
    "author_id"     : "",
    "title"         : "",
    "description    : "",
    "thumbnail_url" : "",
    "technologies"  : ["", "", ...],
    "project_url"   : "",
    "project_start" : "",
    "project_end"   : ""
}

response:
true    // if success
false   // if failure

deletePortofolio untuk menghapus data portofolio yang ada di api points

DELETE: /portfolios/[id]

headers:
{
    Content-type: 'application/json',
    Authorization: 'Bearer [access_token]'
}

response:
true    // if success
false   // if failure


