#paquetes a tener en cuenta

#generando un recurso, genera un crud coompleto
nest g resource NombreDelRecurso, ejemplo Items

#para swagger documentador
npm install --save @nestjs/swagger


#base de datos, en mi caso mysql2 de mariadb
npm install --save @nestjs/typeorm typeorm mysql2

#para usar sqlite hacer esto
npm install @nestjs/typeorm typeorm sqlite3

#para validar los DTO
npm i --save class-validator class-transformer

#para login y validaciones de token jwt
npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt
npm install @nestjs/passport passport passport-jwt
npm install bcrypt --save


recordar, para el proyecto o hago
nest generate module usuarios
nest generate service usuarios
nest generate controller usuarios
nest generate class usuarios/entities/usuario.entity --no-spec

o puedo usar resource y nombre del recurso, y me arma todo el circuito de crud básico