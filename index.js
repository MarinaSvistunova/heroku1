const PORT = 4321;
require('http')
.Server((req, res) => res.end('Hello!'))
.listen(process.env.PORT || PORT);
