import http from 'http';

const config = {
	port: 3001,
};

const server = http.createServer((req, res) => res.end('Hello!'));
server.listen(config.port, () => global.console.log(`Server is listening on ${config.port} port.`));
