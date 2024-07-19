import { Controller } from '@nestjs/common';
import { UserService } from './User.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
