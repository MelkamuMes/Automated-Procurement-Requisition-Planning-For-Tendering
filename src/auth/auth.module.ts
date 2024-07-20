import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
// import { UsersModule } from '../users/users.module'; // Import UsersModule if you use it

@Module({
  imports: [
    JwtModule.register({
      secret: 'abc123', // Consider using environment variables for secrets
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
    // If you use the UsersModule for user-related functionality
    // UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService], // Export AuthService if you need it in other modules
})
export class AuthModule {}
