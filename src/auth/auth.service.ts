import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import * as bcrypt from 'bcrypt';

import { UsersDTO } from 'src/users/dto/create-user.dto';
import { validate } from 'class-validator';
import { LoggerService } from 'src/logger/logger.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly logger: LoggerService = new Logger(AuthService.name),
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async login(user: any): Promise<Record<string, any>> {
    // Validation Flag
    let isOk = false;

    // Transform body into DTO
    const userDTO = new UsersDTO();
    userDTO.email = user.email;
    userDTO.password = user.password;

    // TODO: Refactor this section with try catch block and return error message in the catch block
    // Validate DTO against validate function from class-validator
    await validate(userDTO).then((errors) => {
      if (errors.length > 0) {
        this.logger.debug(`${errors}`);
      } else {
        isOk = true;
      }
    });

    if (isOk) {
      // Get user information
      const userDetails = await this.usersService.findOne(user.email);

      // Check if user exists
      if (userDetails == null) {
        return { status: 401, msg: { msg: 'Invalid credentials' } };
      }

      // Check if the given password match with saved password
      // const isValid = bcrypt.compareSync(user.password, userDetails.password);
      const isValid = await bcrypt.compare(user.password, userDetails.password);
      if (isValid) {
        // Generate JWT token
        return {
          status: 200,
          msg: {
            email: user.email,
            access_token: this.jwtService.sign({
              email: user.email,
              sub: userDetails.id,
              role: userDetails.roles,
            }),
          },
        };
      }
      // Password or email does not match
      return { status: 401, msg: { msg: 'Invalid credentials' } };
    }
    return { status: 400, msg: { msg: 'Invalid fields.' } };
  }

  async register(body: any): Promise<Record<string, any>> {
    // Validation Flag
    let isOk = false;

    // Transform body into DTO
    const userDTO = new UsersDTO();
    userDTO.email = body.email;
    userDTO.name = body.name;
    // eslint-disable-next-line no-console
    console.log('bcryptjs');
    // eslint-disable-next-line no-console
    console.log(bcrypt);
    // eslint-disable-next-line no-console
    console.log(bcryptjs);
    // userDTO.password = bcryptjs.hashSync(body.password, 10);

    // eslint-disable-next-line no-console
    console.log('password', body.password);
    // userDTO.password = await bcrypt.hash(password, saltOrRounds);
    userDTO.password = bcrypt.hashSync(body.password, 10);

    // Validate DTO against validate function from class-validator
    await validate(userDTO).then((errors) => {
      if (errors.length > 0) {
        this.logger.debug(`${errors}`);
      } else {
        isOk = true;
      }
    });
    if (isOk) {
      await this.usersService.create(userDTO).catch((error) => {
        this.logger.debug(error.message);
        isOk = false;
      });
      if (isOk) {
        return { status: 201, content: { msg: 'User created with success' } };
      }
      return { status: 400, content: { msg: 'User already exists' } };
    }
    return { status: 400, content: { msg: 'Invalid content' } };
  }
}
