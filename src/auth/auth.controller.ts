import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authPayloadDto } from './Dto/authDto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async validateUser(@Body() authPayload: authPayloadDto) {
        const token = await this.authService.validateUser(authPayload);
        return { access_token: token };
    }
}
